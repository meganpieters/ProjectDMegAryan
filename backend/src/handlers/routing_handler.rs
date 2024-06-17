use diesel::SqliteConnection;
use diesel::prelude::*;
use diesel::dsl::exists;
use diesel::select;
use crate::{models::RouteRequests, routes::GetReturn, models::Queue, models::ChargingStations};
use rocket::serde::json::Json;
use rocket::serde::{Deserialize, Serialize};
use std::collections::BinaryHeap;
use std::cmp::Reverse;
use crate::schema::ChargingStations::dsl::*;


// voor het uploaden moet er een andere route gebruikt worden waar geen id in is zodat die
// gemaakt kan worden door sqlite
#[derive(Queryable, Insertable, Serialize, Deserialize)]
#[diesel(table_name = crate::schema::RouteRequests)]
#[serde(crate = "rocket::serde")]
pub struct NewRouteRequest {
    pub percentage: f32,
    pub distance: i32,
    pub eta: i32, // minuten
    pub timestamp: i32,
    pub user_id: i32,
    pub is_done: bool,
}

impl Eq for RouteRequests {}

/// Vergelijk waardes voor 2 floats.
/// # Voorbeeld
/// ```
/// // vergelijk twee percentages van een batterij
/// .then_with(|| compare_f32(self.percentage, other.percentage))
/// ```
/// Dit kan bijvoorbeeld gebruikt worden in Ord voor structs of iets dergelijke.
fn compare_f32(x: f32, y: f32) -> std::cmp::Ordering {
    // vergelijk de twee floats
    x.partial_cmp(&x).unwrap_or_else(|| {
        // ze zijn gelijk als er geen nummer in staat
        if x.is_nan() && y.is_nan() {
            std::cmp::Ordering::Equal
        // als x geen nummer is is het minder
        } else if x.is_nan() {
            std::cmp::Ordering::Less
        // als y geen nummer is is het groter
        } else if y.is_nan() {
            std::cmp::Ordering::Greater
        // failsafe waarde omdat ze wss gelijk zijn
        } else {
            std::cmp::Ordering::Equal
        }
    })
}

impl Ord for RouteRequests {
    fn cmp(&self, other: &Self) -> std::cmp::Ordering {
        // eerst kijken naar de tijd dat iemand aankomt.
        self.eta.cmp(&other.eta)
            // dan hoelang voor als de tijd van aankomst verschilt
            .then_with(|| self.distance.cmp(&other.distance))
            // dan op batterij percentage
            .then_with(|| compare_f32(self.percentage, other.percentage))
    }
}

impl PartialOrd for RouteRequests {
    fn partial_cmp(&self, other: &Self) -> Option<std::cmp::Ordering> {
        Some(self.cmp(other))
    }
}

/// Upload een aanvraging van een laadpaal van een gebruiker naar de database. Als er geen auto's
/// in een laadpaal zitten, kan deze toegevoegd worden aan een laadpaal.
pub fn upload_route(
    conn: &mut SqliteConnection,
    data: Json<NewRouteRequest>
) -> Result<(bool, String, i32), diesel::result::Error> {
    use crate::schema::RouteRequests;
    use crate::models::RouteRequests as RouteRequestsModel;
    use crate::schema::RouteRequests::dsl::*;
    use crate::handlers::charger_handler::add_route_to_charging_station;

    // insert de data in de table
    diesel::insert_into(RouteRequests::table).values(&data.into_inner()).execute(conn)?;
    // kijk of de data die je krijgt goed is geupload
    match RouteRequests.order(id.desc()).first::<RouteRequestsModel>(conn) {
        // is het Ok? dan kan je het resultaat terug geven
        Ok(last_route) => {
            let res = add_route_to_charging_station(conn, &last_route);
            let res_message;
            match res {
                Ok(_) => {
                    res_message = "Route is toegevoegd om gelijk aan de lader te zetten".to_string();
                },
                Err(_) => {
                    res_message = "Route moet verwerkt worden in de queue".to_string();
                },
            }
            Ok((true, res_message, last_route.id))
        }
        // oops er is iets fout gegaan
        Err(err) => {
            Err(err.into())
        }
    }
}

/// Als er plek is in de laadpalen kan deze toegevoegd worden aan een laadpaal zodat die niet in de
/// priority queue terecht komt. Wat ook betekent dat de auto gelijk kan opladen.
pub fn add_route_to_charging_station(conn: &mut SqliteConnection, data: &RouteRequests) -> GetReturn<ChargingStations> {
    use crate::models::ChargingStations as ChargingStationsModel;
    // zoek een laadpaal die vrij is om een auto aan toe te voegen
    let available_charger: Result<ChargingStationsModel, _> = ChargingStations
        .filter(status.eq("available"))
        .first::<ChargingStationsModel>(conn);

    // voeg een auto toe als er een laadpaal vrij is, anders geef een error met dat
    // er geen laadpaal vrij is.
    match available_charger {
        Ok(mut charging_station) => {
            charging_station.route_request_id = data.id;
            match diesel::update(ChargingStations.find(charging_station.id.clone()))
                .set(route_request_id.eq(data.id))
                .execute(conn) {
                    Ok(_) => {
                        Ok((true, "Succesvol status veranderd van de charger".to_string(), charging_station))
                    },
                    Err(err) => Err(err.into()),
                }
        },
        Err(err) => Err(err.into()),
    }
}

/// Haal alle aanvragen op van de gebruikers
pub fn get_routes(conn: &mut SqliteConnection) -> GetReturn<Vec<RouteRequests>> {
    use crate::models::RouteRequests;
    use crate::schema::RouteRequests::dsl::*;
    let all_routes = RouteRequests.load::<RouteRequests>(conn)?;
    Ok((true, "Aanvragen successvol gevonden".to_string(), all_routes))
}

/// Haal een specifieke aanvraag op van een gebruiker
pub fn get_route(conn: &mut SqliteConnection, id_to_find: i32) -> GetReturn<RouteRequests> {
    use crate::schema::RouteRequests::dsl::*;
    if let Some(found_route) = RouteRequests.filter(id.eq(id_to_find)).first(conn).optional()? {
        Ok((true, format!("Aanvraag gevonden met het id: {}", id_to_find), found_route))
    } else {
        Err(diesel::result::Error::NotFound)
    }
}

/// Maak de priority queue van vandaag voor de autos die niet in een lader zitten.
pub fn create_queue(conn: &mut SqliteConnection) -> GetReturn<Vec<Queue>> {
    use chrono::Local;
    use crate::schema::RouteRequests::dsl::*;
    use crate::schema::ChargingStations::dsl::{ChargingStations as ChargingStationsDsl, route_request_id as cs_route_request_id};
    use crate::models::RouteRequests as RouteRequestsModel;
    use diesel::prelude::*;

    // Pak de timestamps van vandaag om alleen maar aanvragen van vandaag te hebben in de priority queue.
    let now = Local::now().naive_local();
    let start_of_today = now.date().and_hms_opt(0, 0, 0).unwrap();
    let end_of_today = now.date().and_hms_opt(23, 59, 59).unwrap();

    let today_timestamp: i32 = start_of_today.and_utc().timestamp() as i32;
    let end_of_today_timestamp: i32 = end_of_today.and_utc().timestamp() as i32;

    // haal alle aanvragen op om in de queue te zetten
    let routes_result = RouteRequests
        .filter(timestamp.ge(today_timestamp))
        .filter(timestamp.le(end_of_today_timestamp))
        .filter(is_done.eq(false))
        .left_join(ChargingStationsDsl.on(cs_route_request_id.eq(id)))
        .filter(cs_route_request_id.is_null())
        .select(RouteRequests::all_columns())
        .load::<RouteRequestsModel>(conn);

    // gebruik een binary heap om de priority queue te maken
    let mut priority_queue: BinaryHeap<Reverse<RouteRequestsModel>> = BinaryHeap::new();

    // als er aanvragen zijn gevonden kan je deze in de priority queue zetten
    if let Ok(routes) = routes_result {
        for route in routes {
            priority_queue.push(Reverse(route));
        }
    } else {
        return Err(diesel::result::Error::NotFound);
    }

    let mut queue = Vec::new();
    let mut queue_id: i32 = 0;

    // loop door de priority queue om die te gebruiken
    while let Some(Reverse(route)) = priority_queue.pop() {
        let new_queue_item = Queue {
            id: queue_id,
            place: queue_id,
            user_id: route.user_id,
            route_request_id: route.id,
        };
        queue.push(new_queue_item);
        queue_id += 1;
    }

    Ok((true, "queue is gevonden met de correcte volgorde".to_string(), queue))
}

/// zoek de plek van een gebruiker in de queue
pub fn get_item_on_place(conn: &mut SqliteConnection, id_to_find: i32) -> GetReturn<RouteRequests> {
    let queue: Vec<Queue> = create_queue(conn).ok().unwrap().2.into_iter().collect();
    let found_queue = queue.iter().find(|&item| { item.place == id_to_find }).unwrap();
    if found_queue.route_request_id > 0 {
        return get_route(conn, found_queue.route_request_id);
    } else {
        Err(diesel::result::Error::NotFound)
    }
}

/// zoek de plek van een route vanuit een aanvraag id
pub fn get_request_placement(conn: &mut SqliteConnection, id_to_find: i32) -> GetReturn<Queue> {
    let queue: Vec<Queue> = create_queue(conn).ok().unwrap().2.into_iter().collect();
    let found_queue = queue.iter().find(|&item| { item.route_request_id == id_to_find }).cloned().unwrap();
    if found_queue.id > 0 {
        return Ok((true, "Plaats in de queue gevonden".to_string(), found_queue));
    } else {
        Err(diesel::result::Error::NotFound)
    }
}

/// zoek de laatste aanvraag van een gebruiker die niet aan een lader zit
pub fn get_latest_route_request(conn: &mut SqliteConnection, id_to_find: i32) -> GetReturn<RouteRequests> {
    use chrono::{Local, Duration};
    use crate::schema::RouteRequests::dsl::*;
    use crate::models::RouteRequests as RouteRequestsModel;

    let now = Local::now().naive_local();
    let start_of_today = now.date().and_hms_opt(0, 0, 0).unwrap();
    let start_of_tomorrow = (now.date() + Duration::days(1)).and_hms_opt(0, 0, 0).unwrap();

    let today_timestamp: i32 = start_of_today.and_utc().timestamp() as i32;
    let tomorrow_timestamp: i32 = start_of_tomorrow.and_utc().timestamp() as i32;

    let found_route = RouteRequests
        .filter(user_id.eq(id_to_find))
        .filter(timestamp.ge(today_timestamp))
        .filter(timestamp.lt(tomorrow_timestamp))
        .order(timestamp.desc())
        .first::<RouteRequestsModel>(conn)
        .optional()?;

    match found_route {
        Some(route) => {
            Ok((true, "Opgevraagde aanvraag van de gebruiker gevonden".to_string(), route))
        },
        None => {
            Ok((false, "Geen aanvragingen gevonden van de gebruiker vandaag".to_string(), RouteRequestsModel {
                id: 0,
                percentage: 0.0,
                distance: 0,
                eta: 0,
                timestamp: 0,
                is_done: false,
                user_id: 0,
            }))
        }
    }
}

/// zoek de laatste aanvraag van een gebruiker die ook daadwerkelijk in een laadpaal zit
pub fn get_latest_route_charged_request(conn: &mut SqliteConnection, id_to_find: i32) -> GetReturn<(RouteRequests, bool)> {
    use chrono::{Local, Duration};
    use crate::schema::RouteRequests::dsl::*;
    use crate::schema::ChargingStations::dsl as charging_dsl;
    use crate::models::RouteRequests as RouteRequestsModel;

    let now = Local::now().naive_local();
    let start_of_today = now.date().and_hms_opt(0, 0, 0).unwrap();
    let start_of_tomorrow = (now.date() + Duration::days(1)).and_hms_opt(0, 0, 0).unwrap();

    let today_timestamp: i32 = start_of_today.and_utc().timestamp() as i32;
    let tomorrow_timestamp: i32 = start_of_tomorrow.and_utc().timestamp() as i32;

    let found_route = RouteRequests
        .filter(user_id.eq(id_to_find))
        .filter(timestamp.ge(today_timestamp))
        .filter(timestamp.lt(tomorrow_timestamp))
        .order(timestamp.desc())
        .first::<RouteRequestsModel>(conn)
        .optional()?;

    match found_route {
        Some(route) => {
            let in_charger = select(exists(
                charging_dsl::ChargingStations.filter(charging_dsl::route_request_id.eq(route.id))
            )).get_result::<bool>(conn)?;

            Ok((true, "Opgevraagde aanvraag van de gebruiker gevonden die in een laadpaal zit".to_string(), (route, in_charger)))
        },
        None => {
            Ok((false, "Geen aanvragingen gevonden van de gebruiker vandaag".to_string(), (
                RouteRequestsModel {
                    id: 0,
                    percentage: 0.0,
                    distance: 0,
                    eta: 0,
                    timestamp: 0,
                    is_done: false,
                    user_id: 0,
                }, false
            )))
        }
    }
}

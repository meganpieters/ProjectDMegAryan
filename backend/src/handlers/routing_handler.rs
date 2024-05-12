use diesel::SqliteConnection;
use diesel::prelude::*;
use crate::{models::RouteRequests, routes::GetReturn, models::Queue};
use rocket::serde::json::Json;
use rocket::serde::{Deserialize, Serialize};
use std::collections::BinaryHeap;
use std::cmp::Reverse;

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
}

impl Eq for RouteRequests {}

impl Ord for RouteRequests {
    fn cmp(&self, other: &Self) -> std::cmp::Ordering {
        self.eta.cmp(&other.eta)
    }
}

impl PartialOrd for RouteRequests {
    fn partial_cmp(&self, other: &Self) -> Option<std::cmp::Ordering> {
        Some(self.cmp(other))
    }
}

pub fn upload_route(
    conn: &mut SqliteConnection,
    data: Json<NewRouteRequest>
) -> Result<(bool, String, i32), diesel::result::Error> {
    use crate::schema::RouteRequests;
    use crate::models::RouteRequests as RouteRequestsModel;
    use crate::schema::RouteRequests::dsl::*;
    // insert de data in de table
    diesel::insert_into(RouteRequests::table).values(&data.into_inner()).execute(conn)?;
    // kijk of de data die je krijgt goed is geupload
    match RouteRequests.order(id.desc()).first::<RouteRequestsModel>(conn) {
        // is het Ok? dan kan je het resultaat terug geven
        Ok(last_route) => {
            Ok((true, "Route is toegevoegd om te verwerken!".to_string(), last_route.id))
        }
        // oops er is iets fout gegaan
        Err(err) => {
            Err(err.into())
        }
    }
}

pub fn get_routes(conn: &mut SqliteConnection) -> GetReturn<Vec<RouteRequests>> {
    use crate::models::RouteRequests;
    use crate::schema::RouteRequests::dsl::*;
    let all_routes = RouteRequests.load::<RouteRequests>(conn)?;
    Ok((true, "Aanvragen successvol gevonden".to_string(), all_routes))
}

pub fn get_route(conn: &mut SqliteConnection, id_to_find: i32) -> GetReturn<RouteRequests> {
    use crate::schema::RouteRequests::dsl::*;
    if let Some(found_route) = RouteRequests.filter(id.eq(id_to_find)).first(conn).optional()? {
        Ok((true, format!("Aanvraag gevonden met het id: {}", id_to_find), found_route))
    } else {
        Err(diesel::result::Error::NotFound)
    }
}

// TODO: RouteRequests moet aangepast worden met een datum van aanvragen want dan kan je beter
// filteren, en of de request klaar is
pub fn create_queue(conn: &mut SqliteConnection) -> GetReturn<Vec<Queue>> {
    use crate::models::RouteRequests;
    use crate::schema::RouteRequests::dsl::*;
    let mut priority_queue: BinaryHeap<Reverse<RouteRequests>> = BinaryHeap::new();
    let routes = get_routes(conn).ok();
    for route in routes.unwrap().2 {
        priority_queue.push(Reverse(route));
    }
    let mut queue = Vec::new();
    let mut queue_id: i32 = 0;
    for (place, route) in priority_queue.iter().enumerate() {
        let new_queue_item = Queue {
            id: queue_id,
            place: i32::try_from(place).ok().unwrap(),
            user_id: route.0.user_id,
            route_request_id: route.0.id,
        };
        queue.push(new_queue_item);
        queue_id += 1;
    }
    // diesel::insert_into(Queue::table).values(&queue.into_inner()).execute(conn)?;
    return Ok((true, "queue is gevonden met de correcte volgorde".to_string(), queue));
}

pub fn get_item_on_place(conn: &mut SqliteConnection, id_to_find: i32) -> GetReturn<RouteRequests> {
    let queue: Vec<Queue> = create_queue(conn).ok().unwrap().2.into_iter().collect();
    let found_queue = queue.iter().find(|&item| { item.place == id_to_find }).unwrap();
    if found_queue.route_request_id > 0 {
        return get_route(conn, found_queue.route_request_id);
    } else {
        Err(diesel::result::Error::NotFound)
    }
}

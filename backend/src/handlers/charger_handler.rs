use diesel::SqliteConnection;
use diesel::prelude::*;
use crate::{models::RouteRequests, routes::GetReturn, models::ChargingStations};
use crate::schema::ChargingStations::dsl::*;
use crate::handlers::PostReturn;
use crate::handlers::UpdateReturn;
use rocket::serde::json::Json;
use diesel::OptionalExtension;

pub fn update_charger(conn: &mut SqliteConnection, id_to_update: String, data: Json<ChargingStations>) -> UpdateReturn<String> {
    use crate::schema::ChargingStations::dsl::*;

    match diesel::update(ChargingStations.filter(id.eq(id_to_update))).set(&data.into_inner()).execute(conn) {
        Ok(updated_charger) => {
            Ok((true, "Charger updated successfully".to_string(), updated_charger.to_string()))
        }
        Err(_err) => {
            Err(diesel::result::Error::NotFound)
        }
    }
}

pub fn delete_charger(conn: &mut SqliteConnection, id_to_delete: String) -> GetReturn<ChargingStations> {
    let target = ChargingStations.filter(id.eq(&id_to_delete));

    let charger_to_delete = target.clone().first::<ChargingStations>(conn);

    match diesel::delete(target).execute(conn) {
        Ok(_) => match charger_to_delete {
            Ok(charger) => Ok((true, "Charger deleted successfully".to_string(), charger)),
            Err(_) => Err(diesel::result::Error::NotFound),
        },
        Err(_) => Err(diesel::result::Error::NotFound),
    }
}

pub fn add_charger(conn: &mut SqliteConnection, data: &ChargingStations) -> PostReturn {
    match diesel::insert_into(ChargingStations)
        .values(data)
        .execute(conn) {
            Ok(_) => {
                let last_id_str = ChargingStations.order(id.desc()).first::<ChargingStations>(conn).unwrap().id;
                let last_id = last_id_str.parse::<i32>().unwrap_or(0); // Parse the id as an i32, default to 0 if parsing fails
                Ok((true, "Charger succesvol toegevoegd.".to_string(), last_id))
            },
            Err(err) => Err(err.into()),
        }
}

pub fn add_route_to_charging_station(conn: &mut SqliteConnection, data: &RouteRequests) -> GetReturn<ChargingStations> {
    use crate::models::ChargingStations as ChargingStationsModel;

    let available_charger: Result<ChargingStationsModel, _> = ChargingStations
        .filter(status.eq("available"))
        .first::<ChargingStationsModel>(conn);

    match available_charger {
        Ok(mut charging_station) => {
            charging_station.route_request_id = data.id;
            match diesel::update(ChargingStations.find(charging_station.id.clone()))
                .set((route_request_id.eq(data.id), status.eq("taken")))
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

pub fn get_all_charging_stations(conn: &mut SqliteConnection) -> GetReturn<Vec<ChargingStations>> {
    use crate::models::ChargingStations;
    use crate::schema::ChargingStations::dsl::*;
    let all_chargers = ChargingStations.load::<ChargingStations>(conn)?;
    Ok((true, "Alle chargers gevonden.".to_string(), all_chargers))
}

pub fn get_charger(conn: &mut SqliteConnection, id_to_find: String) -> GetReturn<ChargingStations> {
    use crate::schema::ChargingStations::dsl::*;

    if let Some(found_charger) = ChargingStations.filter(id.eq(id_to_find)).first(conn).optional()? {
        Ok((true, "Charger found successfully".to_string(), found_charger))
    } else {
        Err(diesel::result::Error::NotFound)
    }
}

pub fn stop_charging(conn: &mut SqliteConnection, route_request_id_to_update: i32) -> GetReturn<bool> {
    use crate::schema::RouteRequests::dsl::{RouteRequests, id as route_id, is_done};
    use crate::schema::ChargingStations::dsl::{ChargingStations, id as charger_id};

    conn.transaction::<_, diesel::result::Error, _>(|conn| {
        // Update the RouteRequests table to mark the route request as done
        diesel::update(RouteRequests.filter(route_id.eq(route_request_id_to_update)))
            .set(is_done.eq(true))
            .execute(conn)?;

        // Find the charging station associated with this route request
        let charger = ChargingStations
            .filter(route_request_id.eq(route_request_id_to_update))
            .first::<crate::models::ChargingStations>(conn)
            .optional()?;

        // If there's no associated charger, return an error
        let charger = match charger {
            Some(charger) => charger,
            None => return Err(diesel::result::Error::NotFound),
        };

        // Update the charging station to set its status to "available" and set the route_request_id to 0
        diesel::update(ChargingStations.filter(charger_id.eq(charger.id.clone())))
            .set((status.eq("available"), route_request_id.eq(0)))
            .execute(conn)?;

        // If everything succeeds, return a success message
        Ok((true, "Charging stopped successfully. Charger is now available.".to_string(), true))
    }).map_err(|err| err.into())
}


use diesel::prelude::*;
use diesel::sqlite::SqliteConnection;
use rocket::serde::json::Json;
use crate::handlers::charger_handler::*;
use crate::models::ChargingStations as ChargerModel;
use crate::schema::ChargingStations::dsl::*;
use crate::db::establish_test_connection;
use diesel::connection::SimpleConnection;
use diesel::result::Error;


// Bovenaan wordt een test database opgezet met twee tabellen:
// - ChargingStations: voor het opslaan van laadstations
// - RouteRequests: voor het opslaan van routeaanvragen
// testen geven aan of deze succesfol is gegaan en geven 
// de bijpassend output terug 
fn setup_test_db() -> SqliteConnection {
    let mut conn = establish_test_connection();
    conn.batch_execute("
        CREATE TABLE IF NOT EXISTS ChargingStations (
            id TEXT PRIMARY KEY,
            status TEXT NOT NULL,
            max_power REAL NOT NULL,
            route_request_id INTEGER NOT NULL
        );
        CREATE TABLE IF NOT EXISTS RouteRequests (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            route TEXT NOT NULL,
            is_done INTEGER NOT NULL DEFAULT 0
        );
        INSERT INTO ChargingStations (id, status, max_power, route_request_id)
        VALUES
            ('93d712d9-2b17-4e64-a999-354bbb8d20f1', 'Available', 100.0, 1);
        INSERT INTO RouteRequests (id, route)
        VALUES
            (1, 'Route 1');
    ").unwrap();
    conn
}


#[test]
fn test_add_charger() {
    let conn = &mut setup_test_db();
    let new_charger = ChargerModel {
        id: "1".to_string(), 
        status: "Available".to_string(),
        max_power: 100.0,
        route_request_id: 1,
    };

    let result = add_charger(conn, &new_charger);

    if let Err(e) = &result {
        println!("Error: {:?}", e);
    }

    assert!(result.is_ok());
    let (success, _, charger_id) = result.unwrap();
    assert!(success, "Charger was not added successfully");
}


#[test]
fn test_update_charger() {
    let conn = &mut setup_test_db();
    let id_to_update = "93d712d9-2b17-4e64-a999-354bbb8d20f1".to_string();
    let data = Json(ChargerModel {
        id: id_to_update.clone(),
        status: "Unavailable".to_string(),
        max_power: 100.0,
        route_request_id: 1,
    });

    let result = update_charger(conn, id_to_update.clone(), data);

    if let Err(e) = &result {
        println!("Error: {:?}", e);
    }

    assert!(result.is_ok());
    let (success, _, updated_charger_id) = result.unwrap();
    assert!(success);
    assert_eq!(updated_charger_id, "1");
}

#[test]
fn test_delete_charger() {
    let conn = &mut setup_test_db();
    let id_to_delete = "93d712d9-2b17-4e64-a999-354bbb8d20f1".to_string();

    let result = delete_charger(conn, id_to_delete.clone());

    if let Err(e) = &result {
        println!("Error: {:?}", e);
    }

    assert!(result.is_ok());
    let (success, _, deleted_charger) = result.unwrap();
    assert!(success);
    assert_eq!(deleted_charger.id, id_to_delete);
}

#[test]
fn test_get_all_charging_stations() {
    let conn = &mut setup_test_db();

    let result = get_all_charging_stations(conn);

    if let Err(e) = &result {
        println!("Error: {:?}", e);
    }

    assert!(result.is_ok());
    let (success, _, all_chargers) = result.unwrap();
    assert!(success);
    assert!(all_chargers.len() > 0);
}

#[test]
fn test_get_charger() {
    let conn = &mut setup_test_db();
    let id_to_find = "93d712d9-2b17-4e64-a999-354bbb8d20f1".to_string();

    let result = get_charger(conn, id_to_find.clone());

    if let Err(e) = &result {
        println!("Error: {:?}", e);
    }

    assert!(result.is_ok());
    let (success, _, found_charger) = result.unwrap();
    assert!(success);
    assert_eq!(found_charger.id, id_to_find);
}

#[test]
fn test_stop_charging() {
    let conn = &mut setup_test_db();
    let route_request_id_to_update = 1;

    let result = stop_charging(conn, route_request_id_to_update);

    if let Err(e) = &result {
        println!("Error: {:?}", e);
    }

    assert!(result.is_ok());
    let (success, _, is_done) = result.unwrap();
    assert!(success);
    assert!(is_done);
}


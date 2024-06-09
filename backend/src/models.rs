use diesel::prelude::*;
use rocket::serde::{Deserialize, Serialize};

#[derive(Queryable, Selectable, Serialize, Deserialize, AsChangeset)]
#[diesel(table_name = crate::schema::Users)]
#[serde(crate = "rocket::serde")]
pub struct Users {
    pub id: i32,
    pub first_name: String,
    pub last_name: String,
    pub email: String,
    pub kenteken: String,
    pub admin: i32,
}

#[derive(Queryable, Selectable, Serialize, Deserialize, PartialEq)]
#[diesel(table_name = crate::schema::RouteRequests)]
#[serde(crate = "rocket::serde")]
pub struct RouteRequests {
    pub id: i32,
    pub percentage: f32,
    pub distance: i32,
    pub eta: i32, // minuten
    pub timestamp: i32,
    pub is_done: bool,
    pub user_id: i32,
}

#[derive(Queryable, Insertable, Serialize, Deserialize)]
#[diesel(table_name = crate::schema::Queue)]
pub struct Queue {
    pub id: i32,
    pub place: i32,
    pub user_id: i32,
    pub route_request_id: i32,
}

#[derive(Serialize, Deserialize, Clone)]
pub struct Car {
    pub kenteken: String,
    pub brand: String,
    pub make: String,
    pub max_watt: f32,
}

#[derive(Queryable, Selectable, Serialize, Deserialize, AsChangeset, Identifiable, Clone, Insertable)]
#[diesel(table_name = crate::schema::ChargingStations)]
#[serde(crate = "rocket::serde")]
pub struct ChargingStations {
    pub id: String,
    pub status: String,
    pub max_power: f32,
    pub route_request_id: i32,
}

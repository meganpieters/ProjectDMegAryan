#[macro_use]
extern crate rocket;
extern crate diesel;
extern crate dotenvy;

use dotenvy::dotenv;

mod db;
mod schema;
mod models;
mod routes;
mod handlers;

#[launch]
fn rocket() -> _ {
    dotenv().ok();

    rocket::build().mount("/api", routes::all_routes())
}

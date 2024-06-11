#[macro_use]
extern crate rocket;
extern crate diesel;
extern crate dotenvy;

use rocket::http::Method;
use rocket_cors::{AllowedOrigins, CorsOptions};
use dotenvy::dotenv;

mod db;
mod schema;
mod models;
mod routes;
mod handlers;

#[launch]
fn rocket() -> _ {
    dotenv().ok();

    let cors = CorsOptions::default()
        .allowed_origins(AllowedOrigins::all())
        .allowed_methods(
            vec![Method::Get, Method::Post, Method::Patch, Method::Delete, Method::Put]
                .into_iter()
                .map(From::from)
                .collect(),
        )
        .allow_credentials(true);

    rocket::build().attach(cors.to_cors().unwrap()).mount("/api", routes::all_routes())
}

#[cfg(test)]
mod tests {
    mod user_handler_tests;
    mod charger_handler_tests;
}


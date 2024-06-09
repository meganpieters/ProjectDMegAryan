use diesel::prelude::*;
use diesel::sqlite::SqliteConnection;
use dotenvy::dotenv;
use std::env;

pub fn establish_connection() -> SqliteConnection {
    dotenv().ok();

    let database_url: String = env::var("DATABASE_URL")
                             .expect("DATABASE_URL moet in .env zitten");

    SqliteConnection::establish(&database_url)
                     .expect(&format!("Error met verbinden, {}", database_url))
}

pub fn establish_test_connection() -> SqliteConnection {
    SqliteConnection::establish(":memory:").unwrap()
}
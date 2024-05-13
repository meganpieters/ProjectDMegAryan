mod user_routes;
mod request_routes;

use rocket::Route;
use rocket::serde::{Deserialize, Serialize};

pub use user_routes::routes as user_routes;
pub use request_routes::routes as request_routes;

#[derive(Deserialize, Serialize)]
#[serde(crate = "rocket::serde")]
pub struct PostStatus {
    pub ok: bool,
    pub message: String,
    pub last_id: i32,
}

#[derive(Deserialize, Serialize)]
#[serde(crate = "rocket::serde")]
pub struct GetStatus<T> {
    pub ok: bool,
    pub message: String,
    pub data: T,
}

pub type PostReturn = Result<(bool, String, i32), diesel::result::Error>;
pub type GetReturn<T> = Result<(bool, String, T), diesel::result::Error>;
pub type UpdateReturn<T> = Result<(bool, String, T), diesel::result::Error>;
pub type DeleteReturn<T> = Result<(bool, String, T), diesel::result::Error>;

pub fn all_routes() -> Vec<Route> {
    let mut routes = Vec::new();
    routes.extend(user_routes());
    routes.extend(request_routes());
    routes
}

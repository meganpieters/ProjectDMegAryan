mod user_routes;
mod request_routes;
mod car_routes;
mod charger_routes;
mod slack_routes;

use rocket::Route;
use rocket::serde::{Deserialize, Serialize};

pub use user_routes::routes as user_routes;
pub use request_routes::routes as request_routes;
pub use car_routes::routes as car_routes;
pub use charger_routes::routes as charger_routes;
pub use slack_routes::slack_routes;

#[derive(Deserialize, Serialize)]
#[serde(crate = "rocket::serde")]
/// Een struct voor het serializeren van de JSON data die je terug geeft via een HTTP POST request
pub struct PostStatus {
    /// of het resultaat uit de database klopt om terug te geven
    pub ok: bool,
    /// als er een bericht is om duidelijkheid te geven over het resultaat
    pub message: String,
    /// welk id er is toegevoegd met de POST request
    pub last_id: i32,
}

#[derive(Deserialize, Serialize)]
#[serde(crate = "rocket::serde")]
/// Voor het serializeren van een GET request in JSON.
pub struct GetStatus<T> {
    /// Of je data die je terug krijgt ok is.
    pub ok: bool,
    /// Voor als er een bericht over de request bij moet
    pub message: String,
    /// De data die je terug van de database wilt hebben
    pub data: T,
}

#[derive(Deserialize, Serialize)]
#[serde(crate = "rocket::serde")]
/// Voor het serializeren van een PUT request in JSON.
pub struct UpdateStatus<T> {
    /// Of het updaten van de data goed is gegaan
    pub ok: bool,
    /// Voor een bericht die je mee wilt geven met de request
    pub message: String,
    /// de id die geupdatet is
    pub last_id: String,
    /// De data die veranderd is in de database
    pub data: T,

}

/// Type alias voor het resultaat uit de database, wat of goed is, of een diesel error
pub type PostReturn = Result<(bool, String, i32), diesel::result::Error>;
/// GET Type alias voor het resultaat uit de database, wat of goed is, of een diesel error
pub type GetReturn<T> = Result<(bool, String, T), diesel::result::Error>;
/// UPDATE Type alias voor het resultaat uit de database, wat of goed is, of een diesel error
pub type UpdateReturn<T> = Result<(bool, String, T), diesel::result::Error>;
/// DELETE Type alias voor het resultaat uit de database, wat of goed is, of een diesel error
pub type DeleteReturn<T> = Result<(bool, String, T), diesel::result::Error>;

/// Alle routes bij elkaar, als je nieuwe routes wilt toevoegen in deze folder kan je deze hier
/// toevoegen zodat die bij elkaar gedaan worden.
/// ## Boven in dit bestand voeg je je nieuwe file toe
/// ```
/// mod <route_bestand>.rs
/// pub use <route_bestand>::routes as route_bestand;
/// ```
/// ## Toevoegen van een route
/// ```
/// routes.extend(route_bestand);
/// ```
pub fn all_routes() -> Vec<Route> {
    let mut routes = Vec::new();
    routes.extend(user_routes());
    routes.extend(request_routes());
    routes.extend(car_routes());
    routes.extend(charger_routes());
    routes.extend(slack_routes()); 
    routes
}

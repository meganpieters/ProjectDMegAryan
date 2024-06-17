pub mod routing_handler;
pub mod user_handler;
pub mod car_handler;
pub mod charger_handler;

use diesel::sqlite::SqliteConnection;
use crate::{db, routes::{DeleteReturn, GetReturn, PostReturn, UpdateReturn}};

/// Het gebruiken van een handler die een POST request doet naar de database via een insert
/// de handler stuurt dan data terug die naar JSON omgezet kan worden zodat het in de API gebruikt
/// kan worden.
/// # Voorbeeld
/// ```
/// let res: PostReturn = handle_post::<Json<NewUser>>(&user_handler::create_user, new_user);
/// ```
/// Dit resultaat kan je gebruiken om JSON data terug te geven via match.
/// Waar als je match op de Some doet krijg je je resultaat anders een error.
pub fn handle_post<T>(handler: &dyn Fn(&mut SqliteConnection, T) -> PostReturn, data: T) -> PostReturn {
    let conn: &mut SqliteConnection = &mut db::establish_connection();
    handler(conn, data)
}

/// Als je een GET request wilt laten afhandelen gebruik je deze functie die een handler aanroept,
/// maar geen data meegeeft.
/// # Voorbeeld
/// ```
/// let res: GetReturn<Vec<RouteRequests>> = handle_get(&routing_handler::get_routes);
/// ```
/// Net als POST kan dit resultaat gebruikt worden om op te matchen om de goede JSON data terug te
/// geven.
pub fn handle_get<T>(handler: &dyn Fn(&mut SqliteConnection) -> GetReturn<T>) -> GetReturn<T> {
    let conn: &mut SqliteConnection = &mut db::establish_connection();
    handler(conn)
}

/// Dit is voor als je iets specifiek wilt ophalen uit de database, waar als je een ID nodig hebt
/// om bijvoorbeeld een gebruiker terug te krijgen. Ook deze kan omgezet worden naar JSON.
/// # Voorbeeld
/// ```
/// let res: GetReturn<Users> = handle_get_id::<Users>(&user_handler::get_user, id);
/// let get_status = match res {
/// Ok((true, message, data)) => GetStatus { ok: true, message, data },
///     Ok((false, message, _)) => GetStatus { ok: false, message, data: Users {
///         id: 0,
///         first_name: "".to_string(),
///         last_name: "".to_string(),
///         email: "".to_string(),
///         kenteken: "".to_string(),
///         password: "".to_string(),
///         admin: 0
///     }},
///     Err(err) => GetStatus { ok: false, message: format!("Error: {}", err), data: Users {
///         id: 0,
///         first_name: "".to_string(),
///         last_name: "".to_string(),
///         email: "".to_string(),
///         kenteken: "".to_string(),
///         password: "".to_string(),
///         admin: 0
///     }}
/// };
/// ```
pub fn handle_get_id<T>(handler: &dyn Fn(&mut SqliteConnection, i32) -> GetReturn<T>, id: i32) -> GetReturn<T> {
    let conn: &mut SqliteConnection = &mut db::establish_connection();
    handler(conn, id)
}

/// Handle de select methods in de database maar dan als je een generic type nodig hebt, want niet
/// alles is altijd een i32 als ID.
/// # Voorbeeld
/// ```
/// let res: GetReturn<ChargingStations> = handle_get_gen_id::<ChargingStations, String>(&charger_handler::delete_charger, id);
/// ```
/// De eerste type is voor wat je terug krijgt, de tweede is voor wat het type van het ID is.
pub fn handle_get_gen_id<T, V>(handler: &dyn Fn(&mut SqliteConnection, V) -> GetReturn<T>, id: V) -> GetReturn<T> {
    let conn: &mut SqliteConnection = &mut db::establish_connection();
    handler(conn, id)
}

/// Handle de updates in de database, deze geeft altijd data terug maar je moet ook data meegeven
/// wat geupdatet word. Het eerste generic type argument is wat je terug krijgt, de tweede wat je
/// meegeeft.
/// # Voorbeeld
/// ```
/// let res: UpdateReturn<String> = handle_update::<String, Json<ChargingStations>>(&charger_handler::update_charger, id.clone(), update_data);
/// ```
pub fn handle_update<T,V>(handler: &dyn Fn(&mut SqliteConnection, T, V) -> UpdateReturn<T>, id: T, data: V) -> UpdateReturn<T> {
    let conn: &mut SqliteConnection = &mut db::establish_connection();
    handler(conn, id, data)
}

/// Voor het afhandelen van een delete verzoek in de database, hier heb je alleen een ID nodig en
/// wat je terug wilt krijgen.
/// # Voorbeeld
/// ```
/// let res: PostReturn = handle_delete::<i32>(&user_handler::delete_user, id);
/// ```
pub fn handle_delete<T>(handler: &dyn Fn(&mut SqliteConnection, i32) -> DeleteReturn<T>, id: i32) -> DeleteReturn<T> {
    let conn: &mut SqliteConnection = &mut db::establish_connection();
    handler(conn, id)
}

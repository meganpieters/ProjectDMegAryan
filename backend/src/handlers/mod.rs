pub mod routing_handler;
pub mod user_handler;
pub mod car_handler;
pub mod charger_handler;

use diesel::sqlite::SqliteConnection;
use crate::{db, routes::{DeleteReturn, GetReturn, PostReturn, UpdateReturn}};

/// Het ophalen van data uit een handler om dat terug te geven met JSON
/// ```
/// let res: GetReturn<Vec<Users>> = handle_get(&user_handler::get_all_users);
/// ```
/// Dit resultaat kan je gebruiken om JSON data terug te geven via match.
pub fn handle_post<T>(handler: &dyn Fn(&mut SqliteConnection, T) -> PostReturn, data: T) -> PostReturn {
    let conn: &mut SqliteConnection = &mut db::establish_connection();
    handler(conn, data)
}

pub fn handle_get<T>(handler: &dyn Fn(&mut SqliteConnection) -> GetReturn<T>) -> GetReturn<T> {
    let conn: &mut SqliteConnection = &mut db::establish_connection();
    handler(conn)
}

pub fn handle_get_id<T>(handler: &dyn Fn(&mut SqliteConnection, i32) -> GetReturn<T>, id: i32) -> GetReturn<T> {
    let conn: &mut SqliteConnection = &mut db::establish_connection();
    handler(conn, id)
}

pub fn handle_get_gen_id<T, V>(handler: &dyn Fn(&mut SqliteConnection, V) -> GetReturn<T>, id: V) -> GetReturn<T> {
    let conn: &mut SqliteConnection = &mut db::establish_connection();
    handler(conn, id)
}

pub fn handle_update<T,V>(handler: &dyn Fn(&mut SqliteConnection, T, V) -> UpdateReturn<T>, id: T, data: V) -> UpdateReturn<T> {
    let conn: &mut SqliteConnection = &mut db::establish_connection();
    handler(conn, id, data)
}

pub fn handle_delete<T>(handler: &dyn Fn(&mut SqliteConnection, i32) -> DeleteReturn<T>, id: i32) -> DeleteReturn<T> {
    let conn: &mut SqliteConnection = &mut db::establish_connection();
    handler(conn, id)
}

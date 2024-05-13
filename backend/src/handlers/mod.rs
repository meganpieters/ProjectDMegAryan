pub mod routing_handler;
pub mod user_handler;

use diesel::sqlite::SqliteConnection;
use crate::{db, routes::{DeleteReturn, GetReturn, PostReturn, UpdateReturn}};

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

pub fn handle_update<T,V>(handler: &dyn Fn(&mut SqliteConnection, i32, V) -> UpdateReturn<T>, id: i32, data: V) -> UpdateReturn<T> {
    let conn: &mut SqliteConnection = &mut db::establish_connection();
    handler(conn, id, data)
}

pub fn handle_delete<T>(handler: &dyn Fn(&mut SqliteConnection, i32) -> DeleteReturn<T>, id: i32) -> DeleteReturn<T> {
    let conn: &mut SqliteConnection = &mut db::establish_connection();
    handler(conn, id)
}

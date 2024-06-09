use diesel::prelude::*;
use diesel::sqlite::SqliteConnection;
use rocket::serde::json::Json;
use crate::handlers::user_handler::*;
use crate::models::Users as UserModel;
use crate::schema::Users::dsl::*;
use crate::db::establish_test_connection;
use diesel::connection::SimpleConnection;

// voor elke test moet de db opgezet worden
fn setup_test_db() -> SqliteConnection {
    let mut conn = establish_test_connection();
    // deze query kan je terug vinden in de migrations
    conn.batch_execute("
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            email TEXT NOT NULL,
            kenteken TEXT NOT NULL,
            admin INTEGER NOT NULL
        );
    ").unwrap();
    conn
}

#[test]
fn test_create_user() {
    let conn = &mut setup_test_db();
    let new_user = NewUser {
        first_name: "John".to_string(),
        last_name: "Doe".to_string(),
        email: "john.doe@example.com".to_string(),
        kenteken: "123-XYZ".to_string(),
        admin: 1,
    };
    let json_user = Json(new_user);

    let result = create_user(conn, json_user);

    assert!(result.is_ok());
    // we hoeven niet te testen op de message
    let (success, _, user_id) = result.unwrap();
    assert!(success);
    assert!(user_id > 0);
}

#[test]
fn test_get_all_users() {
    let conn = &mut setup_test_db();
    let new_user = NewUser {
        first_name: "Jane".to_string(),
        last_name: "Smith".to_string(),
        email: "jane.smith@example.com".to_string(),
        kenteken: "456-ABC".to_string(),
        admin: 0,
    };
    diesel::insert_into(Users)
        .values(&new_user)
        .execute(conn)
        .unwrap();

    let result = get_all_users(conn);

    assert!(result.is_ok());
    let (success, _, users) = result.unwrap();
    assert!(success);
    assert_eq!(users.len(), 1);
}

#[test]
fn test_get_user() {
    let conn = &mut setup_test_db();
    let new_user = NewUser {
        first_name: "Alice".to_string(),
        last_name: "Wonder".to_string(),
        email: "alice.wonder@example.com".to_string(),
        kenteken: "789-JKL".to_string(),
        admin: 0,
    };
    diesel::insert_into(Users)
        .values(&new_user)
        .execute(conn)
        .unwrap();

    let user_id = Users
        .select(id)
        .first::<i32>(conn)
        .unwrap();

    let result = get_user(conn, user_id);

    assert!(result.is_ok());
    let (success, _, user) = result.unwrap();
    assert!(success);
    assert_eq!(user.id, user_id);
}
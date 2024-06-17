use diesel::SqliteConnection;
use diesel::prelude::*;
use crate::models::Users;
use crate::routes::{GetReturn, PostReturn, UpdateReturn, DeleteReturn};
use rocket::serde::json::Json;
use rocket::serde::{Deserialize, Serialize};

#[derive(Queryable, Insertable, Serialize, Deserialize)]
#[diesel(table_name = crate::schema::Users)]
#[serde(crate = "rocket::serde")]
pub struct NewUser {
    pub first_name: String,
    pub last_name: String,
    pub email: String,
    pub kenteken: String,
    pub admin: i32,
    pub password: String,
}

pub fn create_user(conn: &mut SqliteConnection, data: Json<NewUser>) -> PostReturn {
    use sha256::digest;
    use crate::schema::Users;
    use crate::models::Users as UsersModel;
    use crate::schema::Users::dsl::*;
    
    // maak een mutable kopie van de user om de password te hashen
    let mut new_user = data.into_inner();
    new_user.password = digest(new_user.password);

    diesel::insert_into(Users::table).values(&new_user).execute(conn)?;
    match Users.order(id.desc()).first::<UsersModel>(conn) {
        Ok(last_user) => {
            Ok((true, "User created successfully".to_string(), last_user.id))
        }
        Err(err) => {
            Err(err.into())
        }
    }
}

pub fn get_all_users(conn: &mut SqliteConnection) -> GetReturn<Vec<Users>> {
    use crate::models::Users as UsersModel;
    use crate::schema::Users::dsl::*;

    let all_users = Users.load::<UsersModel>(conn)?;
    Ok((true, "Users successfully found".to_string(), all_users))
}

pub fn get_user(conn: &mut SqliteConnection, id_to_find: i32) -> GetReturn<Users> {
    use crate::schema::Users::dsl::*;

    if let Some(found_user) = Users.filter(id.eq(id_to_find)).first(conn).optional()? {
        Ok((true, "User found successfully".to_string(), found_user))
    } else {
        Err(diesel::result::Error::NotFound)
    }
}

pub fn get_user_by_email(conn: &mut SqliteConnection, email_to_find: String) -> GetReturn<Users> {
    use crate::schema::Users::dsl::*;

    if let Some(found_user) = Users.filter(email.eq(email_to_find)).first(conn).optional()? {
        Ok((true, "User found successfully".to_string(), found_user))
    } else {
        Err(diesel::result::Error::NotFound)
    }
}

pub fn update_user(conn: &mut SqliteConnection, id_to_update: i32, data: Json<Users>) -> UpdateReturn<i32> {
    use crate::schema::Users::dsl::*;

    match diesel::update(Users.filter(id.eq(id_to_update))).set(data.into_inner()).execute(conn) {
        Ok(updated_user) => {
            Ok((true, "User updated successfully".to_string(), updated_user.try_into().unwrap()))
        }
        Err(_err) => {
            Err(diesel::result::Error::NotFound)
        }
    }
}

pub fn delete_user(conn: &mut SqliteConnection, id_to_delete: i32) -> DeleteReturn<i32> {
    use crate::schema::Users::dsl::*;

    match diesel::delete(Users.filter(id.eq(id_to_delete))).execute(conn) {
        Ok(user_deleted) => {
            Ok((true, "User deleted successfully".to_string(), user_deleted.try_into().unwrap()))
        }
        Err(_err) => {
            Err(diesel::result::Error::NotFound)
        }
    }
}


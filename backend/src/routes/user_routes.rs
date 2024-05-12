use diesel::dsl::Update;
use rocket::Route;
use rocket::serde::json::Json;
use crate::models::Users;
use crate::routes::{PostStatus, PostReturn, GetStatus};
use crate::handlers::{handle_get, handle_get_id, handle_post, handle_update, handle_delete};
use crate::handlers::user_handler::{self, NewUser};
use super::{GetReturn, UpdateReturn};

#[post("/users", format = "application/json", data = "<new_user>")]
fn create_user(new_user: Json<NewUser>) -> Json<PostStatus> {
    let res: PostReturn = handle_post::<Json<NewUser>>(&user_handler::create_user, new_user);
    let post_status = match res {
        Ok((true, message, last_id)) => PostStatus { ok: true, message, last_id },
        Ok((false, message, _)) => PostStatus { ok: false, message, last_id: 0 },
        Err(err) => PostStatus { ok: false, message: format!("Error: {}", err), last_id: 0 }
    };
    Json(post_status)
}

#[get("/users")]
fn get_all_users() -> Json<GetStatus<Vec<Users>>> {
    let res: GetReturn<Vec<Users>> = handle_get(&user_handler::get_all_users);
    let get_status = match res {
        Ok((true, message, data)) => GetStatus { ok: true, message, data },
        Ok((false, message, _)) => GetStatus { ok: false, message, data: Vec::new() },
        Err(err) => GetStatus { ok: false, message: format!("Error: {}", err), data: Vec::new() }
    };
    Json(get_status)
}

#[get("/users/<id>")]
fn get_user(id: i32) -> Json<GetStatus<Users>> {
    let res: GetReturn<Users> = handle_get_id::<Users>(&user_handler::get_user, id);
    let get_status = match res {
        Ok((true, message, data)) => GetStatus { ok: true, message, data },
        Ok((false, message, _)) => GetStatus { ok: false, message, data: Users {
            id: 0,
            first_name: "".to_string(),
            last_name: "".to_string(),
            email: "".to_string(),
            kenteken: "".to_string(),
            admin: 0
        }},
        Err(err) => GetStatus { ok: false, message: format!("Error: {}", err), data: Users {
            id: 0,
            first_name: "".to_string(),
            last_name: "".to_string(),
            email: "".to_string(),
            kenteken: "".to_string(),
            admin: 0
        }}
    };
    Json(get_status)
}

#[put("/users/<id>", format = "application/json", data = "<update_data>")]
fn update_user(id: i32, update_data: Json<Users>) -> Json<PostStatus> {
    let res: UpdateReturn<i32> = handle_update::<i32,Json<Users>>(&user_handler::update_user, id, update_data);
    let post_status = match res {
        Ok((true, message, _)) => PostStatus { ok: true, message, last_id: id },
        Ok((false, message, _)) => PostStatus { ok: false, message, last_id: 0 },
        Err(err) => PostStatus { ok: false, message: format!("Error: {}", err), last_id: 0 }
    };
    Json(post_status)
}

#[delete("/users/<id>")]
fn delete_user(id: i32) -> Json<PostStatus> {
    let res: PostReturn = handle_delete::<i32>(&user_handler::delete_user, id);
    let post_status = match res {
        Ok((true, message, _)) => PostStatus { ok: true, message, last_id: id },
        Ok((false, message, _)) => PostStatus { ok: false, message, last_id: 0 },
        Err(err) => PostStatus { ok: false, message: format!("Error: {}", err), last_id: 0 }
    };
    Json(post_status)
}

pub fn routes() -> Vec<Route> {
    routes![
        create_user,
        get_all_users,
        get_user,
        update_user,
        delete_user,
    ]
}

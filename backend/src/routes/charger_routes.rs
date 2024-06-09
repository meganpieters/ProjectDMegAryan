use rocket::Route;
use rocket::serde::json::Json;
use crate::models::ChargingStations;
use crate::routes::{PostStatus, PostReturn, GetStatus, UpdateStatus};
use crate::handlers::{handle_get, handle_get_gen_id, handle_get_id, handle_post, handle_update};

use super::{GetReturn, UpdateReturn};
use crate::handlers::charger_handler;



// modify charger by id and give a body with it
#[put("/chargers/<id>", format = "application/json", data = "<update_data>")]
fn update_charger(id: String, update_data: Json<ChargingStations>) -> Json<UpdateStatus<String>> {
    let res: UpdateReturn<String> = handle_update::<String, Json<ChargingStations>>(&charger_handler::update_charger, id.clone(), update_data);
    let post_status = match res {
        Ok((true, message, _)) => UpdateStatus { ok: true, message, last_id: id, data: "".to_string() },
        Ok((false, message, _)) => UpdateStatus { ok: false, message, last_id: "".to_string(), data: "".to_string() },
        Err(err) => UpdateStatus { ok: false, message: format!("Error: {}", err), last_id: "".to_string(), data: "".to_string() }
    };
    Json(post_status)
}

#[delete("/chargers/<id>")]
pub fn delete_charger(id: String) -> Json<GetStatus<ChargingStations>> {
    let res: GetReturn<ChargingStations> = handle_get_gen_id::<ChargingStations, String>(&charger_handler::delete_charger, id);
    let get_status = match res {
        Ok((true, message, _)) => GetStatus { ok: true, message, data: ChargingStations {
            id: "".to_string(),
            status: "".to_string(),
            max_power: 0.0,
            route_request_id: 0,
        }},
        Ok((false, message, _)) => GetStatus { ok: false, message, data: ChargingStations {
            id: "".to_string(),
            status: "".to_string(),
            max_power: 0.0,
            route_request_id: 0,
        }},
        Err(err) => GetStatus { ok: false, message: format!("Error: {}", err), data: ChargingStations {
            id: "".to_string(),
            status: "".to_string(),
            max_power: 0.0,
            route_request_id: 0,
        }}
    };
    Json(get_status)
}
   



#[post("/chargers", data = "<charger>")]
pub fn add_charger(charger: Json<ChargingStations>) -> Json<PostStatus> {
    let charger_clone = charger.into_inner().clone();
    let res: PostReturn = handle_post(&charger_handler::add_charger, &charger_clone);
    let post_status = match res {
        Ok((true, message, last_id)) => PostStatus { ok: true, message, last_id },
        Ok((false, message, last_id)) => PostStatus { ok: false, message, last_id },
        Err(err) => PostStatus { ok: false, message: format!("Error: {}", err), last_id: 0 }
    };
    Json(post_status)
}


#[get("/chargers")]
pub fn all_chargers() -> Json<GetStatus<Vec<ChargingStations>>> {
    let res: GetReturn<Vec<ChargingStations>> = handle_get(&charger_handler::get_all_charging_stations);
    let get_status = match res {
        Ok((true, message, data)) => GetStatus { ok: true, message, data },
        Ok((false, message, _)) => GetStatus { ok: false, message, data: Vec::new() },
        Err(err) => GetStatus { ok: false, message: format!("Error: {}", err), data: Vec::new() }
    };
    Json(get_status)
}

#[get("/chargers/<id>")]
pub fn specific_charger(id: String) -> Json<GetStatus<ChargingStations>> {
    let res: GetReturn<ChargingStations> = handle_get_gen_id::<ChargingStations, String>(&charger_handler::get_charger, id);
    let get_status = match res {
        Ok((true, message, data)) => GetStatus { ok: true, message, data },
        Ok((false, message, _)) => GetStatus { ok: false, message, data: ChargingStations {
            id: "".to_string(),
            status: "".to_string(),
            max_power: 0.0,
            route_request_id: 0,
        }},
        Err(err) => GetStatus { ok: false, message: format!("Error: {}", err), data: ChargingStations {
            id: "".to_string(),
            status: "".to_string(),
            max_power: 0.0,
            route_request_id: 0,
        }}
    };
    Json(get_status)
}

#[get("/chargers/<id>/stop")]
pub fn stop_charging_request(id: i32) -> Json<GetStatus<bool>> {
    // id hier is die van de aanvraging niet die van de charger
    let res: GetReturn<bool> = handle_get_id::<bool>(&charger_handler::stop_charging, id);
    let get_status = match res {
        Ok((true, message, data)) => GetStatus { ok: true, message, data },
        Ok((false, message, _)) => GetStatus { ok: false, message, data: false },
        Err(err) => GetStatus { ok: false, message: format!("Error: {}", err), data: false }
    };
    Json(get_status)
}

pub fn routes() -> Vec<Route> {
    routes![
        all_chargers,
        specific_charger,
        add_charger,
        delete_charger,
        update_charger,
        stop_charging_request,
    ]
}

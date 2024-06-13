use rocket::Route;
use rocket::serde::json::Json;
use crate::models::{RouteRequests, Queue};
use crate::routes::{PostStatus, PostReturn, GetStatus};
use crate::handlers::{handle_get, handle_get_id, handle_post};
use crate::handlers::routing_handler::{self, NewRouteRequest};
use super::GetReturn;

#[post("/queue", format = "application/json", data = "<request>")]
/// Voor het toevoegen van een aanvraag voor een laadpaal
fn post_route(request: Json<NewRouteRequest>) -> Json<PostStatus> {
    let res: PostReturn = handle_post::<Json<NewRouteRequest>>(&routing_handler::upload_route, request);
    let post_status = match res {
        Ok((true, message, last_id)) => PostStatus { ok: true, message, last_id },
        Ok((false, message, _)) => PostStatus { ok: false, message, last_id: 0},
        Err(err) => PostStatus { ok: false, message: format!("Error: {}", err), last_id: 0}
    };
    Json(post_status)
}

#[get("/queue/routes")]
/// haal alle aanvragen op naar JSON format
fn get_all_requests() -> Json<GetStatus<Vec<RouteRequests>>> {
    let res: GetReturn<Vec<RouteRequests>> = handle_get(&routing_handler::get_routes);
    let get_status = match res {
        Ok((true, message, data)) => GetStatus { ok: true, message, data },
        Ok((false, message, _)) => GetStatus { ok: false, message, data: Vec::new() },
        Err(err) => GetStatus { ok: false, message: format!("Error: {}", err), data: Vec::new()}
    };
    Json(get_status)
}

#[get("/queue/routes/<id>")]
/// Zoek een specifieke aanvraag op
fn get_request(id: i32) -> Json<GetStatus<RouteRequests>> {
    let res: GetReturn<RouteRequests> = handle_get_id::<RouteRequests>(&routing_handler::get_route, id);
    let get_result = match res {
        Ok((true, message, data)) => GetStatus { ok: true, message, data },
        Ok((false, message, _)) => GetStatus { ok: false, message, data: RouteRequests {
            id: 0,
            percentage: 0.0,
            eta: 0,
            distance: 0,
            timestamp: 0,
            is_done: false,
            user_id: 0
        }},
        Err(err) => GetStatus { ok: false, message: format!("Error: {}", err), data: RouteRequests {
            id: 0,
            percentage: 0.0,
            eta: 0,
            distance: 0,
            timestamp: 0,
            is_done: false,
            user_id: 0
        }}
    };
    Json(get_result)
}

#[get("/queue/routes/users/<user_id>/latest")]
/// Haal de laatste aangevraagde laadpaal op van de gebruiker die niet aan een lader zit
fn get_latest_request(user_id: i32) -> Json<GetStatus<RouteRequests>> {
    let res: GetReturn<RouteRequests> = handle_get_id::<RouteRequests>(&routing_handler::get_latest_route_request, user_id);
    let get_result = match res {
        Ok((true, message, data)) => GetStatus { ok: true, message, data },
        Ok((false, message, _)) => GetStatus { ok: false, message, data: RouteRequests {
            id: 0,
            percentage: 0.0,
            eta: 0,
            distance: 0,
            timestamp: 0,
            is_done: false,
            user_id: 0
        }},
        Err(err) => GetStatus { ok: false, message: format!("Error: {}", err), data: RouteRequests {
            id: 0,
            percentage: 0.0,
            eta: 0,
            distance: 0,
            timestamp: 0,
            is_done: false,
            user_id: 0
        }}
    };
    Json(get_result)
}

#[get("/queue/routes/users/<user_id>/latest/charged")]
/// Haal de laatste laadpaal aanvraag aan die _wel_ aan een lader zit
fn get_latest_charged_request(user_id: i32) -> Json<GetStatus<(RouteRequests, bool)>> {
    let res: GetReturn<(RouteRequests, bool)> = handle_get_id::<(RouteRequests, bool)>(&routing_handler::get_latest_route_charged_request, user_id);
    let get_result = match res {
        Ok((true, message, data)) => GetStatus { ok: true, message, data },
        Ok((false, message, _)) => GetStatus { ok: false, message, data: (RouteRequests {
            id: 0,
            percentage: 0.0,
            eta: 0,
            distance: 0,
            timestamp: 0,
            is_done: false,
            user_id: 0
        }, false)},
        Err(err) => GetStatus { ok: false, message: format!("Error: {}", err), data: (RouteRequests {
            id: 0,
            percentage: 0.0,
            eta: 0,
            distance: 0,
            timestamp: 0,
            is_done: false,
            user_id: 0
        }, false)}
    };
    Json(get_result)
}

#[get("/queue")]
/// Process de priority queue en haal die op uit de handlers, stuur die terug naar JSON
fn get_whole_queue() -> Json<GetStatus<Vec<Queue>>> {
    let res: GetReturn<Vec<Queue>> = handle_get::<Vec<Queue>>(&routing_handler::create_queue);
    let get_status = match res {
        Ok((true, message, data)) => GetStatus { ok: true, message, data },
        Ok((false, message, _)) => GetStatus { ok: false, message, data: Vec::new() },
        Err(err) => GetStatus { ok: false, message: format!("Error: {}", err), data: Vec::new()}
    };
    Json(get_status)
}

#[get("/queue/<place>")]
/// Zoek een aanvraag op de plek in de queue
fn get_route_on_place(place: i32) -> Json<GetStatus<RouteRequests>> {
    let res: GetReturn<RouteRequests> = handle_get_id::<RouteRequests>(&routing_handler::get_item_on_place, place);
    let get_result = match res {
        Ok((true, message, data)) => GetStatus { ok: true, message, data },
        Ok((false, message, _)) => GetStatus { ok: false, message, data: RouteRequests {
            id: 0,
            percentage: 0.0,
            eta: 0,
            distance: 0,
            timestamp: 0,
            is_done: false,
            user_id: 0
        }},
        Err(err) => GetStatus { ok: false, message: format!("Error: {}", err), data: RouteRequests {
            id: 0,
            percentage: 0.0,
            eta: 0,
            distance: 0,
            timestamp: 0,
            is_done: false,
            user_id: 0
        }}
    };
    Json(get_result)
}

#[get("/queue/routes/place/<id>")]
/// Zoek een aanvraag op de plek in de queue
fn get_route_placement(id: i32) -> Json<GetStatus<Queue>> {
    let res: GetReturn<Queue> = handle_get_id::<Queue>(&routing_handler::get_request_placement, id);
    let get_result = match res {
        Ok((true, message, data)) => GetStatus { ok: true, message, data },
        Ok((false, message, _)) => GetStatus { ok: false, message, data: Queue {
            id: 0,
            place: 0,
            user_id: 0,
            route_request_id: 0,
        }},
        Err(err) => GetStatus { ok: false, message: format!("Error: {}", err), data: Queue {
            id: 0,
            place: 0,
            user_id: 0,
            route_request_id: 0,
        }}
    };
    Json(get_result)
}

/// Uit `mod.rs`, waar alle routes verzameld worden om in `mod.rs` bij elkaar geplakt te worden
pub fn routes() -> Vec<Route> {
    routes![
        post_route,
        get_all_requests,
        get_request,
        get_latest_request,
        get_latest_charged_request,
        get_whole_queue,
        get_route_on_place,
        get_route_placement,
    ]
}

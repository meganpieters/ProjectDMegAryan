use rocket::Route;
use rocket::serde::json::Json;
use crate::handlers::car_handler::{calculate_charge_percentage, get_user_car_data};
use crate::handlers::routing_handler::get_latest_route_request;
use crate::handlers::user_handler::get_user;
use crate::models::{Car, RouteRequests, Users};
use crate::routes::GetStatus;
use crate::handlers::handle_get_id;
use super::GetReturn;



#[get("/users/car/<id>")]
async fn get_user_car(id: i32) -> Json<GetStatus<Car>> {
    let user: GetReturn<Users> = handle_get_id::<Users>(&get_user, id);
    let car_data = get_user_car_data(&user.unwrap().2).await;
    let get_result = match car_data {
        Ok(car) => {
            GetStatus {
                ok: true,
                message: "Car data succesvol opgehaald.".to_string(),
                data: car,
            }
        },
        Err(err) => {
            GetStatus {
                ok: false,
                message: format!("Error: {}", err),
                data: Car {
                    kenteken: "".to_string(),
                    brand: "".to_string(),
                    make: "".to_string(),
                    max_watt: 0.0,
                }
            }
        }
    };
    Json(get_result)
}

#[get("/users/car/percentage/<id>")]
async fn get_user_car_percentage(id: i32) -> Json<GetStatus<f32>> {
    let user: GetReturn<Users> = handle_get_id::<Users>(&get_user, id);
    let car_data = get_user_car_data(&user.unwrap().2).await;
    let latest_route: GetReturn<RouteRequests> = handle_get_id::<RouteRequests>(&get_latest_route_request, id);
    match car_data {
        Ok(car) => {
            let calculate_result = calculate_charge_percentage(&car, &latest_route.unwrap().2);
            Json(GetStatus {
                ok: true, message: format!("Berekent hoeveel procent de auto is."), data: calculate_result, 
            })
        },
        Err(err) => {
            Json(GetStatus {
                ok: false, message: format!("Geen auto kunnen vinden van deze gebruiker: {}", err), data: 0.0,
            })
        }
    }
}

pub fn routes() -> Vec<Route> {
    routes![
        get_user_car,
        get_user_car_percentage,
    ]
}

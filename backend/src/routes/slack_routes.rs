// routes.rs

use rocket::serde::json::Json;
use rocket::response::status;
use serde::Deserialize;
use crate::handlers::slack_handler::send_slack_message;

#[derive(Deserialize)]
struct SlackMessage {
    message: String,
}

#[post("/send_slack_message", data = "<slack_message>")]
async fn send_slack_message_route(slack_message: Json<SlackMessage>) -> status::Custom<&'static str> {
    match send_slack_message(&slack_message.message).await {
        Ok(_) => status::Custom(rocket::http::Status::Ok, "Message sent successfully"),
        Err(_) => status::Custom(rocket::http::Status::InternalServerError, "Failed to send message"),
    }
}

pub fn slack_routes() -> Vec<rocket::Route> {
    routes![
        send_slack_message_route
    ]
}

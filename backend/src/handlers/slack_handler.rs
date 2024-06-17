use reqwest::Client;
use serde_json::json;
use std::error::Error;

pub async fn send_slack_message( message: &str) -> Result<(), Box<dyn Error>> {
    let client = Client::new();
    let payload = json!({ "text": message });
    let webhook_url = std::env::var("TOKEN").expect("TOKEN is not set in .env");
    let resp = client.post(webhook_url)
        .json(&payload)
        .send()
        .await?;
    if resp.status().is_success() {
        println!("Message sent successfully to Slack!");
    } else {
        println!("Non-OK response received from Slack: {}", resp.status());
    }
    Ok(())
}
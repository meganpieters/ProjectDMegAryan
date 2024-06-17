use reqwest::Client;
use serde::{Deserialize, Serialize};
use serde_json::json;

#[derive(Debug, Serialize, Deserialize)]
struct SlackApiResponse {
    ok: bool,
    channel: Option<SlackChannel>,
    error: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
struct SlackChannel {
    id: String,
    name: String,
}

#[tokio::main]
async fn slack_function() -> Result<(), Box<dyn std::error::Error>> {
    // OAuth access token (replace with your actual OAuth access token)
    let token: String = env::var("TOKEN")
                             .expect("token moet in .env zitten");
    // Name for the new channel
    let channel_name = "test_channel";

    // Create a new HTTP client
    let client = Client::new();

    // Create the payload to create a new channel
    let create_channel_payload = json!({
        "name": channel_name,
    });

    // Send the POST request to Slack API to create a new channel
    let response = client
        .post("https://slack.com/api/conversations.create")
        .header("Authorization", format!("Bearer {}", token))
        .header("Content-Type", "application/json")
        .body(create_channel_payload.to_string())
        .send()
        .await?;

    // Parse the response
    let response_body: SlackApiResponse = response.json().await?;
    println!("Response: {:?}", response_body);

    // Check if the channel creation request was successful
    if response_body.ok {
        if let Some(channel) = response_body.channel {
            let channel_id = &channel.id;
            println!("Created channel ID: {}", channel_id);

            // Create the payload for the message
            let message_payload = json!({
                "channel": channel_id,
                "text": "Hello, world!"
            });

            // Send the POST request to Slack API to send a message to the new channel
            let response = client
                .post("https://slack.com/api/chat.postMessage")
                .header("Authorization", format!("Bearer {}", token))
                .header("Content-Type", "application/json")
                .body(message_payload.to_string())
                .send()
                .await?;

            // Parse the response
            let response_body: SlackApiResponse = response.json().await?;
            println!("Response: {:?}", response_body);

            // Check if the message sending request was successful
            if response_body.ok {
                println!("Message sent successfully to channel {}", channel_id);
            } else {
                if let Some(error) = response_body.error {
                    println!("Failed to send message: {}", error);
                } else {
                    println!("Failed to send message: unknown error");
                }
            }
        } else {
            println!("Failed to create channel: no channel details provided");
        }
    } else {
        if let Some(error) = response_body.error {
            println!("Failed to create channel: {}", error);
        } else {
            println!("Failed to create channel: unknown error");
        }
    }

    Ok(())
}

use crate::models::{Car, RouteRequests, Users};
use std::error::Error;


const VOLTAGE: f32 = 230.0;
const AMPERE: f32 = 16.3;

pub fn calculate_charge(user_car: &Car, request_info: &RouteRequests) -> f32 {
    if request_info.is_done {
        return 0.0;
    }

    let now = chrono::Local::now();
    let time_passed = (now.timestamp() - request_info.timestamp as i64) as f32 / 3600.0;
    let charging_power = VOLTAGE * AMPERE;
    let energy_added = charging_power * time_passed;
    let charged_kwh = energy_added / 1000.0;

    return charged_kwh;
}

pub fn calculate_charge_percentage(car: &Car, request_info: &RouteRequests) -> f32 {
    let energy_added = calculate_charge(car, request_info);
    let initial_energy = request_info.percentage * car.max_watt;

    let new_total_energy = initial_energy + energy_added;
    let new_percentage = (new_total_energy / car.max_watt) * 100.0;

    return new_percentage;
}

pub async fn get_user_car_data(user: &Users) -> Result<Car, Box<dyn Error>> {
    let url = format!("https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken={}", user.kenteken);
    let resp = reqwest::Client::new()
        .get(&url)
        .header("X-App-Token", "am3tRrLoynPlYSBQ8PYU5BtfJ")
        .send()
        .await?;

    if resp.status().is_success() {
        let json_data = resp.text().await?;
        if let Ok(car) = parse_car_from_json(&json_data, user).await {
            Ok(car)
        } else {
            Err("Failed to parse car data from JSON".into())
        }
    } else {
        Err(format!("Request failed with status: {}", resp.status()).into())
    }
}

async fn parse_car_from_json(json_data: &str, user: &Users) -> Result<Car, Box<dyn Error>> {
    let data: serde_json::Value = serde_json::from_str(json_data)?;
    let brand = data[0]["merk"].as_str().unwrap_or_default().to_string();
    let make = data[0]["handelsbenaming"].as_str().unwrap_or_default().to_string();
    let max_watt = calculate_max_watt(user).await?;
    Ok(Car { brand, make, max_watt, kenteken: user.kenteken.to_string() })
}

async fn calculate_max_watt(user: &Users) -> Result<f32, Box<dyn Error>> {
    let url = format!("https://opendata.rdw.nl/resource/8ys7-d773.json?kenteken={}", user.kenteken);
    let resp = reqwest::Client::new()
        .get(&url)
        .header("X-App-Token", "am3tRrLoynPlYSBQ8PYU5BtfJ")
        .send()
        .await?;

    if resp.status().is_success() {
        let json_data = resp.text().await?;
        if let Ok(max_watt) = parse_car_max_watt(&json_data) {
            Ok(max_watt)
        } else {
            Err("Failed to parse car data from JSON".into())
        }
    } else {
        Err(format!("Request failed with status: {}", resp.status()).into())
    }
}


fn parse_car_max_watt(json_data: &str) -> Result<f32, Box<dyn Error>> {
    let data: serde_json::Value = serde_json::from_str(json_data)?;
    let max_watt: String = data[0]["nominaal_continu_maximumvermogen"].as_str().unwrap_or_default().to_string();
    Ok(max_watt.parse::<f32>().unwrap())

}

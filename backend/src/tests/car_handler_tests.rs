use crate::models::Car;
use crate::models::RouteRequests;
use crate::handlers::car_handler::calculate_charge;
use crate::handlers::car_handler::calculate_charge_percentage;
use crate::models::Users;
use crate::handlers::car_handler::get_user_car_data;

#[cfg(test)]
mod tests {
    use super::*;
    use chrono::prelude::*;

    /// Test voor `calculate_charge` functie.
    ///
    /// Test de berekening van de lading voor een auto.
    /// - Controleert of de lading groter is dan of gelijk aan 0 wanneer de route nog niet klaar is.
    /// - Controleert of de lading 0 is wanneer de route klaar is.
    #[test]
    fn test_calculate_charge() {
        let car = Car { 
            brand: "Tesla".to_string(), 
            make: "Model S".to_string(), 
            max_watt: 100.0, 
            kenteken: "AB1234".to_string() };
        let mut request_info = RouteRequests { 
            id: 1, 
            distance: 100, 
            eta: 60, 
            timestamp: Local::now().timestamp() as i32, 
            is_done: false, 
            percentage: 0.0, 
            user_id: 1 };
    
        let result = calculate_charge(&car, &request_info);
        assert!(result >= 0.0, "Charge should be greater than or equal to 0");
    
        request_info.is_done = true;
        let result = calculate_charge(&car, &request_info);
        assert_eq!(result, 0.0, "Charge should be 0 when request is done");
    }
    
    /// Test voor `calculate_charge_percentage` functie.
    ///
    /// Test de berekening van het laadpercentage voor een auto.
    /// - Controleert of het laadpercentage groter is dan of gelijk aan 50.
    #[test]
    fn test_calculate_charge_percentage() {
        let car = Car { 
            brand: "Tesla".to_string(), 
            make: "Model S".to_string(), 
            max_watt: 100.0, 
            kenteken: "AB1234".to_string() };
        let request_info = RouteRequests { 
            id: 1, 
            distance: 100, 
            eta: 60, 
            timestamp: Local::now().timestamp() as i32, 
            is_done: false, 
            percentage: 0.5, 
            user_id: 1 };
    
        let result = calculate_charge_percentage(&car, &request_info);
        assert!(result >= 50.0, "Charge percentage should be greater than or equal to 50");
    }
    
}
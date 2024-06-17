#[cfg(test)]
mod tests {
    use super::*;
    use diesel::connection::SimpleConnection;
    use diesel::SqliteConnection;
    use crate::handlers::routing_handler::{NewRouteRequest, upload_route, get_routes, get_route, create_queue, get_latest_route_request, get_latest_route_charged_request};
    use crate::diesel::Connection;
    use crate::models::RouteRequests; 
  

    fn setup_test_db() -> SqliteConnection {
        let mut conn = SqliteConnection::establish(":memory:").unwrap();
        conn.batch_execute("
            CREATE TABLE RouteRequests (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                percentage REAL NOT NULL,
                distance INTEGER NOT NULL,
                eta INTEGER NOT NULL,
                timestamp INTEGER NOT NULL,
                user_id INTEGER NOT NULL,
                is_done BOOLEAN NOT NULL
            );

            CREATE TABLE ChargingStations (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                status TEXT NOT NULL,
                max_power REAL NOT NULL,
                route_request_id INTEGER
            );
        ").unwrap();
        conn
    }

    #[test]
    fn test_upload_route() {
        let conn = &mut setup_test_db();
        let new_route = NewRouteRequest {
            percentage: 0.5,
            distance: 100,
            eta: 30,
            timestamp: 1623774000,
            user_id: 1,
            is_done: false,
        };
    
        let result = upload_route(conn, rocket::serde::json::Json(new_route));
        assert!(result.is_ok());
        let (_, message, _) = result.unwrap();
        assert_eq!(message, "Request needs to be processed in the queue");
    }

    #[test]
    fn test_get_routes() {
        let conn = &mut setup_test_db();

        // Insert some route requests into the database
        let route1 = NewRouteRequest {
            percentage: 0.5,
            distance: 50,
            eta: 20,
            timestamp: 1623774000,
            user_id: 1,
            is_done: false,
        };
        let route2 = NewRouteRequest {
            percentage: 0.6,
            distance: 60,
            eta: 25,
            timestamp: 1623774000,
            user_id: 2,
            is_done: false,
        };
    
        upload_route(conn, rocket::serde::json::Json(route1)).unwrap();
        upload_route(conn, rocket::serde::json::Json(route2)).unwrap();
    
        // Call get_routes
        let result = get_routes(conn);
        assert!(result.is_ok());
        let (_, message, routes) = result.unwrap();
        assert_eq!(message, "Requests successfully found");
        assert_eq!(routes.len(), 2);
    }

    
    
    #[test]
    fn test_get_route() {
        let conn = &mut setup_test_db();

        let new_route = NewRouteRequest {
            percentage: 0.5,
            distance: 100,
            eta: 30,
            timestamp: 1623774000,
            user_id: 1,
            is_done: false,
        };

        let result = upload_route(conn, rocket::serde::json::Json(new_route)).unwrap();
        let last_route_id = result.2;

        let res = get_route(conn, last_route_id);
        assert!(res.is_ok());
        let (_, message, route) = res.unwrap();
        assert_eq!(message, format!("Request found with id: {}", last_route_id));
        assert_eq!(route.id, last_route_id);
    }

    #[test]
    fn test_create_queue() {
        let conn = &mut setup_test_db();

        use chrono::Local;
        let now = Local::now().naive_local();
        let today_timestamp: i32 = now.timestamp() as i32;

        let route1 = NewRouteRequest {
            percentage: 0.5,
            distance: 50,
            eta: 20,
            timestamp: today_timestamp,
            user_id: 1,
            is_done: false,
        };
        let route2 = NewRouteRequest {
            percentage: 0.6,
            distance: 60,
            eta: 25,
            timestamp: today_timestamp,
            user_id: 2,
            is_done: false,
        };

        upload_route(conn, rocket::serde::json::Json(route1)).unwrap();
        upload_route(conn, rocket::serde::json::Json(route2)).unwrap();

        let res = create_queue(conn);
        assert!(res.is_ok());
        let (_, message, queue) = res.unwrap();
        assert_eq!(message, "Queue found with correct order");
        assert_eq!(queue.len(), 2);
    }


    #[test]
    fn test_get_latest_route_request() {
        let conn = &mut setup_test_db();

        let new_route = NewRouteRequest {
            percentage: 0.5,
            distance: 100,
            eta: 30,
            timestamp: chrono::Local::now().timestamp() as i32, // cast to i32
            user_id: 1,
            is_done: false,
        };

        let result = upload_route(conn, rocket::serde::json::Json(new_route)).unwrap();

        let res = get_latest_route_request(conn, 1);
        assert!(res.is_ok());
        let (_, message, route) = res.unwrap();
        assert_eq!(message, "Requested request from the user found");
        assert_eq!(route.id, result.2);
    }
   
}
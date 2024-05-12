// @generated automatically by Diesel CLI.

diesel::table! {
    Queue (id) {
        id -> Integer,
        place -> Integer,
        user_id -> Integer,
        route_request_id -> Integer,
    }
}

diesel::table! {
    RouteRequests (id) {
        id -> Integer,
        percentage -> Float,
        distance -> Integer,
        eta -> Integer,
        timestamp -> Integer,
        is_done -> Bool,
        user_id -> Integer,
    }
}

diesel::table! {
    Users (id) {
        id -> Integer,
        first_name -> Text,
        last_name -> Text,
        email -> Text,
        kenteken -> Text,
        admin -> Integer,
    }
}

diesel::joinable!(Queue -> RouteRequests (route_request_id));
diesel::joinable!(Queue -> Users (user_id));
diesel::joinable!(RouteRequests -> Users (user_id));

diesel::allow_tables_to_appear_in_same_query!(
    Queue,
    RouteRequests,
    Users,
);

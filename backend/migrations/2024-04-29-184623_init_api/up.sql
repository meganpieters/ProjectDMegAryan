-- Your SQL goes here
CREATE TABLE Users (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    kenteken TEXT NOT NULL,
    admin INTEGER NOT NULL
);
CREATE TABLE RouteRequests (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    percentage REAL NOT NULL,
    distance INTEGER NOT NULL,
    eta INTEGER NOT NULL,
    timestamp INTEGER NOT NULL,
    is_done BOOLEAN NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);
CREATE TABLE Queue (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    place INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    route_request_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (route_request_id) REFERENCES RouteRequests(id)
);


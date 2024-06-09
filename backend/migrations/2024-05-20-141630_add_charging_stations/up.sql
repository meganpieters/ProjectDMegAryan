CREATE TABLE ChargingStations (
    id TEXT NOT NULL PRIMARY KEY,
    status TEXT NOT NULL,
    max_power REAL NOT NULL,
    route_request_id INTEGER NOT NULL DEFAULT 0,
    FOREIGN KEY(route_request_id) REFERENCES RouteRequests(id)
);

-- standaard ChargingStations, zijn niet allemaal maar kan uitgebreid worden
-- tot het hebben van alle ChargingStations.
INSERT INTO ChargingStations (id, status, max_power) VALUES
('93d712d9-2b17-4e64-a999-354bbb8d20f1', 'available', 22.08),
('3975ab01-54c0-4c6d-bd74-935fd9a585a5', 'available', 22.08),
('71b05e31-5c93-4cd2-b347-3121f164a90d', 'available', 11.04),
('bacd4be1-c5cc-4934-b730-25a3ceaf4789', 'available', 22.08);

-- ID & Name: Youssef Atta Mohamed - 223103574, Mohamed Ahmed Mohamed - 224200083, Wahballah ahmed wahballah - 221100971, Ziad Abdullah - 221101546
-- Course: CSE211 Web Programming
-- Assignment: Course Project
-- Date: 30/12/2025
-- Description: Database schema and sample data for EventsX

CREATE DATABASE IF NOT EXISTS eventsx_db;
USE eventsx_db;

CREATE TABLE events (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    location VARCHAR(255) NOT NULL,
    cost DECIMAL(10,2) NOT NULL
);

CREATE TABLE registrations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    event_id INT NOT NULL,
    tickets INT DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO events (name, date, location, cost) VALUES
('Tech Conference', '2026-01-20', 'Cairo Convention Center', 100.00),
('Music Festival', '2026-02-15', 'Alexandria Beach', 75.00),
('Art Exhibition', '2026-03-10', 'Cairo Opera House', 50.00);
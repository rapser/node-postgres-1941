CREATE DATABASE firstapi;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email) VALUES
    ('miguel', 'matomairo@gmail.com'),
    ('miguel', 'matomairo@gmail.com');
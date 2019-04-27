DROP DATABASE IF EXISTS lunch_buddy;
CREATE DATABASE lunch_buddy;

\c lunch_buddy;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    email VARCHAR NOT NULL UNIQUE,
    username VARCHAR NOT NULL UNIQUE
);

CREATE TABLE orders
(
    id SERIAL PRIMARY KEY,
    order_name VARCHAR NOT NULL,
    order_creator INT REFERENCES users(id),
    order_status VARCHAR NOT NULL,

);

CREATE TABLE order_requests
(
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id),
    user_id INT REFERENCES users(id),
    order_items JSON NULL,
    total INT NULL
);

CREATE TABLE orders
(
    id SERIAL PRIMARY KEY,
    order_name VARCHAR NOT NULL,
    order_creator INT REFERENCES users(id),
    order_status VARCHAR NOT NULL,
    restaurant_id INT NOT NULL
);

INSERT INTO users
    (email, username)
VALUES
    ('test@test.com', 'username'),
    ('test1@test1.com', 'username1'),
    ('test2@test2.com', 'username2');

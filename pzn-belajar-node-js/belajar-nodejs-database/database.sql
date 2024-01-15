create table sample
(
    id  VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
) engine innodb;

SELECT * FROM sample;

CREATE TABLE customers
(
    id      VARCHAR(100) NOT NULL,
    name    VARCHAR(100) NOT NULL,
    email   VARCHAR(100) NOT NULL,
    phone   VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT customers_email_unique UNIQUE (email),
    CONSTRAINT customers_phone_unique UNIQUE (phone)
) ENGINE InnoDB;

CREATE TABLE products
(
    id       VARCHAR(100) NOT NULL,
    name     VARCHAR(100) NOT NULL,
    price    INT          NOT NULL,
    stock    INT          NOT NULL,
    category VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
) ENGINE InnoDB;

INSERT INTO products (id, name, price, stock, category)
VALUES ('P0001', 'A', 1000, 100, 'K1'),
       ('P0002', 'B', 2000, 200, 'K1'),
       ('P0003', 'C', 3000, 300, 'K1'),
       ('P0004', 'D', 4000, 400, 'K2'),
       ('P0005', 'E', 5000, 500, 'K2');

INSERT INTO products (id, name, price, stock, category)
VALUES ('P0006', 'A', 1000, 100, 'K2'),
       ('P0007', 'B', 2000, 200, 'K2'),
       ('P0008', 'C', 3000, 300, 'K2'),
       ('P0009', 'D', 4000, 400, 'K2'),
       ('P0010', 'E', 5000, 500, 'K2');

SELECT * FROM products;

CREATE TABLE categories
(
    id      INT          NOT NULL AUTO_INCREMENT,
    name    VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
) ENGINE InnoDB;

SELECT * FROM categories;

CREATE TABLE wallet
(
    id          VARCHAR(100) NOT NULL,
    balance     INT          NOT NULL,
    customer_id VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT wallet_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id),
    CONSTRAINT wallet_customer_id_unique UNIQUE (customer_id)
) ENGINE InnoDB;

SELECT * FROM wallet;

SELECT * FROM customers;

INSERT INTO customers (id, name, email, phone) VALUES ('arfani', 'Arfani', 'arfani@pzn.com', '7687998718263' );

CREATE TABLE comments
(
    id          INT          NOT NULL AUTO_INCREMENT,
    customer_id VARCHAR(100) NOT NULL,
    title       VARCHAR(200) NOT NULL,
    description TEXT,
    PRIMARY KEY (id),
    CONSTRAINT comments_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id)
) ENGINE InnoDB;

INSERT INTO comments(customer_id, title, description)
VALUES ('eko', 'Comment 1', 'Sample comment 1'),
       ('eko', 'Comment 2', 'Sample comment 2'),
       ('budi', 'Comment 2', 'Sample comment 1'),
       ('budi', 'Comment 2', 'Sample comment 2');

CREATE TABLE likes
(
    customer_id VARCHAR(100) NOT NULL,
    product_id  VARCHAR(100) NOT NULL,
    PRIMARY KEY (customer_id, product_id),
    CONSTRAINT likes_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id),
    CONSTRAINT likes_product_id_fk FOREIGN KEY (product_id) REFERENCES products (id)
) ENGINE InnoDB;

SELECT * FROM likes;

CREATE TABLE _loves
(
    A VARCHAR(100) NOT NULL,
    B VARCHAR(100) NOT NULL,
    PRIMARY KEY (A, B),
    CONSTRAINT customer_loves_fk FOREIGN KEY (A) REFERENCES customers (id),
    CONSTRAINT product_loves_fk FOREIGN KEY (B) REFERENCES products (id)
) ENGINE InnoDB;

CREATE DATABASE belajar_nodejs_prisma;

USE belajar_nodejs_prisma;

show tables;

DESC sample;

SELECT * FROM _prisma_migrations;

DESC sample;

ALTER TABLE sample
ADD COLUMN full_description text;

SELECT * FROM categories;
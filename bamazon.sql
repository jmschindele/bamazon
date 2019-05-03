DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;
USE bamazon_DB;

CREATE TABLE products (

id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INT(10) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
("Cheez-its", "Food", 1.10, 500),
("HDMI Cable", "Electronics", 30, 50),
("Goose Eggs", "Food", 2.00, 1000),
("Floppy Discs - Bulk", "Electronics", .10, 5000),
("Frozen Turkey", "Food", 35, 1),
("DVD Player", "Electronics", 12.50, 40),
("Left Shoes", "Clothing", 5.00, 500),
("Right Shoes", "Clothing", 5.10, 501),
("Left Twix", "Food", 0.10, 500),
("Right Twix", "Food", 0.10, 500)
;

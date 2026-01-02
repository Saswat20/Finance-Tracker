
CREATE DATABASE finance_db;
USE finance_db;

CREATE TABLE transactions (
 id INT AUTO_INCREMENT PRIMARY KEY,
 title VARCHAR(100),
 amount DOUBLE
);

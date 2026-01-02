CREATE DATABASE finance_db;
USE finance_db;

CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    type ENUM('income', 'expense') NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Dummy Data
INSERT INTO transactions (description, amount, type) VALUES 
('Salary', 5000.00, 'income'),
('Rent', 1200.00, 'expense'),
('Groceries', 150.00, 'expense');

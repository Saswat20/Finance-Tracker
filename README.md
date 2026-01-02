FinanceTracker/
├── backend/
│   ├── config/
│   │   └── db.php
│   ├── api/
│   │   ├── add_transaction.php
│   │   └── get_transactions.php
│   └── database.sql
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.js
│   │   │   └── TransactionForm.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│   └── node_modules/
│
└── README.md

📄 Project Overview

The Personal Finance Tracker is a full-stack web application designed to help users track their personal income and expenses.
It provides a clean and interactive dashboard that shows real-time calculations of total income, total expenses, and current balance.

The frontend is built using React.js and communicates with a PHP backend API using Axios.
All transaction data is stored in a MySQL database.

This project is developed mainly for learning purposes and interview discussion, focusing on clean structure and clear data flow.

🚀 Features

Add Transactions:
Users can add income or expense transactions with a description and amount.

Real-time Dashboard:
Automatically calculates:
Total Income
Total Expense
Current Balance

Transaction History: Displays a list of all past transactions.

Frontend–Backend Integration:React frontend communicates with PHP REST APIs using Axios.
Cross-Origin Support:Backend APIs are accessible from the React frontend running on a different port.

🛠️ Tech Stack
Frontend
React.js
Axios (for API calls)
HTML, CSS, JavaScript

Backend
PHP (REST-style APIs)
Database
MySQL

🧱 Project Architecture

Frontend (React):
Handles UI, user input, and dashboard calculations.
Backend (PHP APIs):
Handles database operations such as adding and fetching transactions.
Database (MySQL):
Stores all transaction records.

This separation makes the application clean, modular, and easy to maintain.

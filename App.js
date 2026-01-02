import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './components/Dashboard';
import TransactionForm from './components/TransactionForm';

function App() {
  const [transactions, setTransactions] = useState([]);

  // Fetch data from PHP Backend
  const fetchTransactions = () => {
    axios.get('http://localhost/finance_tracker/backend/api/get_transactions.php')
      .then(res => {
        setTransactions(res.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>Personal Finance Tracker</h1>
      </header>
      <div className="container">
        <TransactionForm refreshData={fetchTransactions} />
        <Dashboard transactions={transactions} />
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import axios from 'axios';

const TransactionForm = ({ refreshData }) => {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { description: desc, amount: amount, type: type };

    axios.post('http://localhost/finance_tracker/backend/api/add_transaction.php', data)
      .then(res => {
        setDesc('');
        setAmount('');
        refreshData(); // Refresh the list without reloading page
      });
  };

  return (
    <div className="form-container">
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Description" 
          value={desc} 
          onChange={(e) => setDesc(e.target.value)} 
          required 
        />
        <input 
          type="number" 
          placeholder="Amount" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          required 
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;

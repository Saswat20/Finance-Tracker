import React from 'react';

const Dashboard = ({ transactions }) => {
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, t) => acc + parseFloat(t.amount), 0);

  const expense = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => acc + parseFloat(t.amount), 0);

  const balance = income - expense;

  return (
    <div className="dashboard">
      <div className="stats">
        <div className="card income">
          <h3>Income</h3>
          <p>${income.toFixed(2)}</p>
        </div>
        <div className="card expense">
          <h3>Expense</h3>
          <p>${expense.toFixed(2)}</p>
        </div>
        <div className="card balance">
          <h3>Balance</h3>
          <p>${balance.toFixed(2)}</p>
        </div>
      </div>

      <h3>Transaction History</h3>
      <ul className="history-list">
        {transactions.map(t => (
          <li key={t.id} className={t.type}>
            <span>{t.description}</span>
            <span>${t.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;

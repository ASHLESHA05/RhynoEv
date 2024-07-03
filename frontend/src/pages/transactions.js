import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/transactions.css'; // Example CSS file for styling

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const user = JSON.parse(localStorage.getItem('auth'));
  const [statusstr,setStatus] =useState("Success")
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('http://localhost:8080/transactionhistory', {
          params: { email: user.email }
        });
        // Assuming response.data.data is an array of transactions
        setTransactions(response.data.data); // Set transactions array from response
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, [user.email]); // Dependency to trigger fetch when user.email changes
  console.log(transactions[0])
  




  return (
    <div className="transactions-container">
      <h2 style={{
        textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
      }}>Transaction History</h2>
      <div className="transactions-table">
        <div className="table-header">
          <div>Sl. No.</div>
          <div>Transaction Type</div>
          <div>Product</div>
          <div>Amount</div>
          <div>Date and Time</div>
          <div>Status</div>
        </div>
        <div className="table-body">
          {transactions.map((transaction, index) => (
            <div key={index} className="table-row">
              <div>{index + 1}</div>
              <div>Card</div>
              <div>{transaction.product}</div>
              <div>{transaction.amount}</div>
              <div>{new Date(transaction.date).toLocaleString()}</div> {/* Use correct property name */}
              <div>{statusstr}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;

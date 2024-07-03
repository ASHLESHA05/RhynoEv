import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/order.css'; // Example CSS file for styling

const OrdersList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('auth')); // Assuming you store user info in localStorage
        const response = await axios.get('http://localhost:8080/yourorders', {
          params: { email: user.email }
        });
        console.log('Orders:', response.data.data);
        setOrders(response.data.data); // Set orders array from response
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="orders-container">
      <h2>Your Orders</h2>
      <div className="orders-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <div><strong>Product:</strong> {order.product}</div>
            <div><strong>Name:</strong> {order.name}</div>
            <div><strong>Address:</strong> {order.address}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersList;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/succes.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useAuth } from '../context/auth.js';

const SuccessMessage = () => {
  const [auth, setAuth] = useAuth();
  const [name, setName] = useState('');
  const [product, setProduct] = useState('');
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState(true);
  const [date, setDate] = useState(new Date());

  const sendtodb = async (email, name, product, address, type, amount, date, status) => {
    console.log("Email: ", email);
    try {
      const response = await axios.put('http://localhost:8080/orders', {
        email,
        name,
        product,
        address
      });
      const respons = await axios.put('http://localhost:8080/transactions', {
        email,
        type,
        product,
        amount,
        date,
        status
      });
      console.log('Response from server:', response.data);
      console.log('Response from transactions:', respons.data);
    } catch (error) {
      console.error('Error sending data to server:', error);
      throw error;
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('auth'));
        const order = JSON.parse(localStorage.getItem('order'));
        console.log(user)
        if (user && order) {
          setName(user.user);
          setProduct(order.product);
          setAddress(user.address);
          const orderAmount = order.product !== 'testDrive' ? 2000 : 0;
          setAmount(orderAmount);
          await sendtodb(user.email, user.user, order.product, user.address, 'card', orderAmount, date, status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    const timer = setTimeout(() => {
      toast.success('Checkout successful! Redirecting...');
      setTimeout(() => {
        // navigate('/');
        toast.dismiss();
      }, 2000);
    }, 1000); // Redirect after 1 second

    return () => clearTimeout(timer);
  }, [navigate, date, status]);

  return (
    <div className="success-container">
      <div className="success-message">
        <div className="checkmark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#FFF225"
            width="48px"
            height="48px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l7.1-7.1 1.4 1.4z" />
          </svg>
        </div>
        <h1>Your order was successful!</h1>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SuccessMessage;

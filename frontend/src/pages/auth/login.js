import React, { useState } from 'react';
import './style/login.css'; // Create or import your login page CSS
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth.js';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/v1/auth/login', { email, password });
      if (res.data.success) {
        console.log("response: "+res.data.name)
        toast.success(res.data.message);
        setAuth({
            
            user:res.data.user,
            token:res.data.token,
            email:email
          })
        localStorage.setItem('auth', JSON.stringify(res.data));
        console.log("in login   " + res.data); // use res.data.user for logging
        navigate('/'); // Uncomment this to redirect to dashboard after successful login
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error('Login error:', error.message);
      toast.error('Something went wrong');
      navigate('/register')
    }
  };

  return (
    <div className="container-login" title="Login - Your App Name">
      <div className="login">
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword" className="form-label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;

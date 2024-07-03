import './App.css'; 
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Home from './pages/Home.js';
import Header from './components/Header.js';
import Register from './pages/auth/register.js';
import Footer from './components/Footer.js';
import { ScrollProvider } from './context/ScrollContext.js';
import SE03_lite from './pages/SE03_lite.js';
import SE03N from './pages/SE03.js';
import SE03_max from './pages/SE03_max.js';
import Products  from './pages/product.js';
import ContactUs from './pages/ContactUs.js';
import RhynoSpecs from './pages/comparision.js';
import SuccessMessage from './pages/success.js';
import Login from './pages/auth/login.js';
import OrdersList from './pages/yourOrders.js';
import TransactionHistory from './pages/transactions.js';


function App() {
  return (
    <ScrollProvider>
    <Router>
    <div className="App">
      <header className="App-header">
        <main>
            <Header className="header"/>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/products/SE03_lite' element={<SE03_lite/>} />
              <Route path='/products/SE03' element={<SE03N/>} />
              <Route path='/products/SE03_max' element={<SE03_max/>} />
              <Route path='products' element={<Products/>}/>
              <Route path='/contactUs' element={<ContactUs/>} />
              <Route path='/products/comparision' element={<RhynoSpecs/>} />
              <Route path='/success' element={<SuccessMessage/>}/>
              <Route path='/orders' element={<OrdersList/>} />
              <Route path='/transaction' element={<TransactionHistory/>} />
            </Routes>
        </main>
      </header>
      <ToastContainer />
    </div>
        <Footer style={{marginTop:'120px'}}/>
        
    </Router>
    </ScrollProvider>

  );
}

export default App;

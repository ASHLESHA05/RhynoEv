import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth.js';
import toast from 'react-hot-toast';
import { NavLink } from 'react-bootstrap';
import { useScroll } from '../context/ScrollContext';

const Header = () => {
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const { scrollToAboutUs } = useScroll();
    const location=useLocation();

    const handleLogout = () => {
        setAuth({ user: null, token: '' });
        localStorage.removeItem('auth');
        toast.success('Logout Successful');
        navigate('/');
    };

    const handledash = () => {
        toast.success("Profile");
        navigate('/dashboard');
    };

    const handlewish = () => {
        navigate('/wishlist');
    };

    const HandleSignUp = () => {
        navigate('/register');
    };

    const handleHomeClick = () => {
        console.log('Navigating to home');
        console.log(location.pathname);
        if(location.pathname !== '/'){
            navigate('/');
        } else {
            window.scrollTo({top:0, behavior:'smooth'});
        }
    };

    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" onClick={() => navigate('/')}>
                    <img src={`${process.env.PUBLIC_URL}/favicon.png`} alt="Logo" style={{ maxWidth: 130, cursor:'pointer' }} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" onClick={handleHomeClick} style={{cursor:'pointer'}}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={scrollToAboutUs} style={{cursor:'pointer'}}>About Us</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbardrop" data-bs-toggle="dropdown">
                                Products
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" onClick={() => navigate('/products/SE03_lite')} style={{cursor:'pointer'}}>SE03 Lite</a>
                                <a className="dropdown-item" onClick={() => navigate('/products/SE03')} style={{cursor:'pointer'}}>SE03</a>
                                <a className="dropdown-item" onClick={() => navigate('/products/SE03_max')} style={{cursor:'pointer'}}>SE03 Max</a>
                                <a className="dropdown-item" onClick={() => navigate('/products/comparision')} style={{cursor:'pointer'}}>Compare all 3</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => { 
                                console.log('Navigating to contact us');
                                navigate('/contactUs');
                            }} style={{cursor:'pointer'}}>Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => { 
                                console.log('Navigating to products');
                                navigate('/products');
                            }} style={{cursor:'pointer'}}>Pre-book now</a>
                        </li>
                    </ul>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item' style={{ marginRight: 10 }}>
                            <a className="nav-link" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <i id="insta" className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li className='nav-item' style={{ marginRight: 70 }}>
                            <a className="nav-link" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i id="linkedin" className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        {auth?.user ? (
                            <>
                                <li className="nav-item dropdown">
                                    <div className="dropdown">
                                        <NavLink className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {auth.user.name}
                                        </NavLink>
                                        <ul className="dropdown-menu">
                                            <li><NavLink onClick={handledash} className="dropdown-item">Dashboard</NavLink></li>
                                            <li><NavLink onClick={handleLogout} to="/" className="dropdown-item">Logout</NavLink></li>
                                            <li><NavLink onClick={handlewish} to="/wishlist" className="dropdown-item">Wishlist</NavLink></li>
                                        </ul>
                                    </div>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/register" className="nav-link">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <button className="signUp-button" onClick={HandleSignUp}>SignUp</button>
                                </li>
                            </>
                        )}
                        {auth?.user && (
                            <li className='nav-item'>
                                <ion-icon name="person-circle-outline" style={{ fontSize: '2em', marginRight: '120px', marginTop: '5px' }}></ion-icon>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;

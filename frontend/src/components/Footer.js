import React from 'react';
import '../styles/footer.css'; // Ensure you have a CSS file for styling your footer
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useLocation,useNavigate } from 'react-router-dom';
import { useScroll } from '../context/ScrollContext.js';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // This will keep the copyright year current
  const navigate = useNavigate();
  const { scrollToAboutUs ,scrollToRentals} = useScroll();
  const location=useLocation();


  const handleAbout= async ()=>{
    if (location.pathname !== '/') {
      console.log('Navigating to AboutUs');
      navigate('/');
      await new Promise(resolve => setTimeout(resolve, 100)); // Small delay
      scrollToAboutUs();
  } else {
      scrollToAboutUs();
  }
  }
  const handlehome=()=>{
    console.log(location.pathname);
    if(location.pathname !== '/'){
        navigate('/');
    } else {
        window.scrollTo({top:0, behavior:'smooth'});
    }
  }
  const handlerentalclick= async ()=>{
    console.log('Navigating to rentals');
    if (location.pathname !== '/') {
      navigate('/');
      await new Promise(resolve => setTimeout(resolve, 100)); // Small delay
      scrollToRentals();
  } else {
    console.log("scrolled")
      scrollToRentals();
  }
  
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a onClick={handlehome}>Home</a></li>
            <li><a onClick={()=>{
              navigate('/products')
              window.scrollTo({top:0, behavior:'smooth'});
          }}>Products</a></li>
            <li><a onClick={handleAbout}>About Us</a></li>
            <li><a onClick={()=>{navigate('/contactUs'); window.scrollTo({top:0, behavior:'smooth'});}}>Contact</a></li>
            <li><a onClick={handlerentalclick}>Rentals</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Information</h4>
          <p><strong>Mail:</strong> <a href="mailto:info@rhyno.in">info@rhyno.in</a></p>
        <p><strong>Mobile no.:</strong> <a href="tel:+919023987528">+91-9023987528</a></p>
        <p><strong>Location:</strong> Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India</p>

        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-media-links">
            <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF className="social-icon"/></a>
            <a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="social-icon"/></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icon"/></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} RHYNO EV. All Rights Reserved.</p>
        <p>Terms of Service | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;

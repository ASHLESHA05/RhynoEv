import React from 'react';
import '../styles/footer.css'; // Ensure you have a CSS file for styling your footer
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // This will keep the copyright year current

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Products</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href='#rentals'>Rentals</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Information</h4>
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

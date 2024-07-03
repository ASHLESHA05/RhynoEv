import React, { useRef } from 'react';
import '../styles/rental.css'; // Ensure you have a CSS file for styling
import { FaAndroid, FaApple } from 'react-icons/fa';

const RentalOptions = () => {
    const rentalref=useRef()
  return (
    <div className="rental-container" ref={rentalref}>
      <h2>Explore the Roars of Rhyno at Your Own Pace</h2>
      <p>
        Test the waters with our flexible rental model, available for a week or a month, allowing you to experience the Rhyno first hand before committing. Simply visit our authorized dealerships to unlock this opportunity.
      </p>
      <p>
        Additionally, we're redefining campus commuting with our rental fleet tailored for college students. Navigate your daily commute effortlessly by renting Rhyno vehicles on an hourly basis through our user-friendly mobile app. Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation.
      </p>
      <div className="app-buttons">
        <a href="https://play.google.com/store" className="app-button android">
          <FaAndroid /> Android
        </a>
        <a href="https://www.apple.com/app-store/" className="app-button apple">
          <FaApple /> Apple
        </a>
      </div>
    </div>
  );
};

export default RentalOptions;

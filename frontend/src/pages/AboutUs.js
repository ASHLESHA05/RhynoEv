import React, { useEffect, useRef, useState } from 'react';
import '../styles/AboutUs.css'

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`about-container ${isVisible ? 'pop-up' : ''}`} ref={containerRef} style={{maxWidth:'75%',height:'auto'}} >
      <h2>About Us</h2>
      <p>
        Established in 2019 by an automotive engineer with a vision for sustainable and robust
        mobility solutions, Rhyno EV is not just a company; it's a collective effort of a dynamic team
        of young individuals passionately driving innovation in the electric vehicle industry. We
        believe in engineering solutions that solve problems.
      </p>
      <p>
        With our first product, we've taken a bold step to create something more than just a vehicle;
        it's a unique experience of elegance, comfort and style, addressing the pitfalls of
        conventional electric scooters. Our design prioritizes safety, eliminating concerns of fires and
        ensuring a longer battery lifespan with our battery technology. Perfectly suited for fleet
        operators, especially in tourist-centric locations like Goa, our rugged yet aesthetically
        appealing scooters are engineered for longevity and reliability. Join us as we pioneer a new
        era in sustainable and dependable electric transportation.
      </p>
    </div>
  );
};

export default AboutUs;

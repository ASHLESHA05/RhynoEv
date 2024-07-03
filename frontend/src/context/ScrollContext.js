import React, { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const aboutUsRef = useRef(null);
  const rentalref = useRef(null);

  const scrollToAboutUs = () => {
    if (aboutUsRef.current) {
      const headerHeight = document.querySelector('.header').offsetHeight; // Adjust this selector if necessary
      const elementPosition = aboutUsRef.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight-70;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToRentals = () => {
    if (rentalref.current) {
      console.log(';')
      const headerHeight = document.querySelector('.header').offsetHeight; // Adjust this selector if necessary
      const elementPosition = rentalref.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition-70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollToAboutUs, scrollToRentals, aboutUsRef, rentalref }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);

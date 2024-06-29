import React, { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const aboutUsRef = useRef(null);

  const scrollToAboutUs = () => {
    if (aboutUsRef.current) {
      const headerHeight = document.querySelector('.header').offsetHeight; // Adjust this selector if necessary
      
      const elementPosition = aboutUsRef.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 70;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollToAboutUs, aboutUsRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);

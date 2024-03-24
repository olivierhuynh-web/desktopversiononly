// NavigationContext.js
'use client'; // NavigationContext.js// NavigationContext.js
import React, { createContext, useState, useContext, useMemo } from 'react';

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [currentComponent, setCurrentComponent] = useState(1);

  const value = useMemo(
    () => ({
      currentComponent,
      handleNextComponent: (value) => setCurrentComponent(value),
    }),
    [currentComponent]
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  return useContext(NavigationContext);
};

export default NavigationProvider;

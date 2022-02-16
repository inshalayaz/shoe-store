import { createContext, useState } from 'react';
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [navbar, setNavbar] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [mobileView, setMobileView] = useState(false);
  // const [browserLocation, setBrowserLocation] = useState(location);

  return (
    <AppContext.Provider
      value={{
        navbar,
        setNavbar,
        darkMode,
        setDarkMode,
        mobileView,
        setMobileView,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

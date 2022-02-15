import { createContext, useState } from 'react';
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [navbar, setNavbar] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <AppContext.Provider value={{ navbar, setNavbar, darkMode, setDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};

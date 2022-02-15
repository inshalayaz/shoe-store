import { AppBar } from '@mui/material';
import './header.css';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import DesktopView from './DesktopView/DesktopView';
import MobileView from './MobileView/MobileView';

const Header = () => {
  const { navbar, setNavbar, mobileView, setMobileView } =
    useContext(AppContext);

  const changeBackground = () => {
    if (window.scrollY >= 600) {
      setNavbar(true);
      // setDarkMode(false);
    } else {
      setNavbar(false);
      // setDarkMode(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);

    // Checking For Responsiveness
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setMobileView(true)
        : setMobileView(false);
    };

    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());

    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    };
  }, []);

  return (
    <AppBar position="fixed" className={navbar ? 'navbar active' : 'navbar '}>
      {mobileView ? <MobileView /> : <DesktopView />}
    </AppBar>
  );
};

export default Header;

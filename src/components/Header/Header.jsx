import {
  AppBar,
  Grid,
  InputAdornment,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './header.css';
import { SearchBar } from './styles';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';

const Header = () => {
  const { navbar, setNavbar, setDarkMode, darkMode } = useContext(AppContext);

  const changeBackground = () => {
    if (window.scrollY >= 600) {
      setNavbar(true);
      setDarkMode(false);
    } else {
      setNavbar(false);
      setDarkMode(true);
    }
  };
  console.log(darkMode);
  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
  }, []);

  return (
    <AppBar position="fixed" className={navbar ? 'navbar active' : 'navbar '}>
      <Grid
        container
        spacing={2}
        display="flex"
        alignItems="center"
        marginTop="8px"
      >
        <Grid
          item
          md={3}
          display="flex"
          justifyContent="center"
          // alignItems="center"
        >
          {/* <SearchIcon /> */}
          {/* <SearchBar
            id="outlined-basic"
            placeholder="Search"
            className="search-bar"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              style: { color: '#fff' },
            }}
            variant="outlined"
            size="small"
          /> */}
          <input type="search" name="" placeholder="Search" class="searchbar" />
        </Grid>
        <Grid item md={5} display="flex" justifyContent="center">
          <Typography variant="h2">Shoe Store</Typography>
        </Grid>
        <Grid item md={4} display="flex" justifyContent="center">
          <Stack direction="row" spacing={2}>
            <Link href="#" underline="none">
              <Typography
                variant="body1"
                className={navbar ? 'active-navitem' : 'nav-items'}
              >
                Sneakers
              </Typography>
            </Link>
            <Link href="#" underline="none">
              <Typography
                variant="body1"
                className={navbar ? 'active-navitem' : 'nav-items'}
              >
                FC Apparel
              </Typography>
            </Link>
            <Link href="#" underline="none">
              <Typography
                variant="body1"
                className={navbar ? 'active-navitem' : 'nav-items'}
              >
                Store
              </Typography>
            </Link>
            <Link href="#" underline="none">
              <Typography
                variant="body1"
                className={navbar ? 'active-navitem' : 'nav-items'}
              >
                Account
              </Typography>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;

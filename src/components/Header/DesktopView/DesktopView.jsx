import { Grid, InputAdornment, Link, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../../../context/AppContext';
import Searchbar from '../Searchbar/Searchbar';
import './style.css';
const DesktopView = () => {
  const { navbar } = useContext(AppContext);
  const selectClass = () => {
    const location = useLocation();
    console.log(location.pathname);
    if (location.pathname !== '/' || navbar === true) {
      return 'active-navitem';
    } else {
      return 'nav-items';
    }
  };
  const selectedClass = selectClass();
  return (
    <Grid container spacing={2} display="flex" alignItems="center">
      <Grid item md={3} display="flex" justifyContent="center">
        <Searchbar />
      </Grid>
      <Grid item md={5} display="flex" justifyContent="center">
        <Typography variant="h2">Shoe Store</Typography>
      </Grid>
      <Grid item md={4} display="flex" justifyContent="center">
        <Stack direction="row" spacing={2}>
          <Link href="#" underline="none">
            <Typography variant="body1" className={selectedClass}>
              Sneakers
            </Typography>
          </Link>
          <Link href="#" underline="none">
            <Typography variant="body1" className={selectedClass}>
              FC Apparel
            </Typography>
          </Link>
          <Link href="#" underline="none">
            <Typography variant="body1" className={selectedClass}>
              Store
            </Typography>
          </Link>
          <Link href="#" underline="none">
            <Typography variant="body1" className={selectedClass}>
              Account
            </Typography>
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default DesktopView;

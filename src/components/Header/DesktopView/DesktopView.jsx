import { Grid, InputAdornment, Link, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import Searchbar from '../Searchbar/Searchbar';
import './style.css';
const DesktopView = () => {
  const { navbar } = useContext(AppContext);
  return (
    <Grid
      container
      spacing={2}
      display="flex"
      alignItems="center"
      marginTop="8px"
    >
      <Grid item md={3} display="flex" justifyContent="center">
        <Searchbar />
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
  );
};

export default DesktopView;

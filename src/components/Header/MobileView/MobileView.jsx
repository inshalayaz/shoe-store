import { Grid, Typography, Paper } from '@mui/material';
import Searchbar from '../Searchbar/Searchbar';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './style.css';
import { useState } from 'react';
const MobileView = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    console.log('click');
    setOpenMenu(!openMenu);
  };
  const menuItems = ['Shop', 'Ali Jordan', 'Nike', 'Account'];

  return (
    <Grid
      container
      spacing={2}
      display="flex"
      alignItems="center"
      marginTop="8px"
    >
      <Grid item xs={5} display="flex" justifyContent="center">
        <Searchbar />
      </Grid>
      <Grid item xs={4} display="flex" justifyContent="center">
        <Typography variant="h2">Shoe Store</Typography>
      </Grid>
      <Grid item xs={3} display="flex" justifyContent="center">
        <MenuIcon onClick={handleClick} />
      </Grid>
      {openMenu && (
        <Grid container className="mobile-menu-container">
          <Grid xs={12} item className="close-btn">
            <CloseIcon
              color="primary"
              onClick={handleClick}
              style={{ cursor: 'pointer' }}
            />
            <Grid item xs={12}>
              <Typography variant="h5">Hello</Typography>
            </Grid>
          </Grid>
          {/* <Grid container className="menu-items">
          </Grid> */}
        </Grid>
      )}
    </Grid>
  );
};

export default MobileView;

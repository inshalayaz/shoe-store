import { Grid, Typography, Link } from '@mui/material';
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
  const menuItems = ['Shop', 'Ali Jordan', 'Nike', 'Contact'];

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
              color="white"
              onClick={handleClick}
              style={{ cursor: 'pointer' }}
            />
            <Grid container spacing={2} className="menu-items">
              {menuItems.map((i) => (
                <Grid item xs={12} key={i}>
                  <Link href="#" color="#fff" underline="none">
                    <Typography variant="h5">{i}</Typography>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default MobileView;

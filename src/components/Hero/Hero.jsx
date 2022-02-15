import { Grid, Link, Typography } from '@mui/material';
import React from 'react';
import './Hero.css';
const Hero = () => {
  return (
    <Grid container spacing={2} className="hero">
      <Grid
        item
        xs={12}
        sm={12}
        style={{ color: '#fff', margin: '180px 0px 50px 50px' }}
      >
        <Typography variant="h3" align="left">
          AIR JORDAN 5 RETRO <br /> 'RACER BLUE'
        </Typography>
        <Link
          href="#"
          style={{
            color: '#fff',
            textDecorationColor: '#fff',
          }}
        >
          <Typography variant="subtitle1" marginTop="30px">
            Shop Now
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Hero;

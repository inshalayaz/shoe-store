import { Grid, Link, Typography } from '@mui/material';
import { Link as LinkR } from 'react-router-dom';
import React from 'react';
import './Hero.css';
const Hero = () => {
  return (
    <Grid container spacing={2} className="hero">
      <Grid
        item
        xs={12}
        sm={12}
        style={{ color: '#fff', margin: '280px 0px 50px 70px' }}
        className="hero_content"
      >
        <Typography variant="h3" align="left" className="hero_product_name">
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
            <LinkR to="/products/1" style={{ color: '#fff' }}>
              Shop Now
            </LinkR>
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Hero;

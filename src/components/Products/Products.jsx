import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import ProductCard from './ProductCards/ProductCards';
import './products.css';
import data from './data';

const Products = () => {
  return (
    <Grid container spacing={2} className="products">
      <Grid item xs={12} style={{ margin: '0 70px' }}>
        <Typography variant="h5">NEW RELEASES</Typography>
        <div className="cards">
          <Grid container spacing={2}>
            {data.map(({ img, title, brand }) => (
              <Grid item xs={6} md={3} key={title}>
                <ProductCard img={img} brand={brand} title={title} />
              </Grid>
            ))}
          </Grid>
        </div>
        <Grid item xs={12} style={{ display: 'flex' }} justifyContent="center">
          <Button color="primary" size="large" variant="contained">
            SHOP NEW RELEASES
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Products;

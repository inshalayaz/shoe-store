import Hero from '../components/Hero/Hero';
import Products from '../components/Products/Products';

import { Grid } from '@mui/material';

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} className="top-section">
        <Hero />
      </Grid>
      <Grid item xs={12} className="bottom-section">
        <Products />
      </Grid>
    </Grid>
  );
};

export default Home;

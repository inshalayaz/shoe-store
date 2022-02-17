import { Grid, Typography } from '@mui/material';
import './style.css';

const Footer = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      className="footer"
    >
      <Grid item xs={12}>
        <Typography variant="h2">Shoe Store</Typography>
      </Grid>
      <Grid item>1</Grid>
      <Grid item>1</Grid>
      <Grid item>1</Grid>
      <Grid item>1</Grid>
      <Grid item>1</Grid>
    </Grid>
  );
};

export default Footer;

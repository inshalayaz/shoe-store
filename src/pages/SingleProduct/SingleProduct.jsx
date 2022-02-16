import { Button, Grid, Typography } from '@mui/material';
import './style.css';
import img from '../../images/1.jpg';
import afterpay from '../../images/afterpay.svg';

const SingleProduct = () => {
  //   console.log(location.pathname);

  const sizes = [4, 6, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 13, 14];

  return (
    <Grid container spacing={2} className="single_product">
      <Grid item xs={6} className="product_details">
        <img src={img} alt="no" width="100%" />
      </Grid>
      <Grid item xs={6} className="product_details" style={{}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="caption">Air Jordan</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">
              AIR JORDAN 5 RETRO 'RACER BLUE'
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2">SELECT US MENU</Typography>
          </Grid>
          <Grid item xs={8}>
            {sizes.map((i) => (
              <Button variant="outlined" size="large" className="menu_btn">
                {i}
              </Button>
            ))}
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body1">Buy New</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Buy Used</Typography>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="error" fullWidth>
              $300+
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" fullWidth>
              OUT OF STOCK
            </Button>
          </Grid>
          <Typography
            variant="caption"
            marginTop="10px"
            marginLeft="18px"
            style={{ display: 'flex' }}
          >
            Or 4 interest-free payments by.{' '}
            <img src={afterpay} width="80px" style={{ marginLeft: '5px' }} />
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SingleProduct;

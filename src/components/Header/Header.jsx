import {
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import { SearchBar } from './styles';

const Header = () => {
  return (
    <Grid
      container
      spacing={2}
      display="flex"
      alignItems="center"
      marginTop="8px"
    >
      <Grid
        item
        md={3}
        display="flex"
        justifyContent="center"
        // alignItems="center"
      >
        {/* <SearchIcon /> */}
        <SearchBar
          id="outlined-basic"
          placeholder="Search"
          className="search-bar"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            style: { color: '#fff' },
          }}
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid item md={5} display="flex" justifyContent="center">
        <Typography variant="h2">Shoe Store</Typography>
      </Grid>
      <Grid item md={4} display="flex" justifyContent="center">
        <Stack direction="row" spacing={2}>
          <Typography variant="body1" className="nav-items">
            Sneakers
          </Typography>
          <Typography variant="body1" className="nav-items">
            FC Apparel
          </Typography>
          <Typography variant="body1" className="nav-items">
            FC Apparel
          </Typography>
          <Typography variant="body1" className="nav-items">
            FC Apparel
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Header;

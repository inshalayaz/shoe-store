import { Container, CssBaseline, Grid } from '@mui/material';
import Header from './components/Header/Header';
import './App.css';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
const App = () => {
  const { darkMode } = useContext(AppContext);
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem , 0',
      },
    },
    palette: {
      mode: 'light',
      primary: {
        main: '#000',
        secondary: '#208080',
      },
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="false" disableGutters>
          <Grid container spacing={2}>
            <Grid item xs={12} className="top-section">
              <Header />
              <Hero />
            </Grid>
            <Grid item xs={12} className="bottom-section">
              <Products />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;

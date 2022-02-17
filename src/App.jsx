import { Container, CssBaseline, Grid } from '@mui/material';
import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import Home from './pages/Home';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Footer from './components/Footer/Footer';
const App = () => {
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
          <BrowserRouter>
            <Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/products/:personId" element={<SingleProduct />} />
            </Routes>
          </BrowserRouter>
          {/* <Footer /> */}
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;

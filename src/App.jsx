import { Container, Grid } from '@mui/material';
import Header from './components/Header/Header';
import './App.css';
import Hero from './components/Hero/Hero';
const App = () => {
  return (
    <div className="App">
      <Container maxWidth="false" disableGutters>
        <Grid container spacing={2}>
          <Grid item xs={12} className="top-section">
            <Header />
            <Hero />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;

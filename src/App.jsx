import { Container, Grid } from '@mui/material';
import Header from './components/Header/Header';
import './App.css';
const App = () => {
  return (
    <div className="App">
      <Container maxWidth="xl" disableGutters>
        <Grid container spacing={2}>
          <Grid item xs={12} className="top-section">
            <Header />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;

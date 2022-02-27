import { Grid } from '@mui/material';
import React from 'react';

import './style.css';
const Dashboard = () => {
  return (
    <Grid
      container
      spacing={2}
      className="dashboard-container"
      style={{ marginTop: 160, marginBottom: 100 }}
    >
      <Grid item xs={12}>
        Dashboard
      </Grid>
    </Grid>
  );
};

export default Dashboard;

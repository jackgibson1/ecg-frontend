/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Grid from '@mui/material/Grid';
import NavigationBar from './components/NavigationBar';
import HomeHero from './components/HomeHero';

function App() {
  return (
    <Grid fluid container>
      <Grid item xs={12}>
        <NavigationBar />
      </Grid>
      <Grid item xs={12}>
        <HomeHero />
      </Grid>

    </Grid>

  );
}

export default App;

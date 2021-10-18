/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Grid from '@mui/material/Grid';
import MainAppBar from './components/MainAppBar';
import HomeHero from './components/HomeHero';
import HomeSection1 from './components/HomeSection1';

function App() {
  return (
    <Grid fluid container>
      <Grid container item xs={12}>
        <MainAppBar />
      </Grid>
      <Grid container item xs={12}>
        <HomeHero />
      </Grid>
      <hr />
      <Grid container item xs={12}>
        <HomeSection1 />
      </Grid>
    </Grid>

  );
}

export default App;

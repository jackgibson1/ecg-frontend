/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Grid from '@mui/material/Grid';
import MainAppBar from './components/MainAppBar';
import Home from './components/Home';

function App() {
  return (
    <Grid fluid container justify="center">
      <Grid container item xs={12}>
        <MainAppBar />
      </Grid>
      <Grid container item xs={12}>
        <Home />
      </Grid>
    </Grid>

  );
}

export default App;

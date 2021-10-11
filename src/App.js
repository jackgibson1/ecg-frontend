/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Grid, Box } from '@mui/material';
import NavigationBar from './components/NavigationBar';
import heartImg from './assets/images/heart1.png';

function App() {
  return (
    <Grid container>
      <Grid container>
        <NavigationBar />
      </Grid>
      <Grid item justifyItems="center" alignItems="center" xs={12} lg={6}>
        Learn ECGs
      </Grid>
      <Grid item justifyItems="center" alignItems="center" xs={12} lg={6}>
        <Box component="span">
          <img style={{ maxWidth: '100%' }} src={heartImg} alt="heart diagram" />
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;

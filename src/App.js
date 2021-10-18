/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Grid from '@mui/material/Grid';
import MainAppBar from './components/MainAppBar';
import HomeHero from './components/HomeHero';
import HomeSection1 from './components/HomeSection1';
import HomeSection2 from './components/HomeSection2';

const styles = {
  hr: {
    border: '0',
    clear: 'both',
    display: 'block',
    width: '96%',
    backgroundColor: '#000000',
    height: '2px',
    marginTop: '5%',
    marginBottom: '5%',
  },
};

function App() {
  return (
    <Grid fluid container justify="center">
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
      <hr style={styles.hr} />
      <Grid container item xs={12}>
        <HomeSection2 />
        <hr />
      </Grid>
    </Grid>

  );
}

export default App;

import React from 'react';
import { Typography, Grid } from '@mui/material';
import AotraImage from '../../../assets/images/courses/course-1-anatomy/outside/aorta.png';

function Question1() {
  return (
    <div>
      <Typography variant="h6" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>Area: Anatomy Outside The Heart</Typography>
      <Grid fluid container justify="center">
        <Grid item xs={6}>
          <img src={AotraImage} style={{ marginTop: '7%', boxShadow: '7px 7px 7px 7px rgb(0 0 0 / 0.5)', borderRadius: 10 }} height="250" width="300" alt="heart" />
        </Grid>
        <Grid item xs={6} sx={{ paddingRight: '2%' }}>
          <Typography style={{ marginTop: '5%' }} align="left" variant="h6">The diagram on the left shows a structure found on the outside of the heart. What is this structure?</Typography>
          <Typography style={{ marginTop: '4%', marginLeft: '5%' }} align="left" variant="h6">1. Aorta</Typography>
          <Typography style={{ marginTop: '1%', marginLeft: '5%' }} align="left" variant="h6">2. Inferior Vena Cava (IVC)</Typography>
          <Typography style={{ marginTop: '1%', marginLeft: '5%' }} align="left" variant="h6">3. Lung Supply</Typography>
          <Typography style={{ marginTop: '1%', marginLeft: '5%' }} align="left" variant="h6">4. Left Atrium</Typography>
        </Grid>
      </Grid>

    </div>
  );
}

export default Question1;

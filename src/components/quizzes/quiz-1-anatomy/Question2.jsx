import React from 'react';
import { Typography, Grid } from '@mui/material';

function Question2() {
  return (
    <div>
      <Typography variant="h6" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>Area: Anatomy Outside The Heart</Typography>
      <Grid fluid container justify="center">
        <Grid item xs={12} sx={{ paddingRight: '1%', paddingLeft: '1%' }}>
          <Typography style={{ marginTop: '5%' }} align="left" variant="h6">What is the role of the Inferior Vena Cava?</Typography>
          <Typography style={{ marginTop: '1%', marginLeft: '5%' }} align="left" variant="h6">1. A large vein that delivers deoxygenated blood from the upper body into the heart.</Typography>
          <Typography style={{ marginTop: '1%', marginLeft: '5%' }} align="left" variant="h6">2. A large vein that delivers deoxygenated blood from the lower body into the heart.</Typography>
          <Typography style={{ marginTop: '1%', marginLeft: '5%' }} align="left" variant="h6">3. Lower chamber of the heart that pumps oxygenated blood to the body. </Typography>
          <Typography style={{ marginTop: '1%', marginLeft: '5%' }} align="left" variant="h6">4. Thin-walled upper chamber of the heart that receives oxygenated blood from the lungs</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Question2;

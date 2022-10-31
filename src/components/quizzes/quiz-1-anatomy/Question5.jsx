import React from 'react';
import { Typography, Grid } from '@mui/material';

function Question5() {
  return (
    <div>
      <Typography variant="h6" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>Area: Contraction</Typography>
      <Grid fluid container justify="center">
        <Grid item xs={12} sx={{ paddingRight: '2%', paddingLeft: '2%' }}>
          <Typography style={{ marginTop: '5%' }} align="left" variant="h6">The contraction of the heart is made of four main steps. These steps produce a rythm known as?</Typography>
          <Typography style={{ marginTop: '1%', marginLeft: '5%' }} align="left" variant="h6">1. Thumping</Typography>
          <Typography style={{ marginTop: '1%', marginLeft: '5%' }} align="left" variant="h6">2. dub-rub</Typography>
          <Typography style={{ marginTop: '1%', marginLeft: '5%' }} align="left" variant="h6">3. Atrio Rythm</Typography>
          <Typography style={{ marginTop: '1%', marginLeft: '5%' }} align="left" variant="h6">4. lub-dub</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Question5;

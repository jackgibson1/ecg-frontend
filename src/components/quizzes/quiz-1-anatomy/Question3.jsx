import React from 'react';
import { Typography, Grid } from '@mui/material';
import MitralImage from '../../../assets/images/courses/course-1-anatomy/inside/mitralvalve.png';

function Question3() {
  return (
    <div>
      <Typography variant="h6" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>Area: Anatomy Inside The Heart</Typography>
      <Grid fluid container justify="center">
        <Grid item xs={6}>
          <img src={MitralImage} style={{ marginTop: '7%', boxShadow: '7px 7px 7px 7px rgb(0 0 0 / 0.5)', borderRadius: 10 }} height="250" width="300" alt="heart" />
        </Grid>
        <Grid item xs={6} sx={{ paddingRight: '2%' }}>
          <Typography style={{ marginTop: '5%' }} align="left" variant="h6">The diagram on the left shows a structure that prevents blood from flowing backwards from the left ventricle into the left atrium. What is it?</Typography>
          <Typography style={{ marginTop: '4%', marginLeft: '5%' }} align="left" variant="h6">1. Septum</Typography>
          <Typography style={{ marginTop: '1%', marginLeft: '5%' }} align="left" variant="h6">2. Tricuspid Valve</Typography>
          <Typography style={{ marginTop: '1%', marginLeft: '5%' }} align="left" variant="h6">3. Mitral (Bicuspid) Valve</Typography>
          <Typography style={{ marginTop: '1%', marginLeft: '5%' }} align="left" variant="h6">4. Aortic Valve</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Question3;

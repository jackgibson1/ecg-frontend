import React from 'react';
import { Typography, Grid } from '@mui/material';
import Step3Image from '../../../assets/images/courses/course-1-anatomy/bloodflow/step3flow.gif';

function Question4() {
  return (
    <div>
      <Typography variant="h6" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>Area: Blood Flow</Typography>
      <Grid fluid container justify="center">
        <Grid item xs={8}>
          <Typography style={{ marginTop: '1%' }} align="left" variant="h6">The animation of the left show a key stage of the blood flow around the heart. What is it?</Typography>
          <Typography style={{ marginTop: '1%', marginLeft: '5%' }} align="left" variant="h6">1. Deoxygenated blood from the upper and lower body enters the right atrium of the heart.</Typography>
          <Typography style={{ marginLeft: '5%' }} align="left" variant="h6">2. The right ventricle pumps the blood to the lungs via the pulmonary arteries.</Typography>
          <Typography style={{ marginLeft: '5%' }} align="left" variant="h6">3. The oxygenated blood is returned to the left atrium of the heart.</Typography>
          <Typography style={{ marginLeft: '5%' }} align="left" variant="h6">4. In the lungs, the blood gives up carbon dioxide and absorbs oxygen.</Typography>
        </Grid>
        <Grid item xs={4}>
          <img src={Step3Image} style={{ marginTop: '4%', boxShadow: '7px 7px 7px 7px rgb(0 0 0 / 0.5)', borderRadius: 10 }} height="250" width="250" alt="heart" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Question4;

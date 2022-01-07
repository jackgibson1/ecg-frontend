/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import heartIntroImage from '../../../assets/images/courses/anatomy/introduction.png';

export default function AnatomyIntroduction() {
  return (
    <div>
      <Typography variant="h4" sx={{ marginTop: '1%' }}>Introduction</Typography>
      <Grid fluid container justify="center">
        <Grid item xs={6}>
          <Typography variant="h6">Right &nbsp; &nbsp; &nbsp; Left</Typography>
          <img src={heartIntroImage} alt="heart" />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">All About The Heart</Typography>
          <Typography variant="body1" align="left">
            The heart is essential to your survival! It pumps blood to all the different
            parts of the body, supplying them with oxygen and energy.
            The heart sits between the lungs and works closely with
            them to make sure there is enough oxygen in the blood.
          </Typography>
          <Typography variant="h6" sx={{ marginTop: '5%' }}>Right or Left?</Typography>
          <Typography variant="body1" align="left">
            In anatomical terminology, "right" and "left" are from the perspective of
            the patient, so to the observer they appear backwards.
          </Typography>
        </Grid>

      </Grid>
    </div>
  );
}

/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';
import React from 'react';

export default function UnderstandingIntroduction() {
  return (
    <div>
      <Typography variant="h5" sx={{ marginTop: '1%', fontWeight: 'bold' }}>What is an ECG?</Typography>
      <Grid container justify="center">
        <Grid item xs={6}>
          Video of ECG here
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">Introductory Overview</Typography>
          <Typography variant="body1" align="left">
            An electrocardiogram is referred to as an ECG. It is used to discover and pinpoint
            disease by recording the electrical activity of the heart from various perspectives.
            To capture electrical activity, electrodes are inserted on various regions of a
            patient's limbs and chest.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

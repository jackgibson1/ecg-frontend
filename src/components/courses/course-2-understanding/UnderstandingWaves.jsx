/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import WaveGif from '../../../assets/images/courses/course-2-understanding/waves.gif';

export default function UnderstandingWaves() {
  return (
    <div>
      <Typography variant="h5" sx={{ marginTop: '1%', fontWeight: 'bold' }}>What is an ECG wave?</Typography>
      <Grid container justify="center">
        <Grid item xs={6}>
          <figure>
            <img src={WaveGif} style={{ height: '300px', width: '500px', border: '5px solid #FF0000', borderRadius: 20, marginTop: '5%' }} alt="normalsr" />
            <figcaption>The electrical energy travelling through the heart.</figcaption>
          </figure>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" sx={{ marginTop: '4%' }}>How are these waves produced?</Typography>
          <Typography variant="body1" align="left">
            The ECG measures the electrical activity of the heart. This electrical activity
            controls the heart beat. Special cells called pacemakers release bursts of
            electrical energy which travel through the heart muscle, causing it to contract.
            When the muscle contracts, blood is pumped through the heart.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '2%' }} align="left">
            As the heart muscle contracts and relaxes, the electrocardiogram translates
            the heart's electrical activity into line tracings on paper. The spikes and
            dips in the line tracings are called waves.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '2%' }} align="left">
            The following sections will explain the various waves assoicated with a
            typical ECG tracing.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

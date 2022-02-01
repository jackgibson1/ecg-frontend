/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import WaveformImage from '../../../assets/images/courses/course-2-understanding/waveform2.png';

export default function UnderstandingWaveformTwo() {
  return (
    <div>
      <Typography variant="h5" sx={{ marginTop: '1%', marginBottom: '0.5%', fontWeight: 'bold' }}>The Shape Of The ECG Waveform (2/2)</Typography>
      <Grid container justify="center">
        <Grid item xs={6} sx={{ marginTop: '10px', paddingLeft: '2%' }} align="left">
          <Typography variant="h6" sx={{ fontWeight: 'bold' }} align="left">Does the height of the wave mean anything?</Typography>
          <ul style={{ marginBottom: '3%' }}>
            <li style={{ marginBottom: '2%' }}>
              The height of the deflection represents the amount of electrical activity
              flowing in that direction (i.e. the higher the deflection, the greater the
              amount of electrical activity flowing towards the lead).
            </li>
            <li style={{ marginBottom: '2%' }}>
              The lead with the most positive deflection is most aligned with the
              direction the heart’s electrical activity is travelling.
            </li>
            <li style={{ marginBottom: '2%' }}>
              If the R wave is greater than the S wave it suggests depolarisation
              is moving towards that lead.
            </li>
            <li style={{ marginBottom: '2%' }}>
              If the S wave is greater than the R waves it suggests depolarisation
              is moving away from that lead.
            </li>
            <li style={{ marginBottom: '2%' }}>
              If the R and S waves are of equal size it means depolarisation is
              travelling at exactly 90° to that lead.
            </li>
            <li>
              The diagram to the right shows the shape of the wave depending on
              the direction of the electrical activty.
            </li>
          </ul>
        </Grid>
        <Grid item xs={6} sx={{ marginTop: '10px' }}>
          <figure style={{ display: 'inline-block', textAlign: 'left' }}>
            <img src={WaveformImage} style={{ height: '250px', width: '400px', border: '2px solid #FF0000', borderRadius: 10, marginBottom: '2%' }} alt="normalsr" />
            <figcaption>
              As a depolarization wavefront (or mean electrical vector) moves toward a positive
              electrode, it creates a positive deflection on the ECG in the corresponding lead.
              When a depolarization wavefront (or mean electrical vector) moves away from a
              positive electrode, it creates a negative deflection on the ECG in the corresponding
              lead. When a depolarization wavefront (or mean electrical vector) moves perpendicular
              to a positive electrode, it creates an equiphasic (or isoelectric) complex on the ECG.
            </figcaption>
          </figure>
        </Grid>
      </Grid>
    </div>
  );
}

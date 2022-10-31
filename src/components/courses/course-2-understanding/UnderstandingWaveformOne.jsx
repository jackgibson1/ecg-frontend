import { Grid, Typography } from '@mui/material';
import React from 'react';
import WaveformImage from '../../../assets/images/courses/course-2-understanding/waveform1.jpeg';
import { styles } from '../styles';

export default function UnderstandingWaveformOne() {
  return (
    <div>
      <Typography variant="h5" sx={styles.sectionTitle}>The Shape Of The ECG Waveform (1/2)</Typography>
      <Grid container justify="center">
        <Grid item xs={6} sx={styles.understandingWaveformOne.gridLeft} align="left">
          <Typography variant="h6" sx={{ fontWeight: 'bold' }} align="left">Explaining the graph shapes:</Typography>
          <ul>
            <li style={{ marginBottom: '2%' }}>
              Each individual lead’s ECG recording is slightly <b>different in shape.</b>
              This is because each lead is recording the electrical activity of the
              heart from a different direction (a.k.a viewpoint).
            </li>
            <li style={{ marginBottom: '2%' }}>
              When the electrical activity within the heart travels towards a lead you get
              a <b>positive deflection.</b>
            </li>
            <li style={{ marginBottom: '2%' }}>
              When the electrical activity within the heart travels away from a lead you get
              a <b>negative deflection.</b>
            </li>
            <li style={{ marginBottom: '2%' }}>
              In reality, electrical activity in the heart flows in many directions
              {' '}
              <b>simultaneously.</b>
            </li>
            <li style={{ marginBottom: '2%' }}>
              Each deflection (a.k.a. wave) on the ECG represents the <b>average direction</b> of
              electrical travel (which is calculated using mathematical formulae by the
              ECG machine).
            </li>
            <li>
              The diagram to the right puts the above into practice. Try and make sure you
              understand it.
            </li>
          </ul>
        </Grid>
        <Grid item xs={6} sx={{ marginTop: '10px' }}>
          <figure>
            <img src={WaveformImage} style={styles.understandingWaveformOne.image} alt="normalsr" />
            <figcaption>
              Since the direction of atrial depolarization is almost exactly parallel to the axis
              of lead II (which is from RA to LL), a positive-going deflection (P wave) would
              result in that lead.
            </figcaption>
          </figure>
        </Grid>
      </Grid>
    </div>
  );
}

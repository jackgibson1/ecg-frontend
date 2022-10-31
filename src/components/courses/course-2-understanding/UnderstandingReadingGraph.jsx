/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import GraphImage from '../../../assets/images/courses/course-2-understanding/graphpaper.png';
import NormalECGImage from '../../../assets/images/courses/course-2-understanding/normalecg.jpeg';
import { styles } from '../styles';

export default function UnderstandingReadingGraph() {
  return (
    <div>
      <Typography variant="h5" sx={styles.sectionTitle}>How To Read ECG Paper</Typography>
      <Grid container justify="center">
        <Grid item xs={6}>
          <figure>
            <img src={GraphImage} style={styles.understandingReading.imageLeft} alt="ecg graph paper" />
            <figcaption>
              The ECG is recorded on graph paper divided into millimeter squares, with darker lines
              marking 5-mm squares. Time is measured on the horizontal (X) axis. With a paper speed
              of 25 mm/sec, each small (1-mm) box side equals 0.04 sec and each larger (5-mm) box
              side equals 0.2 sec. A 3-sec interval is denoted. The amplitude of a deflection or
              wave is measured in millimeters on the vertical (Y) axis.
              {' '}
            </figcaption>
          </figure>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" align="left" sx={{ marginTop: '2%' }}>Key Points</Typography>
          <ul style={{ textAlign: 'left' }}>
            <li style={{ marginTop: '10px' }}>Each small square represents 0.04 seconds</li>
            <li style={{ marginTop: '10px' }}>Each large square represents 0.2 seconds</li>
            <li style={{ marginTop: '10px' }}>Each small square represents 0.04 seconds</li>
            <li style={{ marginTop: '10px' }}>5 large squares = 1 second</li>
          </ul>
          <Typography variant="h6" align="left" sx={{ marginTop: '1%' }}>A Normal ECG:</Typography>
          <img src={NormalECGImage} style={styles.understandingReading.imageRight} alt="ecg graph paper" />
        </Grid>
      </Grid>
    </div>
  );
}

/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import LeftAxisImage from '../../../assets/images/courses/course-2-understanding/leftaxis.jpeg';
import { styles } from '../styles';

export default function UnderstandingLeftAxis() {
  return (
    <div>
      <Typography variant="h5" sx={styles.sectionTitle}>Left Axis Deviation</Typography>
      <Grid container justify="center">
        <Grid item xs={12} sx={{ paddingLeft: '2%' }} align="left">
          <Typography variant="h6" align="left">
            <u>What is left axis deviation?</u>
          </Typography>
          <ul>
            <li>
              Left axis deviation (LAD) involves the direction of depolarisation being distorted
              to the left (between -30° and -90°).
            </li>
            <li>
              This results in the deflection of lead III becoming negative (this is only
              considered significant if the deflection of lead II also becomes negative).
            </li>
            <li>
              LAD is usually caused by conduction abnormalities.
            </li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          <figure style={styles.understandingLeft.figure}>
            <img src={LeftAxisImage} style={styles.understandingLeft.image} alt="normalsr" />
            <figcaption>
              Diagram showing left axis deviation.
            </figcaption>
          </figure>
        </Grid>
      </Grid>
    </div>
  );
}

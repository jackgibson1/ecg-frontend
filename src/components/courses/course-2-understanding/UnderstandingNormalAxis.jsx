/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import NormalAxisImage from '../../../assets/images/courses/course-2-understanding/normalaxis1.jpeg';
import AllAxisImage from '../../../assets/images/courses/course-2-understanding/allaxis.png';
import { styles } from '../styles';

export default function UnderstandingNormalAxis() {
  return (
    <div>
      <Typography variant="h5" sx={styles.sectionTitle}>Normal Cardiac Axis</Typography>
      <Grid container justify="center">
        <Grid item xs={12} sx={{ paddingLeft: '2%' }} align="left">
          <Typography variant="h6" align="left">
            <u>Understanding The Cardiac Axis</u>
          </Typography>
          <ul>
            <li>
              In healthy individuals, you would expect the cardiac axis to lie between -30°and +90º.
            </li>
            <li>
              The overall direction of electrical activity is therefore towards leads I, II and III
              (the yellow arrow in the left diagramnormbelow)
            </li>
            <li>
              As a result, you see a positive deflection in all these leads, with lead II showing
              the most positive deflection as it is the most closely aligned to the overall
              direction of electrical spread.
            </li>
            <li>
              You would expect to see the most negative deflection in aVR.
            </li>
            <li>
              This is due to aVR providing a viewpoint of the heart from the opposite direction.
            </li>
          </ul>
        </Grid>
        <Grid item xs={6}>
          <figure style={styles.understandingNormal.figure}>
            <img src={NormalAxisImage} style={styles.understandingNormal.image} alt="normalsr" />
            <figcaption>
              Diagram highlighting normal cardiac axis.
            </figcaption>
          </figure>
        </Grid>
        <Grid item xs={6}>
          <figure style={styles.understandingNormal.figure}>
            <img src={AllAxisImage} style={styles.understandingNormal.image} alt="normalsr" />
            <figcaption>
              All cardiac axes.
            </figcaption>
          </figure>
        </Grid>
      </Grid>
    </div>
  );
}

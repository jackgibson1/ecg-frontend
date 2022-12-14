/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import NormalSR from '../../../assets/images/courses/course-2-understanding/normalsr.gif';
import { styles } from '../styles';

export default function UnderstandingIntroduction() {
  return (
    <div>
      <Typography variant="h5" sx={styles.sectionTitle}>What is an ECG?</Typography>
      <Grid container justify="center">
        <Grid item xs={6}>
          <figure>
            <img src={NormalSR} style={styles.understandingIntroduction.image} alt="normalsr" />
            <figcaption>ECG - Normal Sinus Rythm</figcaption>
          </figure>
        </Grid>
        <Grid item xs={6} sx={{ paddingRight: '2%' }}>
          <Typography variant="h6" sx={{ marginTop: '7%' }}>Introductory Overview</Typography>
          <Typography variant="body1" align="left">
            An electrocardiogram is referred to as an ECG. It is used to discover and pinpoint
            disease by recording the electrical activity of the heart from various perspectives.
            To capture electrical activity, electrodes are inserted on various regions of a
            patient's limbs and chest.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '2%' }} align="left">
            The diagram to the left shows an example ECG tracing (normal sinus rythm).
            Normal sinus rhythm is defined as the rhythm of a healthy heart. It means
            the electrical pulse from your sinus node is being properly transmitted
            throughout the heart muscle.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '2%' }} align="left">
            In adults, normal sinus rhythm usually accompanies a heart rate of 60 to
            100 bpm. However, it’s possible for sinus rhythm to be faster or slower
            than this and still be considered normal. You will learn more about this
            in later stages of the course.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

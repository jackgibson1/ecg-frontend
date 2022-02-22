/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import pqrstRepeat from '../../../assets/images/courses/course-2-understanding/pqrst-repeat.png';

export default function UnderstandingThreeSegments() {
  return (
    <div>
      <Typography variant="h5" sx={{ marginTop: '2%', fontWeight: 'bold', textDecoration: 'underline' }}>The Three Basic Segments</Typography>
      <Grid container justify="left">
        <Grid item xs={12} sx={{ marginLeft: '2%' }}>
          <Typography variant="body1" align="left" sx={{ marginTop: '2%' }}>
            <b>1. PR segment:</b>
            {' '}
            end of the P wave to beginning of
            the QRS complex. Atrial repolarization begins
            in this segment. (Atrial repolarization continues
            during the QRS and ends during the ST segment.
          </Typography>
          <Typography variant="body1" align="left" sx={{ marginTop: '2%' }}>
            <b>2. ST segment:</b>
            {' '}
            end of the QRS complex to beginning
            of the following T wave. The ST-T
            complex represents ventricular repolarization.
            The segment is also considered as a separate
            waveform. ST elevation and/or
            depression are major signs of ischemia.
          </Typography>
          <Typography variant="body1" align="left" sx={{ marginTop: '2%' }}>
            <b>3. TP segment:</b>
            {' '}
            end of the T wave to beginning of
            the P wave. This interval, which represents the
            electrical resting state, is important because it is
            traditionally used as the baseline reference from
            which to assess PR and ST deviations in conditions
            such as acute pericarditis and acute myocardial ischemia, respectively.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <figure>
            <img src={pqrstRepeat} style={{ height: '150px', width: '900px', borderRadius: 10, marginTop: '0%' }} alt="normalsr" />
            <figcaption>
              The basic cardiac cycle (P–QRS–T) normally repeats itself again and again.
            </figcaption>
          </figure>
        </Grid>
      </Grid>
    </div>
  );
}

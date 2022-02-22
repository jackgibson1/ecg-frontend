/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';
import React from 'react';

export default function UnderstandingFourIntervals() {
  return (
    <div>
      <Typography variant="h5" sx={{ marginTop: '2%', fontWeight: 'bold', textDecoration: 'underline' }}>The Four Sets Of Intervals</Typography>
      <Grid container justify="left">
        <Grid item xs={12} sx={{ marginLeft: '2%' }}>
          <Typography variant="body1" align="left" sx={{ marginTop: '2%' }}>
            In addition to these segments, four sets of intervals
            are routinely measured: PR, QRS, QT/QTc, and PP/
            RR. The latter set (PP/RR) represents the inverse
            of the ventricular/atrial heart rate(s):
          </Typography>
          <Typography variant="body1" align="left" sx={{ marginTop: '1%', paddingLeft: '2%' }}>
            1. The PR interval is measured from the beginning
            of the P wave to the beginning of the QRS
            complex.
          </Typography>
          <Typography variant="body1" align="left" sx={{ marginTop: '1%', paddingLeft: '2%' }}>
            2. The QRS interval (duration) is measured from the
            beginning to the end of the same QRS.
          </Typography>
          <Typography variant="body1" align="left" sx={{ marginTop: '1%', paddingLeft: '2%' }}>
            3. The QT interval is measured from the beginning
            of the QRS to the end of the T wave. When this
            interval is corrected (adjusted for the heart rate),
            the designation QTc is used,
          </Typography>
          <Typography variant="body1" align="left" sx={{ marginTop: '1%', paddingLeft: '2%' }}>
            4. The RR (QRS–QRS) interval is measured from one
            point (sometimes called the R-point) on a given
            QRS complex to the corresponding point on the
            next. The instantaneous heart rate (beats per min) = 60/RR
            interval when the RR is measured in
            seconds (sec). Normally, the PP interval is the
            same as the RR interval, especially in “normal
            sinus rhythm.”
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

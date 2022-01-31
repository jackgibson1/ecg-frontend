/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import mainComponents from '../../../assets/images/courses/course-2-understanding/majorecgcomponents.png';

export default function UnderstandingSegmentsVsIntervals() {
  return (
    <div>
      <Typography variant="h5" sx={{ marginTop: '1%', fontWeight: 'bold' }}>ECG Segments Vs ECG Intervals</Typography>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography variant="body1" align="left" sx={{ marginTop: '2%', marginBottom: '1%', paddingLeft: '2%' }}>
            ECG interpretation also requires careful assessment
            of the time within and between various waveforms.
            Segments are defined as the portions of the ECG
            bracketed by the end of one waveform and the
            beginning of another. Intervals are the portions of
            the ECG that include at least one entire
            waveform. The following two sections explain the differences.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <img src={mainComponents} style={{ height: '250px', width: '900px', borderRadius: 10, marginTop: '0%' }} alt="normalsr" />
          <Typography variant="body1" align="left" sx={{ marginTop: '0%', paddingLeft: '2%' }}>
            The above diagram shows the major components of the ECG graph. These can be grouped
            into 5 waveforms (P, QRS, ST, T, and U), 4 intervals (RR, PR, QRS, and QT) and 3
            segments (PR, ST, and TP). Note that the ST can be considered as both a waveform
            and a segment. The RR interval is the same as the QRS–QRS interval. The TP segment
            is used as the isoelectric baseline, against which deviations in the PR segment
            (e.g., in acute pericarditis) and ST segment (e.g., in ischemia) are measured.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

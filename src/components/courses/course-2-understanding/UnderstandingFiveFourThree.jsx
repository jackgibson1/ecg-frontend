/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import FiveFourThree from '../../../assets/images/courses/course-2-understanding/fivefourthree.jpeg';
import { styles } from '../styles';

export default function UnderstandingFiveFourThree() {
  return (
    <div>
      <Typography variant="h5" sx={styles.sectionTitle}>5–4–3 Rule for ECG Components</Typography>
      <Grid container justify="left">
        <Grid item xs={6} sx={{ paddingLeft: '2%' }}>
          <Typography variant="h6" align="left" sx={styles.understandingFiveFourThree.title}>What does an ECG graph comprise of?</Typography>
          <Typography variant="body1" align="left" sx={{ marginTop: '2%' }}>
            To summarise, the clinical ECG graph comprises
            waveforms, intervals, and segments designated as follows:
          </Typography>
          <Typography variant="body1" align="left" sx={styles.understandingFiveFourThree.paraList}>
            5 waveforms (P, QRS, ST, T, and U)
          </Typography>
          <Typography variant="body1" align="left" sx={styles.understandingFiveFourThree.paraList}>
            4 sets of intervals (PR, QRS, QT/QTc, and RR/PP)
          </Typography>
          <Typography variant="body1" align="left" sx={styles.understandingFiveFourThree.paraList}>
            3 segments (PR, ST, and TP)
          </Typography>
          <Typography variant="body1" align="left" sx={{ marginTop: '2%' }}>
            Two brief notes to avoid possible semantic confusion:
            (1) The ST is considered both a waveform and a
            segment. (2) Technically, the duration of the P wave
            is also an interval.
          </Typography>
          <Typography variant="body1" align="left" sx={{ marginTop: '2%' }}>
            However, to avoid confusion with the PR, the
            interval subtending the P wave is usually referred
            to as the P wave width or duration, rather than the
            P wave interval. The P duration (interval) is also
            measured in units of msec or sec and is most
            important in the diagnosis of left atrial abnormality.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <figure>
            <img src={FiveFourThree} style={styles.understandingFiveFourThree.image} alt="Graphical representation of an ECG Diagram" />
            <figcaption>The components of an ECG</figcaption>
          </figure>
        </Grid>
      </Grid>
    </div>
  );
}

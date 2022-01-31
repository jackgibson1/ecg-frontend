/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import ecgLead from '../../../assets/images/courses/course-2-understanding/ecglead.jpeg';
import ecgElectrodes from '../../../assets/images/courses/course-2-understanding/ecgelectrodes.jpeg';

const styles = {
  figure: { display: 'inline-block', textAlign: 'left' },
  image: { height: '250px', width: '500px', border: '5px solid #FF0000', borderRadius: 10, marginTop: '1%' },
};

export default function UnderstandingTwelveLeads() {
  return (
    <div>
      <Typography variant="h5" sx={{ marginTop: '1%', fontWeight: 'bold' }}>How The 12-Lead ECG Works (1)</Typography>
      <Grid container justify="left">
        <Grid item xs={12} sx={{ paddingLeft: '2%' }}>
          <Typography variant="h5" align="left" sx={{ fontWeight: 'bold' }}>Electrodes Vs Leads</Typography>
          <Typography variant="body1" align="left">
            It is important to understand the difference between an ECG electrode and an ECG lead:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <figure style={styles.figure}>
            <img src={ecgElectrodes} style={styles.image} alt="normalsr" />
            <figcaption>
              An ECG
              {' '}
              <u><b>electrode</b></u>
              {' '}
              is a conductive pad that is attached to the skin
              to record electrical activity.
            </figcaption>
          </figure>
        </Grid>
        <Grid item xs={6}>
          <figure style={styles.figure}>
            <img src={ecgLead} style={styles.image} alt="normalsr" />
            <figcaption>
              An ECG
              {' '}
              <u><b>lead</b></u>
              {' '}
              is a graphical representation of the heart’s electrical
              activity which is calculated by analysing data from several ECG electrodes.
            </figcaption>
          </figure>
        </Grid>
        <Grid item xs={12} sx={{ paddingLeft: '6%' }}>
          <Typography variant="body1" align="left">
            - A 12-lead ECG records 12 leads, producing 12 separate graphs on a piece of
            ECG paper (shown above in the right diagram).
          </Typography>
          <Typography variant="body1" align="left" sx={{ marginTop: '1%' }}>
            - Only 10 physical electrodes are attached to the patient, to generate the 12 leads.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

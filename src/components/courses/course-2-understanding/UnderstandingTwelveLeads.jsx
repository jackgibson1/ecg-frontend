/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import ecgLead from '../../../assets/images/courses/course-2-understanding/ecglead.jpeg';
import ecgElectrodes from '../../../assets/images/courses/course-2-understanding/ecgelectrodes.jpeg';

export default function UnderstandingTwelveLeads() {
  return (
    <div>
      <Typography variant="h5" sx={{ marginTop: '1%', fontWeight: 'bold' }}>How The 12-Lead ECG Works</Typography>
      <Grid container justify="left">
        <Grid item xs={12} sx={{ paddingLeft: '2%' }}>
          <Typography variant="body1" align="left" sx={{ marginTop: '2%' }}>
            It is important to understand the difference between an ECG electrode and an ECG lead:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <figure>
            <img src={ecgElectrodes} style={{ height: '250px', width: '500px', borderRadius: 10, marginTop: '1%' }} alt="normalsr" />
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
          <figure>
            <img src={ecgLead} style={{ height: '250px', width: '500px', borderRadius: 10, marginTop: '1%' }} alt="normalsr" />
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
            - A 12-lead ECG records 12 leads, producing 12 separate graphs on a piece of ECG paper.
          </Typography>
          <Typography variant="body1" align="left" sx={{ marginTop: '1%' }}>
            - Only 10 physical electrodes are attached to the patient, to generate the 12 leads.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

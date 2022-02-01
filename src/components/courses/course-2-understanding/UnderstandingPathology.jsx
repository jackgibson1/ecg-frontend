/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import PathologyImage from '../../../assets/images/courses/course-2-understanding/pathology.jpeg';

export default function UnderstandingPathology() {
  return (
    <div>
      <Typography variant="h5" sx={{ marginTop: '1%', marginBottom: '0.5%', fontWeight: 'bold' }}>Localising Pathology On The ECG</Typography>
      <Grid container justify="center">
        <Grid item xs={6} sx={{ marginTop: '10px', paddingLeft: '2%' }} align="left">
          <Typography variant="body" sx={{ fontWeight: 'bold' }} align="left">
            It’s important to understand which leads represent which anatomical territory of
            the heart, as this allows you to localise pathology to a particular heart region.
          </Typography>
          <Typography variant="body" sx={{ fontWeight: 'bold' }} align="left">
            For example, if there is ST elevation in leads V3 and V4 it suggests an anterior
            myocardial infarction (MI). You can then combine this with some anatomical knowledge
            of the heart’s blood supply, to allow you to work out which artery is likely to be
            affected (e.g. left anterior descending artery).
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: '10px' }}>
          <figure style={{ display: 'inline-block', textAlign: 'left' }}>
            <img src={PathologyImage} style={{ height: '250px', width: '400px', border: '2px solid #FF0000', borderRadius: 10, marginBottom: '2%' }} alt="normalsr" />
            <figcaption>
              Viewws of the heart and their leads.
            </figcaption>
          </figure>
        </Grid>
      </Grid>
    </div>
  );
}

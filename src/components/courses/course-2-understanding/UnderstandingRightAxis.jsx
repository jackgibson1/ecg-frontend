/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import RightAxisImage from '../../../assets/images/courses/course-2-understanding/rightaxis.jpeg';

export default function UnderstandingRightAxis() {
  return (
    <div>
      <Typography variant="h5" sx={{ marginTop: '1%', fontWeight: 'bold' }}>Right Axis Deviation</Typography>
      <Grid container justify="center">
        <Grid item xs={12} sx={{ paddingLeft: '2%' }} align="left">
          <Typography variant="h6" align="left">
            <u>What is right axis deviation?</u>
          </Typography>
          <ul>
            <li>
              Right axis deviation (RAD) involves the direction of depolarisation being
              distorted to the right (between +90º and +180º).
            </li>
            <li>
              The most common cause of RAD is right ventricular hypertrophy. Extra right
              ventricular tissue results in a stronger electrical signal being generated
              by the right side of the heart. This causes the deflection in lead I to become
              negative and the deflection in lead aVF/III to be more positive.
            </li>
            <li>
              RAD is commonly associated with conditions such as pulmonary hypertension,
              as they cause right ventricular hypertrophy. RAD can, however, be a normal
              finding in very tall individuals.
            </li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          <figure style={{ display: 'inline-block', textAlign: 'left' }}>
            <img src={RightAxisImage} style={{ height: '230px', width: '400px', border: '2px solid #FF0000', borderRadius: 10 }} alt="normalsr" />
            <figcaption>
              Diagram showing right axis deviation.
            </figcaption>
          </figure>
        </Grid>
      </Grid>
    </div>
  );
}

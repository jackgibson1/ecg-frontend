/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import CardiacAxisImage1 from '../../../assets/images/courses/course-2-understanding/cardiacaxis1.png';
import CardiacAxisImage2 from '../../../assets/images/courses/course-2-understanding/cardiacaxis2.jpeg';

export default function UnderstandingCardiacAxis() {
  return (
    <div>
      <Typography variant="h5" sx={{ marginTop: '1%', fontWeight: 'bold' }}>Cardiac Axis</Typography>
      <Grid container justify="center">
        <Grid item xs={12} sx={{ paddingLeft: '2%' }} align="left">
          <Typography variant="h6" align="left">
            <u>Understanding The Cardiac Axis</u>
          </Typography>
          <ul>
            <li>
              In healthy individuals, the electrical activity of the heart begins at the sinoatrial
              node then spreads to the atrioventricular (AV) node. It then spreads down the bundle
              of His and then Purkinje fibres to cause ventricular contraction. This is shown on the
              left diagram below.
            </li>
            <li>
              Whenever the direction of electrical activity moves towards a lead, a positive
              deflection is produced.
            </li>
            <li>
              Whenever the direction of electrical activity moves away from a lead a negative
              deflection is produced.
            </li>
            <li>
              The cardiac axis gives us an idea of the overall direction of electrical activity.
              This is shown on the right diagram below.
            </li>
          </ul>
        </Grid>
        <Grid item xs={6}>
          <figure style={{ display: 'inline-block', textAlign: 'left' }}>
            <img src={CardiacAxisImage1} style={{ height: '250px', width: '400px', border: '2px solid #FF0000', borderRadius: 10 }} alt="normalsr" />
            <figcaption>
              The electrical activity travelling through the heart.
            </figcaption>
          </figure>
        </Grid>
        <Grid item xs={6}>
          <figure style={{ display: 'inline-block', textAlign: 'left' }}>
            <img src={CardiacAxisImage2} style={{ height: '250px', width: '400px', border: '2px solid #FF0000', borderRadius: 10 }} alt="normalsr" />
            <figcaption>
              Cardiac axis diagram.
            </figcaption>
          </figure>
        </Grid>
      </Grid>
    </div>
  );
}

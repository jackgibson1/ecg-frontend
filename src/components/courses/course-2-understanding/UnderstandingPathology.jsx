/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import PathologyImage from '../../../assets/images/courses/course-2-understanding/pathology.jpeg';
import PathologyImage2 from '../../../assets/images/courses/course-2-understanding/pathology2.png';
import { styles } from '../styles';

export default function UnderstandingPathology() {
  return (
    <div>
      <Typography variant="h5" sx={styles.sectionTitle}>Localising Pathology On The ECG</Typography>
      <Grid container justify="center">
        <Grid item xs={12} sx={styles.understandingPathology.gridLeft} align="left">
          <Typography variant="h6" align="left">
            Which Leads Represent Which Area Of The Heart?
          </Typography>
          <ul>
            <li>
              It’s important to understand which leads represent which anatomical territory of
              the heart, as this allows you to localise pathology to a particular heart region.
            </li>
            <li>
              For example, if there is ST elevation in leads V3 and V4 it suggests an anterior
              myocardial infarction (MI). You can then combine this with some anatomical knowledge
              of the heart’s blood supply, to allow you to work out which artery is likely to be
              affected (e.g. left anterior descending artery).
            </li>
          </ul>
        </Grid>
        <Grid item xs={6}>
          <figure style={styles.understandingPathology.figure}>
            <img src={PathologyImage} style={styles.understandingPathology.image} alt="Table showing views of heart and their leads." />
            <figcaption>
              Views of the heart and their leads.
            </figcaption>
          </figure>
        </Grid>
        <Grid item xs={6}>
          <figure style={styles.understandingPathology.figure}>
            <img src={PathologyImage2} style={styles.understandingPathology.image} alt="Visual illustration of heart plane." />
            <figcaption>
              Diagram illustrating how all 12 leads are generated.
            </figcaption>
          </figure>
        </Grid>
      </Grid>
    </div>
  );
}

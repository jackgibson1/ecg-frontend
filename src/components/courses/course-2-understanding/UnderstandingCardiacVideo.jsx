/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';
import React from 'react';
import { styles } from '../styles';

export default function UnderstandingCardiacVideo() {
  return (
    <div>
      <Typography variant="h5" sx={styles.sectionTitle}>Cardiac Axis Summary</Typography>
      <Typography variant="body" sx={{ fontWeight: 'bold' }}>This short 3 minute video summarises all our learnings on cardiac axis:</Typography>
      <Grid container justify="center">
        <Grid item xs={12} sx={{ marginTop: '10px' }}>
          <iframe
            width="700"
            height="400"
            src="https://www.youtube.com/embed/y-pyefQdNZM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

        </Grid>
      </Grid>
    </div>
  );
}

import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import animatedImage from '../assets/images/animatedGif1.gif';

function HomeSection1() {
  return (
    <>
      <Grid item xs={12} md={6} lg={6} spacing={2}>
        <Box sx={{ paddingLeft: '5%', paddingRight: '5%', paddingTop: '10%' }}>
          <Typography variant="h2" component="div">
            <b>
              Learn
              {' '}
              <br />
              {' '}
              interactively
            </b>
          </Typography>
          <Typography variant="h5">
            Replace lecture videos with hands-on, interactive practice.
            <br />
            Learn electrocardiography the right way.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={6} spacing={1}>
        <Box sx={{ paddingLeft: '5%', paddingRight: '5%', paddingTop: '10%' }}>
          <img src={animatedImage} alt="animated heart" />
        </Box>
      </Grid>
    </>
  );
}
export default HomeSection1;

import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import animatedImage from '../../assets/images/home/animatedHeartResized.gif';
import animatedImageLg from '../../assets/images/home/animatedGif1.gif';

function HomeSection1() {
  return (
    <Grid id="middle" container justify="center">
      <Grid item xs={12} md={6} lg={6}>
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
      <Grid item xs={12} md={6} lg={6}>
        <Box sx={{ paddingLeft: '5%', paddingRight: '0%', paddingTop: '10%' }}>
          <picture>
            <source media="(max-width: 400px)" srcSet={animatedImage} />
            <source media="(max-width: 1200px)" srcSet={animatedImageLg} />
            <img src={animatedImageLg} alt="alt text for pic" />
          </picture>
        </Box>
      </Grid>
    </Grid>
  );
}
export default HomeSection1;

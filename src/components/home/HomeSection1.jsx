/* eslint-disable react/prop-types */
import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import animatedPQRST from '../../assets/images/courses/course-2-understanding/waves.gif';

function HomeSection1(props) {
  const { scrollRef } = props;
  return (
    <Grid ref={scrollRef} container>
      <Grid item xs={12} lg={7}>
        <Box sx={{ marginLeft: '5%', marginTop: '10%' }}>
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
      <Grid item xs={12} lg={5}>
        <Box sx={{ paddingTop: '10%' }}>
          <img src={animatedPQRST} alt="Animated heart showing PQRST wave" height="300px" width="500px" />
        </Box>
      </Grid>
    </Grid>
  );
}
export default HomeSection1;

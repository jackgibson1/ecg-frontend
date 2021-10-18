import React from 'react';
import { Typography, Grid, Box } from '@mui/material';

function HomeSection1() {
  return (
    <>
      <Grid item xs={12}>
        <Box sx={{ padding: '2%' }}>
          <Typography variant="h2" component="div">
            <b>Learn interactively</b>
          </Typography>
          <Typography varaint="body1">
            Replace lecture videos with hands-on, interactive practice.
            Learn electrocardiography the right way.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <h6>image</h6>
      </Grid>
    </>
  );
}
export default HomeSection1;

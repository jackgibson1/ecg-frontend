/* eslint-disable react/prop-types */
import React from 'react';
import { Typography, Grid, Box, Button } from '@mui/material';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import animatedPQRST from '../../assets/images/courses/course-2-understanding/waves.gif';

function HomeSection1(props) {
  const { scrollRef, history } = props;
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
            Replace lecture videos with hands-on, interactive courses.
            <br />
            Learn electrocardiography the right way.
          </Typography>
          <Button
            sx={{ color: '#EE3233', boxShadow: 10, marginTop: '2%', fontWeight: 'bold', borderRadius: 3, backdropFilter: 'blur(20px)', width: '400px' }}
            size="large"
            variant="outlined"
            onClick={() => history.push('/courses')}
            endIcon={<CalendarViewMonthIcon />}
          >
            View All Courses
          </Button>
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

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import DelayAppearanceButton from './DelayAppearanceButton';
import CourseRating from './CourseRating';
import authService from '../../../services/auth.service';

function CourseCompleted(props) {
  const { course } = props;
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h3" sx={{ marginTop: '2%' }}>{`Congratulations ${authService.getCurrentUser().username}!`}</Typography>
      </Grid>
      <Grid item xs={6} sx={{ marginTop: '2%', textAlign: 'left', paddingLeft: '5%' }}>
        <Box>
          <Typography style={{ textDecoration: 'underline' }} variant="h5">Details</Typography>
          <Typography variant="body1" sx={{ marginTop: '1%' }}>{`The following course is now completed: ${course.title}`}</Typography>
          <Typography variant="body1" sx={{ marginTop: '1%' }}>Please rate how much you enjoyed this course:</Typography>
          <CourseRating readOnly={false} />
        </Box>
      </Grid>
      <Grid item xs={6} sx={{ marginTop: '2%', textAlign: 'left' }}>
        <Box>
          <Typography style={{ textDecoration: 'underline' }} variant="h5">References</Typography>
          {course.references.map((refer) => (
            <Typography varaint="body1" sx={{ marginTop: '1%' }}>{refer}</Typography>
          ))}
        </Box>
      </Grid>
      <Grid item xs={12}>
        <DelayAppearanceButton courseId={course.id} />
      </Grid>
    </Grid>
  );
}

export default CourseCompleted;

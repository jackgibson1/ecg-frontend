/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Typography, Grid } from '@mui/material';
import DelayAppearanceButton from './DelayAppearanceButton';
import authService from '../../../services/auth.service';
import CreditEarnedModal from './CreditEarnedModal';

function CourseCompleted(props) {
  const { course } = props;
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Typography variant="h3" sx={{ marginTop: '5%' }}>{`Congratulations ${authService.getCurrentUser().username}!`}</Typography>
        <Typography variant="h6" sx={{ marginTop: '2%' }}>You have successufully completed the following course:</Typography>
        <Typography variant="h6" sx={{ marginTop: '2%' }}>{course.title}</Typography>
        <DelayAppearanceButton courseId={course.id} />
        <CreditEarnedModal />
      </Grid>
    </Grid>
  );
}

export default CourseCompleted;

/* eslint-disable no-undef */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
// import quizDetails from './quizDetails';
import authService from '../../../services/auth.service';
import QuizCard from './quizCard';
import quizDetails from './quizDetails';
import QuizBackgroundImage from '../../../assets/images/quizBackground.jpg';

function Quizzes(props) {
  if (!authService.isLoggedIn()) {
    // eslint-disable-next-line react/prop-types
    return <Redirect to={{ pathname: '/login', state: { from: props.location, alert: true } }} />;
  }

  return (
    <Box sx={{
      paddingTop: '2%', paddingLeft: '2%', paddingBottom: '2%', backgroundImage: `url(${QuizBackgroundImage})`, backgroundSize: 'cover',
    }}
    >
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {quizDetails.map((quiz) => (
          <Grid item xs={2} sm={4} md={4} key={Math.random()}>
            <QuizCard quiz={quiz} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Quizzes;

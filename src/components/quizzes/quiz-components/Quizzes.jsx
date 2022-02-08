/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';
import { Box, Grid } from '@mui/material';
import QuizCard from './quizCard';
import quizDetails from './quizDetails';
import QuizBackgroundImage from '../../../assets/images/quizzes/quizBackground.jpg';

function Quizzes(props) {
  const [cameFromCourse, setCameFromCourse] = React.useState({ cameFrom: false });

  React.useEffect(() => {
    if (typeof props.location.state !== 'undefined'
          && typeof props.location.state.cameFromCourse !== 'undefined') {
      setCameFromCourse(props.location.state);
      props.history.replace();
    }
  }, []);
  return (
    <Box sx={{
      paddingTop: '2%', paddingLeft: '2%', paddingBottom: '2%', backgroundImage: `url(${QuizBackgroundImage})`, backgroundSize: 'cover',
    }}
    >
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {quizDetails.map((quiz) => (
          <Grid item xs={2} sm={4} md={4} key={Math.random()} style={{ textAlign: 'center' }}>
            <QuizCard
              quiz={quiz}
              cameFromCourse={cameFromCourse.cameFromCourse && quiz.id === cameFromCourse.quizId}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Quizzes;

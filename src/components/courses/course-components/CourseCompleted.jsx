/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Typography, Grid, Box, Button } from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';
import CourseCompleteButton from './CourseCompleteButton';
import CourseRatingUser from './CourseRatingUser';
import authService from '../../../services/auth.service';
import { styles } from '../styles';

function CourseCompleted(props) {
  const { course, history } = props;
  const [query, setQuery] = useState('idle');
  const [userRating, setUserRating] = useState(0);

  const pushQuiz = () => {
    history.push({
      pathname: '/quizzes',
      state: { cameFromCourse: true, quizId: course.id },
    });
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h3" sx={{ marginTop: '10px' }}>{`Congratulations ${authService.getCurrentUser().username}!`}</Typography>
      </Grid>
      <Grid item xs={6} sx={styles.courseCompleted.leftGrid}>
        <Box>
          <Typography style={{ textDecoration: 'underline' }} variant="h5">Details</Typography>
          <Typography variant="body1" sx={{ marginTop: '10px' }}>{`The following course is now completed: ${course.title}`}</Typography>
          <Typography variant="body1" sx={{ marginTop: '10px' }}>Please rate how much you enjoyed this course:</Typography>
          <CourseRatingUser
            userRating={userRating}
            setUserRating={setUserRating}
          />
          <Typography variant="body1" sx={{ marginTop: '10px' }}>Feel free to now complete a Quiz on this topic (please claim credit before navigating to Quiz!):</Typography>
          <Button variant="outlined" color="error" sx={{ marginTop: '10px' }} startIcon={<QuizIcon />} disabled={query !== 'success'} onClick={() => pushQuiz()}>
            {`${course.id}. ${course.title} Quiz`}
          </Button>
        </Box>
      </Grid>
      <Grid item xs={6} sx={styles.courseCompleted.rightGrid}>
        <Box>
          <Typography style={{ textDecoration: 'underline' }} variant="h5">References</Typography>
          {course.references.map((refer) => (
            <Typography varaint="body1" sx={{ marginTop: '5px' }}>{refer}</Typography>
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ height: '300px' }}>
        <CourseCompleteButton
          courseId={course.id}
          userRating={userRating}
          query={query}
          setQuery={setQuery}
        />
      </Grid>
    </Grid>
  );
}

export default CourseCompleted;

import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import QuizCard from './QuizCard';
import quizDetails from './QuizDetails';
import LoadingPage from '../../misc/LoadingPage';
import QuizService from '../../../services/quiz.service';
import { styles } from '../quiz.styles';

function Quizzes(props) {
  const [isLoading, setLoading] = useState(true);
  const [allScores, setAllScores] = useState([]);
  const [cameFromCourse, setCameFromCourse] = React.useState({ cameFrom: false });

  React.useEffect(() => {
    // check if user has been redirected from course
    if (typeof props.location.state !== 'undefined'
          && typeof props.location.state.cameFromCourse !== 'undefined') {
      setCameFromCourse(props.location.state);
      props.history.replace();
    }
    // load all previous user quiz scores
    QuizService.getAllQuizScores().then((res) => {
      setAllScores(res.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <LoadingPage text="Loading all quizzes..." />;
  }
  return (
    <Box sx={styles.quizzes.outerbox}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {quizDetails.map((quiz, index) => (
          <Grid item xs={2} sm={4} md={4} key={Math.random()} style={{ textAlign: 'center' }}>
            <QuizCard
              quiz={quiz}
              cameFromCourse={cameFromCourse.cameFromCourse && quiz.id === cameFromCourse.quizId}
              bestScore={allScores[index].score}
              history={props.history}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Quizzes;

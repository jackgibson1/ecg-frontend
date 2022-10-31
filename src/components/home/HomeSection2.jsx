import React from 'react';
import { Grid, Stack, Typography, Box, Button } from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';
import animatedQuiz from '../../assets/images/home/quizzesAnimation.gif';
import QuizDetails from '../quizzes/quiz-components/QuizDetails';
import { styles } from './home.styles';

function HomeSection2(props) {
  const { history } = props;
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={6} lg={6}>
        <Box sx={styles.section2.box}>
          <Stack spacing={2}>
            <Typography variant="h2">
              <b>
                Test your
                <br />
                knowledge using
                <br />
                quizzes
              </b>
            </Typography>
            <img
              src={animatedQuiz}
              height="300px"
              width="300px"
              alt="animated quiz"
              style={styles.section2.animatedQuiz}
            />
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Box sx={styles.section2.box}>
          <Stack spacing={2}>
            {QuizDetails.slice(0, 4).map((quiz) => (
              <div key={20 * Math.random()}>
                <Typography variant="h4">
                  <b>
                    <u>{`${quiz.id}. ${quiz.title}`}</u>
                  </b>
                </Typography>
                <Typography variant="h6">
                  {quiz.description}
                </Typography>
              </div>
            ))}
            <Button
              sx={styles.section2.button}
              size="large"
              variant="outlined"
              onClick={() => history.push('/quizzes')}
              endIcon={<QuizIcon />}
            >
              View All Quizzes
            </Button>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}
export default HomeSection2;

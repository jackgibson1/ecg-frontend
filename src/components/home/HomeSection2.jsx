/* eslint-disable react/prop-types */
import React from 'react';
import {
  Grid, Stack, Typography, Box, Button,
} from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';
import animatedQuiz from '../../assets/images/home/quizzesAnimation.gif';
import QuizDetails from '../quizzes/quiz-components/QuizDetails';

function HomeSection2(props) {
  const { history } = props;
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={6} lg={6}>
        <Box sx={{ paddingLeft: '5%', paddingRight: '5%', paddingTop: '2%' }}>
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
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '100%',
                borderRadius: '75px',
              }}
            />
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Box sx={{ paddingLeft: '5%', paddingRight: '5%', paddingTop: '2%' }}>
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
              sx={{ color: '#EE3233', boxShadow: 10, marginTop: '2%', fontWeight: 'bold', borderRadius: 3, backdropFilter: 'blur(20px)', width: '90%' }}
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

/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { CircularProgress, Typography } from '@mui/material';
import QuizBackground from '../../../assets/images/quizzes/quizLayoutbackground.jpeg';
import quizDetails from './quizDetails';
import QuizPagination from './quizPagination';
import QuizQuestionsList from './quizQuestionsList';

// styled paper used to hold overarching course content
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '520px',
}));

export default function QuizLayout(props) {
  // get path and find quiz which matches current path
  const { pathname } = props.location;
  const quiz = quizDetails.find((qz) => qz.path === pathname);
  const [loading, setLoading] = useState(true);

  // get current position from localstorage
  const quizStorage = JSON.parse(localStorage.getItem('quiz'));
  const [currentQuestion, setCurrentQuestion] = useState(quizStorage.currentQuestion);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <div style={{
        display: 'flex', justifyContent: 'center', marginTop: '5%', textAlign: 'center',
      }}
      >
        <CircularProgress sx={{ position: 'absolute' }} />
        <Typography sx={{ position: 'absolute', marginTop: '5%' }} variant="h3">Loading your Quiz!</Typography>
      </div>
    );
  }

  return (
    <Grid sx={{ paddingTop: '2%', paddingLeft: '2%', paddingRight: '2%' }} container justifyContent="center">
      <Grid item xs={2}>
        <Item>
          <QuizQuestionsList
            totalQuestions={quiz.questions.length}
            currentQuestion={currentQuestion}
          />
        </Item>
      </Grid>
      <Grid item xs={7}>
        <Item>
          <Box sx={{
            borderColor: 'grey.500', border: 5, borderRadius: 5, width: '100%', height: '100%', backgroundImage: `url(${QuizBackground})`, backgroundSize: 'cover',
          }}
          >
            {quiz.questions[currentQuestion - 1].component}
          </Box>
        </Item>
        <Box sx={{
          borderColor: 'grey.500', border: 2, borderRadius: 5, width: '45%', height: '8%', alignItems: 'center', margin: 'auto', marginTop: '1%',
        }}
        >
          <QuizPagination
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            totalQuestions={quiz.questions.length}
            quizStorage={quizStorage}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

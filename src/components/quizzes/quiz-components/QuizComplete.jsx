/* eslint-disable react/prop-types */
import React from 'react';
import { Grid, Typography, Alert, Box, Button } from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';
import QuizService from '../../../services/quiz.service';
import AuthService from '../../../services/auth.service';
import quizDetails from './quizDetails';

export default function QuizComplete(props) {
  const { history } = props;
  // eslint-disable-next-line no-unused-vars
  const quiz = QuizService.getLocalQuiz();
  const totalCorrect = quiz.answers.filter((x) => x === true).length;
  const quizName = quizDetails.find((quizDetail) => quizDetail.id === quiz.id).title;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h3" sx={{ marginTop: '50px' }}>{`Congratulations ${AuthService.getCurrentUser().username}!`}</Typography>
        <Typography variant="h5" sx={{ marginTop: '30px' }}><u>{`You have now completed the Quiz: ${quizName}`}</u></Typography>
        <Typography variant="h4" sx={{ marginTop: '20px', fontWeight: 'bold' }}>{`You scored ${totalCorrect}/${quiz.totalQuestions}!`}</Typography>
        <Box sx={{ width: '60%', marginLeft: 'auto', marginRight: 'auto' }}>
          <Alert sx={{ marginTop: '20px', boxShadow: '0 8px 40px -12px rgba(0,0,0,1)', borderRadius: 5 }} severity="success">Quiz completion sucessfully saved!</Alert>
          <Alert sx={{ marginTop: '20px', boxShadow: '0 8px 40px -12px rgba(0,0,0,1)', borderRadius: 5 }} severity="info">Feel free to complete this Quiz as many times as you like. However please note only your best score will be saved.</Alert>
          <Button
            sx={{ marginTop: '40px', boxShadow: '0 8px 40px -12px rgba(0,0,0,1)', borderRadius: 2, color: '#EE3233' }}
            onClick={() => history.push('/quizzes')}
            variant="outlined"
            endIcon={<QuizIcon />}
          >
            Back To All Quizzes
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

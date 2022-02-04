/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography, LinearProgress, Stack } from '@mui/material';
import Countdown from 'react-countdown';
import Alert from '@mui/material/Alert';
import QuizBackground from '../../../assets/images/quizzes/quizLayoutbackground.jpeg';
import quizDetails from './quizDetails';
import QuizPagination from './quizPagination';
import QuizQuestionsList from './quizQuestionsList';
import QuizAnswerButtons from './quizAnswerButtons';
import UserService from '../../../services/user.service';
import LoadingPage from '../../LoadingPage';
import QuizComplete from './QuizComplete';

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
  const quizStorage = UserService.getLocalQuiz();
  const [currentQuestion, setCurrentQuestion] = useState(quizStorage.currentQuestion);

  // timer configuration
  const { timer } = quizStorage;
  const [stillTime, setStillTime] = useState(true);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [alreadyAnswered, setAlreadyAnswered] = React.useState(false);

  useEffect(() => {
    if (typeof UserService.getLocalQuiz().answers[currentQuestion - 1] !== 'undefined') {
      setAlreadyAnswered(true);
      setAnswerSubmitted(true);
    } else {
      setStillTime(true);
      setAnswerSubmitted(false);
      setAlreadyAnswered(false);
    }

    // used for displaying loadpage component
    const loadingTimer = setTimeout(() => setLoading(false), 1500);
    return () => {
      clearTimeout(loadingTimer);
    };
  }, [currentQuestion]);

  const renderCountdown = ({ seconds }) => {
    const totalTime = timer.seconds;
    return <LinearProgress color="success" sx={{ height: '20px', width: '60%', border: 3, borderRadius: 2, marginTop: '1%', marginLeft: '35%' }} variant="determinate" value={(seconds * 100) / totalTime} />;
  };

  const countDownComplete = () => {
    setStillTime(false);
    setAnswerSubmitted(true);
    quizStorage.answers.push(false);
    UserService.updateLocalQuiz(quizStorage);
  };

  const renderComponent = () => {
    if (alreadyAnswered) {
      return <Alert sx={{ marginLeft: '5%', marginRight: '5%' }} variant="filled" severity="info">Question already finished!</Alert>;
    }
    if (!stillTime) {
      return <Alert sx={{ marginLeft: '5%', marginRight: '5%' }} variant="filled" severity="error">You have ran out of time!</Alert>;
    }
    return (
      <QuizAnswerButtons
        quiz={quiz}
        quizStorage={quizStorage}
        currentQuestion={currentQuestion}
        submitted={answerSubmitted}
        setSubmitted={setAnswerSubmitted}
      />
    );
  };

  if (loading) return <LoadingPage text="Quiz" />;

  return (
    <Grid sx={{ paddingTop: '2%' }} container justifyContent="center">
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
            {currentQuestion > quiz.questions.length ? (
              <QuizComplete history={props.history} />
            ) : (
              <>
                <Stack sx={{ marginTop: '1%' }} direction="row">
                  <Box sx={{ width: '50%', textAlign: 'left', marginLeft: '2%' }}>
                    <Typography sx={{ fontWeight: 'bold' }} variant="h6">{`Question ${currentQuestion}`}</Typography>
                  </Box>
                  <Box sx={{ width: '50%' }}>
                    {timer.on && !answerSubmitted && currentQuestion <= quiz.questions.length
                      && (
                        <Countdown
                          date={Date.now() + (timer.seconds * 1000)}
                          onComplete={() => countDownComplete()}
                          renderer={renderCountdown}
                        />
                      )}
                  </Box>
                </Stack>
                <Box sx={{ height: '60%', width: '100%' }}>
                  {quiz.questions[currentQuestion - 1].component}
                </Box>
                {renderComponent()}
              </>
            )}
          </Box>
        </Item>
        <Box sx={{
          borderColor: 'grey.500', border: 2, borderRadius: 5, width: '40%', height: '8%', alignItems: 'center', margin: 'auto', marginTop: '1%',
        }}
        >
          <QuizPagination
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            totalQuestions={quiz.questions.length}
            quizStorage={quizStorage}
            submitted={answerSubmitted}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

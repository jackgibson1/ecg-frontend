import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography, LinearProgress, Stack } from '@mui/material';
import Countdown from 'react-countdown';
import Alert from '@mui/material/Alert';
import QuizBackground from '../../../assets/images/quizzes/quizLayoutBG.jpg';
import quizDetails from './QuizDetails';
import QuizPagination from './QuizPagination';
import QuizQuestionsList from './QuizQuestionsList';
import QuizAnswerButtons from './QuizAnswerButtons';
import QuizService from '../../../services/quiz.service';
import LoadingPage from '../../LoadingPage';
import QuizComplete from './QuizComplete';

// styled paper used to hold overarching course content
const QuizQuestionsLayout = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  minHeight: '530px',
  maxHeight: '700px',
  height: '50vh',
  borderRadius: 20,
  marginLeft: '5px',
  marginRight: '5px',
}));

export const QuizQuestionAreaLayout = styled(Box)(({ theme }) => ({
  borderLeft: 10,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
  minHeight: '530px',
  maxHeight: '700px',
  height: '50vh',
  borderRadius: 20,
  minWidth: '800px',
  width: '100%',
  backgroundImage: `url(${QuizBackground})`,
  backgroundSize: 'cover',
  paddingRight: '1%',
}));

export default function QuizLayout(props) {
  // get path and find quiz which matches current path
  const { pathname } = props.location;
  const quiz = quizDetails.find((qz) => qz.path === pathname);
  const [loading, setLoading] = useState(true);

  // get current position from localstorage
  const quizStorage = QuizService.getLocalQuiz();
  const [currentQuestion, setCurrentQuestion] = useState(quizStorage.currentQuestion);

  // timer configuration
  const { timer } = quizStorage;
  const [stillTime, setStillTime] = useState(true);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [alreadyAnswered, setAlreadyAnswered] = React.useState(false);

  useEffect(() => {
    if (typeof QuizService.getLocalQuiz().answers[currentQuestion - 1] !== 'undefined') {
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
    QuizService.updateLocalQuiz(quizStorage);
  };

  const renderComponent = () => {
    if (alreadyAnswered) {
      return <Alert sx={{ marginLeft: '5%', marginRight: '5%', marginTop: '5%' }} variant="filled" severity="info">Question already answered!</Alert>;
    }
    if (!stillTime) {
      return (
        <>
          <Alert sx={{ marginLeft: '5%', marginRight: '5%', marginTop: '5%' }} variant="filled" severity="error">You have ran out of time!</Alert>
          <Typography sx={{ marginTop: '3%' }} variant="body" color="red">{quiz.questions[currentQuestion - 1].answerDesc}</Typography>
        </>
      );
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
    <Grid sx={{ paddingTop: '1%', marginLeft: 'auto', marginRight: 'auto', maxWidth: '2000px' }} container justifyContent="center">
      <Grid item xs={2}>
        <QuizQuestionsLayout sx={{ boxShadow: 10, border: 1, borderColor: 'blue' }}>
          <QuizQuestionsList totalQuestions={quiz.questions.length} currentQuestion={currentQuestion} />
        </QuizQuestionsLayout>
        <Alert severity="error" sx={{ boxShadow: 10, borderRadius: 5, marginTop: '3%', marginLeft: '5px', marginRight: '5px' }}>Progress isn't saved.</Alert>
      </Grid>
      <Grid item xs={7}>
        <QuizQuestionAreaLayout sx={{ boxShadow: 10, border: 1, borderColor: 'red' }}>
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
              <Box sx={{ height: '65%', width: '100%' }}>
                {quiz.questions[currentQuestion - 1].component}
              </Box>
              {renderComponent()}
            </>
          )}
        </QuizQuestionAreaLayout>
        <Box sx={{ border: 1, borderRadius: 2, width: '400px', height: '48px', margin: 'auto', marginTop: '1%', boxShadow: 10 }}>
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

import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography, LinearProgress, Stack, Alert } from '@mui/material';
import Countdown from 'react-countdown';
import quizDetails from './QuizDetails';
import QuizPagination from './QuizPagination';
import QuizQuestionsList from './QuizQuestionsList';
import QuizAnswerButtons from './QuizAnswerButtons';
import QuizService from '../../../services/quiz.service';
import LoadingPage from '../../misc/LoadingPage';
import QuizComplete from './QuizComplete';
import { styles, QuizQuestionsLayout, QuizQuestionAreaLayout } from '../quiz.styles';

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
    return <LinearProgress color="success" sx={styles.quizLayout.linearPorgress} variant="determinate" value={(seconds * 100) / totalTime} />;
  };

  const countDownComplete = () => {
    setStillTime(false);
    setAnswerSubmitted(true);
    quizStorage.answers.push(false);
    QuizService.updateLocalQuiz(quizStorage);
  };

  const renderComponent = () => {
    if (alreadyAnswered) {
      return <Alert sx={styles.quizLayout.timeUpAlert} variant="filled" severity="info">Question already answered!</Alert>;
    }
    if (!stillTime) {
      return (
        <>
          <Alert sx={styles.quizLayout.timeUpAlert} variant="filled" severity="error">You have ran out of time!</Alert>
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
    <Grid sx={styles.quizLayout.outerGrid} container justifyContent="center">
      <Grid item xs={2}>
        <QuizQuestionsLayout sx={styles.quizLayout.quizQuestionsLayout}>
          <QuizQuestionsList totalQuestions={quiz.questions.length} currentQuestion={currentQuestion} />
        </QuizQuestionsLayout>
        <Alert severity="error" sx={styles.quizLayout.progressAlert}>Progress isn't saved.</Alert>
      </Grid>
      <Grid item xs={7}>
        <QuizQuestionAreaLayout sx={styles.quizLayout.quizQuestionAreaLayout}>
          {currentQuestion > quiz.questions.length ? (
            <QuizComplete history={props.history} />
          ) : (
            <>
              <Stack sx={{ marginTop: '1%' }} direction="row">
                <Box sx={styles.quizLayout.currentQuestionBox}>
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
              <Box sx={styles.quizLayout.questionComponent}>
                {quiz.questions[currentQuestion - 1].component}
              </Box>
              {renderComponent()}
            </>
          )}
        </QuizQuestionAreaLayout>
        <Box sx={styles.quizLayout.paginationBox}>
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

/* eslint-disable react/prop-types */
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function QuizPagination(props) {
  const {
    currentQuestion, setCurrentQuestion, totalQuestions, quizStorage,
  } = props;
  const theme = useTheme();

  const handleNext = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    quizStorage.currentQuestion = currentQuestion + 1;
    localStorage.setItem('quiz', JSON.stringify(quizStorage));
  };

  return (
    <MobileStepper
      variant="progress"
      steps={totalQuestions}
      position="static"
      activeStep={currentQuestion - 1}
      sx={{
        maxWidth: 400, flexGrow: 1, borderRadius: 3, backgroundColor: 'transparent', marginLeft: '1%',
      }}
      nextButton={(
        <Button size="small" onClick={handleNext} disabled={currentQuestion === totalQuestions}>
          Submit Question
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      )}
    />
  );
}

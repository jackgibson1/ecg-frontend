/* eslint-disable react/prop-types */
import * as React from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import NextPlanIcon from '@mui/icons-material/NextPlan';

export default function QuizPagination(props) {
  const {
    currentQuestion, setCurrentQuestion, totalQuestions, quizStorage, submitted,
  } = props;

  const handleNext = () => {
    if (currentQuestion === totalQuestions) {
      console.log('api call');
    }
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    quizStorage.currentQuestion = currentQuestion + 1;
    localStorage.setItem('quiz', JSON.stringify(quizStorage));
  };

  return (
    <MobileStepper
      variant="progress"
      steps={totalQuestions + 1}
      position="static"
      activeStep={currentQuestion <= totalQuestions ? currentQuestion - 1 : totalQuestions}
      sx={{
        maxWidth: 400, borderRadius: 3, backgroundColor: 'transparent', marginLeft: '5%',
      }}
      nextButton={
        (
          <Button size="small" onClick={handleNext} disabled={!submitted} variant="outlined" endIcon={<NextPlanIcon />}>
            {currentQuestion >= totalQuestions ? 'Complete Quiz' : 'Next Question'}
          </Button>
      )
    }
    />
  );
}

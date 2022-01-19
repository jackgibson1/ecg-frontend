import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function QuizPagination(props) {
  // eslint-disable-next-line react/prop-types
  const { currentQuestion, setCurrentQuestion, totalQuestions } = props;
  const theme = useTheme();

  const handleNext = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  return (
    <MobileStepper
      variant="progress"
      steps={totalQuestions}
      position="static"
      activeStep={currentQuestion}
      sx={{
        maxWidth: 400, flexGrow: 1, borderRadius: 3, backgroundColor: 'transparent', marginLeft: '1%',
      }}
      nextButton={(
        <Button size="small" onClick={handleNext} disabled={currentQuestion === totalQuestions}>
          Next Question
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

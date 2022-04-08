import React, { useState } from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import CreditEarnedModal from '../../misc/CreditEarnedModal';
import QuizService from '../../../services/quiz.service';

export default function QuizPagination(props) {
  const { currentQuestion, setCurrentQuestion, totalQuestions, quizStorage, submitted } = props;
  const [openModal, setOpenModal] = useState(false);

  const handleNext = () => {
    // check if quiz is completed
    if (currentQuestion === totalQuestions) {
      const quiz = QuizService.getLocalQuiz();
      // calculate total
      const totalCorrect = quiz.answers.filter((x) => x === true).length;
      // send total to api and check if credit has been earned
      QuizService.updateQuizScore(quiz.id, totalCorrect).then((res) => {
        if (res.data.creditEarned) {
          setOpenModal(true);
        }
      }).catch((err) => console.log(err));
    }
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    quizStorage.currentQuestion = currentQuestion + 1;
    // update local storage with new changes
    localStorage.setItem('quiz', JSON.stringify(quizStorage));
  };

  return (
    <>
      <MobileStepper
        variant="progress"
        steps={totalQuestions + 1}
        position="static"
        activeStep={currentQuestion <= totalQuestions ? currentQuestion - 1 : totalQuestions}
        sx={{ borderRadius: 3, backgroundColor: 'transparent', marginLeft: '5%' }}
        nextButton={
        (
          <Button size="small" onClick={handleNext} disabled={!submitted} variant="outlined" endIcon={<NextPlanIcon />}>
            {currentQuestion >= totalQuestions ? 'Complete Quiz' : 'Next Question'}
          </Button>
      )
    }
      />
      <CreditEarnedModal open={openModal} setOpen={setOpenModal} />
    </>
  );
}

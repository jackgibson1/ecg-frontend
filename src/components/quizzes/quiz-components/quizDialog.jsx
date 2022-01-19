/* eslint-disable react/prop-types */
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useHistory } from 'react-router-dom';
import { Typography } from '@mui/material';
import QuizTimerSlider from './quizTimerSlider';

// eslint-disable-next-line react/jsx-props-no-spreading
const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function QuizDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [timerOn, setTimerOn] = React.useState(false);

  const history = useHistory();
  const { quiz } = props;

  const localStorageQuiz = {
    id: quiz.id,
    currentQuestion: 1,
    totalQuestions: quiz.questions.length,
    timer: timerOn,
    ...timerOn && { time: 10 },
    answer: [true, false],
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const startOnClick = () => {
    history.push(quiz.path);
    localStorage.setItem('quiz', JSON.stringify(localStorageQuiz));
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} align="center">
        Setup Quiz
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ textAlign: 'center' }}>{`${quiz.title} Quiz`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {quiz.description}
          </DialogContentText>
          <Typography sx={{ marginTop: '5%' }} variant="h6" align="left">
            Quiz Settings
          </Typography>
          <QuizTimerSlider timerOn={timerOn} setTimerOn={setTimerOn} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Exit</Button>
          <Button onClick={() => startOnClick()}>Start Quiz</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

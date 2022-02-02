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
import QuizTimeSelector from './quizTimeSelecter';

// eslint-disable-next-line react/jsx-props-no-spreading
const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function QuizDialog(props) {
  const [timer, setTimer] = React.useState({ on: false, seconds: 10 });

  const history = useHistory();
  const { quiz, open, handleClickOpen, handleClose } = props;

  const localStorageQuiz = {
    id: quiz.id,
    currentQuestion: 1,
    totalQuestions: quiz.questions.length,
    timer,
    answers: [],
  };

  const startOnClick = () => {
    history.push(quiz.path);
    localStorage.setItem('quiz', JSON.stringify(localStorageQuiz));
  };

  // React.useEffect(() => {
  //   if (quiz.id === 1) setOpen(true);
  // }, []);

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
          <QuizTimeSelector timer={timer} setTimer={setTimer} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Exit</Button>
          <Button onClick={() => startOnClick()}>Start Quiz</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

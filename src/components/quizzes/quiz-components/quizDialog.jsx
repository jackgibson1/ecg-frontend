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
import { Grid } from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';
import QuizTimeSelector from './quizTimeSelecter';
import QuizDifficultyRating from './QuizDifficultyRating';
import QuizDialogImage from '../../../assets/images/quizzes/quizDialogImage1.png';
import QuizTopDialogContent from './QuizTopDialogContent';

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

  return (
    <div>
      <Button
        sx={{ color: '#EE3233', marginBottom: '4%', boxShadow: '0 8px 40px -12px rgba(0,0,0,1)' }}
        variant="outlined"
        onClick={handleClickOpen}
        align="center"
        endIcon={<QuizIcon />}
        disabled={quiz.id >= 2 && quiz.id <= 6}
      >
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
        <Grid container>
          <Grid item>
            <QuizDifficultyRating difficulty={quiz.difficulty} />
            <QuizTopDialogContent
              lastUpdated={quiz.lastUpdated}
              totalQuestions={quiz.questions.length}
            />
          </Grid>
          <Grid item sx={{ paddingLeft: 15 }}>
            <img src={QuizDialogImage} height="100" width="100" alt="medic" />
          </Grid>
        </Grid>
        <DialogContent>
          <DialogContentText sx={{ marginBottom: '2%' }}>
            {quiz.description}
          </DialogContentText>
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

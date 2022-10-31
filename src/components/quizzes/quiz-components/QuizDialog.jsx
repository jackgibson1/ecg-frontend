import * as React from 'react';
import { Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';
import QuizTimeSelector from './QuizTimeSelecter';
import QuizDifficultyRating from './QuizDifficultyRating';
import QuizDialogImage from '../../../assets/images/quizzes/quizDialogImage1.png';
import QuizTopDialogContent from './QuizTopDialogContent';
import { styles } from '../quiz.styles';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function QuizDialog(props) {
  const { quiz, open, handleClickOpen, handleClose, history } = props;
  const [timer, setTimer] = React.useState({ on: false, seconds: 10 });

  // define quiz object to be stored in browser localstorage
  const localStorageQuiz = {
    id: quiz.id,
    currentQuestion: 1,
    totalQuestions: quiz.questions.length,
    timer,
    answers: [],
  };

  // upon starting quiz, push newly created object onto localstorage
  const startOnClick = () => {
    history.push(quiz.path);
    localStorage.setItem('quiz', JSON.stringify(localStorageQuiz));
  };

  return (
    <div>
      <Button
        sx={styles.quizDialog.button}
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

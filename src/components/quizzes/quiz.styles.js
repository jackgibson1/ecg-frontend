/* eslint-disable import/prefer-default-export */
import Badge from '@mui/material/Badge';
import { styled, Paper, Box } from '@mui/material';
import QuizPageBGImage from '../../assets/images/quizzes/quizBackground.jpg';
import QuizQuestionAreaBG from '../../assets/images/quizzes/quizLayoutBG.jpeg';

export const styles = {
  /* QUIZ PAGE */
  quizzes: {
    outerbox: { paddingTop: '2%', paddingLeft: '2%', paddingBottom: '2%', backgroundImage: `url(${QuizPageBGImage})`, backgroundSize: 'cover' },
  },

  /* QUIZ CARD */
  quizCard: {
    media: { height: 200, width: '100%' },
    card: { maxWidth: 350, borderRadius: 10, margin: 'auto', transition: '0.3s', boxShadow: '0 8px 40px -12px rgba(0,0,0,1)' },
  },

  /* QUIZ DIALOG  */
  quizDialog: {
    button: { color: '#EE3233', marginBottom: '4%', boxShadow: '0 8px 40px -12px rgba(0,0,0,1)' },
    topContent: { '& > legend': { mt: 2 }, display: 'flex', marginTop: 2, ml: 4 },
  },

  /* QUIZ DIFFICULTY RATING */
  quizDifficulty: {
    box: { ml: 4, width: '100%', display: 'flex', alignItems: 'center', mb: 1 },
  },

  /* QUIZ ANSWER BUTTONS */
  quizAnswerButtons: {
    correct: { border: 2, borderRadius: 2, paddingRight: '4px', backgroundColor: 'green' },
    submit: { color: '#EE3233', marginBottom: '2%', boxShadow: 20, backdropFilter: 'blur(20px)' },
  },

  /* QUIZ COMPLETE */
  quizComplete: {
    totalCorrect: { marginTop: '20px', fontWeight: 'bold' },
    box: { width: '60%', marginLeft: 'auto', marginRight: 'auto' },
    alert: { marginTop: '20px', boxShadow: '0 8px 40px -12px rgba(0,0,0,1)', borderRadius: 5 },
    button: { marginTop: '40px', boxShadow: '0 8px 40px -12px rgba(0,0,0,1)', borderRadius: 2, color: '#EE3233' },
  },

  /* QUIZ COUNTDOWN BAR */
  quizCountdownProgress: {
    outerbox: { display: 'flex', alignItems: 'center' },
    innerbox: { width: '50%', mr: 1 },
  },

  /* QUIZ LAYOUT */
  quizLayout: {
    linearPorgress: { height: '20px', width: '60%', border: 3, borderRadius: 2, marginTop: '1%', marginLeft: '35%' },
    timeUpAlert: { marginLeft: '5%', marginRight: '5%', marginTop: '5%' },
    outerGrid: { paddingTop: '1%', marginLeft: 'auto', marginRight: 'auto', maxWidth: '2000px' },
    quizQuestionsLayout: { boxShadow: 10, border: 1, borderColor: 'blue' },
    progressAlert: { boxShadow: 10, borderRadius: 5, marginTop: '3%', marginLeft: '5px', marginRight: '5px' },
    quizQuestionAreaLayout: { boxShadow: 10, border: 1, borderColor: 'red' },
    currentQuestionBox: { width: '50%', textAlign: 'left', marginLeft: '2%' },
    questionComponent: { height: '65%', width: '100%' },
    paginationBox: { border: 1, borderRadius: 2, width: '400px', height: '48px', margin: 'auto', marginTop: '1%', boxShadow: 10 },
  },

};

export const QuizCardBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 30,
    top: 5,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: '10px 10px',
  },
}));

// styled paper used to hold overarching course content
export const QuizQuestionsLayout = styled(Paper)(({ theme }) => ({
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
  backgroundImage: `url(${QuizQuestionAreaBG})`,
  backgroundSize: 'cover',
  paddingRight: '1%',
}));

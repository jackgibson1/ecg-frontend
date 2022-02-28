/* eslint-disable import/prefer-default-export */
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import QuizPageBGImage from '../../assets/images/quizzes/quizBackground.jpg';

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

};

export const QuizCardBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 30,
    top: 5,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: '10px 10px',
  },
}));

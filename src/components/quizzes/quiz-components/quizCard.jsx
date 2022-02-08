/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import Card from '@mui/material/Card';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Box } from '@mui/material';
import QuizDialog from './quizDialog';
import QuizDifficultyRating from './QuizDifficultyRating';

const styles = {
  media: {
    height: 200,
    width: '100%',
  },
  card: {
    maxWidth: 350,
    borderRadius: 10,
    margin: 'auto',
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,1)',
  },
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 30,
    top: 5,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: '0 10px',
  },
}));

export default function QuizCard(props) {
  const { quiz, cameFromCourse, bestScore } = props;
  const [openDialog, setOpenDialog] = React.useState(false);

  React.useEffect(() => {
    if (cameFromCourse) {
      setOpenDialog(true);
    }
  }, []);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <StyledBadge
      badgeContent={bestScore > -1 ? `BEST SCORE: ${bestScore}/${quiz.questions.length}` : 'NOT COMPLETED'}
      color={bestScore > -1 ? 'success' : 'error'}
    >
      <Card style={styles.card}>
        <Box sx={{ ':hover': { backgroundColor: '#EAEAEA' } }}>
          <CardMedia>
            <img src={quiz.image} style={styles.media} alt="medic" />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" align="center">
              <u>{quiz.title}</u>
            </Typography>

            <QuizDifficultyRating difficulty={quiz.difficulty} />
            <Typography variant="body2" color="text.secondary" align="center">
              {quiz.description}
            </Typography>
          </CardContent>
          <CardActions align="center">
            <Grid container justifyContent="center">
              <Grid item xs={12}>
                <QuizDialog
                  quiz={quiz}
                  open={openDialog}
                  handleClickOpen={handleClickOpenDialog}
                  handleClose={handleCloseDialog}
                />
              </Grid>
            </Grid>
          </CardActions>
        </Box>
      </Card>
    </StyledBadge>
  );
}

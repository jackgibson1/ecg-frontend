import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';
import QuizDialog from './QuizDialog';
import QuizDifficultyRating from './QuizDifficultyRating';
import { styles, QuizCardBadge } from '../styles';

export default function QuizCard(props) {
  const { quiz, cameFromCourse, bestScore, history } = props;
  const [openDialog, setOpenDialog] = React.useState(false);

  React.useEffect(() => {
    if (cameFromCourse) setOpenDialog(true);
  }, []);

  const handleClickOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  return (
    <QuizCardBadge
      badgeContent={bestScore > -1 ? `BEST SCORE: ${bestScore}/${quiz.questions.length}` : 'NOT COMPLETED'}
      color={bestScore > -1 ? 'success' : 'error'}
    >
      <Card style={styles.quizCard.card}>
        <Box sx={{ ':hover': { backgroundColor: '#EAEAEA' } }}>
          <CardMedia>
            <img src={quiz.image} style={styles.quizCard.media} alt="medic" />
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
                  history={history}
                />
              </Grid>
            </Grid>
          </CardActions>
        </Box>
      </Card>
    </QuizCardBadge>
  );
}

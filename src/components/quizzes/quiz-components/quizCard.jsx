/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import QuizDialog from './quizDialog';

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
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
    },
  },
};

export default function QuizCard(props) {
  const { quiz, cameFromCourse } = props;
  const [openDialog, setOpenDialog] = React.useState(false);

  React.useEffect(() => {
    if (cameFromCourse.cameFromCourse && cameFromCourse.quizId === quiz.id) {
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
    <Card style={styles.card}>
      <CardMedia>
        <img src={quiz.image} style={styles.media} alt="medic" />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" align="center">
          {quiz.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {quiz.description}
        </Typography>
        <hr />
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
          <Grid item xs={12} sx={{ marginTop: '2%' }}>
            Completed / Not Completed
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Box } from '@mui/material';
import CourseDialog from './CourseDialog';
import CourseRating from './CourseRating';
import LinearProgressWithLabel from './LinearProgressWithLabel';

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
    backgroundColor: 'white',
    border: 50,
  },
};

export default function CourseCard(props) {
  const {
    // eslint-disable-next-line react/prop-types
    course, position, rating,
  } = props;

  // eslint-disable-next-line react/prop-types
  const percentComplete = position === 0 ? 0 : (position / course.sections.length) * 100;

  return (
    <Card style={styles.card}>
      <Box sx={{ ':hover': { backgroundColor: '#EAEAEA' } }}>
        <CardMedia>
          <img src={course.image} style={styles.media} alt="medic" />
        </CardMedia>
        <CardContent>
          <Typography sx={{ textDecoration: 'underline' }} gutterBottom variant="h5" align="center">
            {course.title}
          </Typography>
          <Box sx={{ marginTop: 1, marginBottom: 1, marginLeft: 6 }}>
            <CourseRating readOnly rating={rating} />
          </Box>
          <Typography variant="body2" color="text.secondary" align="center">
            {course.description}
          </Typography>
          <LinearProgressWithLabel value={percentComplete} />
        </CardContent>
        <CardActions align="center">
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <CourseDialog
                course={course}
                position={position}
              />
            </Grid>
          </Grid>
        </CardActions>
      </Box>

    </Card>
  );
}

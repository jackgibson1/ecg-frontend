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
import CourseRatingAverage from './CourseRatingAverage';
import LinearProgressWithLabel from './LinearProgressWithLabel';
import { styles, CourseCardBadge } from '../styles';

export default function CourseCard(props) {
  const {
    // eslint-disable-next-line react/prop-types
    course, position, rating, completion,
  } = props;

  // eslint-disable-next-line react/prop-types
  const percentComplete = position === 0 ? 0 : (position / course.sections.length) * 100;

  return (
    <CourseCardBadge
      badgeContent={completion.completed ? `COMPLETED - ${new Date(completion.firstCompletionDate).toLocaleDateString()}` : 'NOT COMPLETED'}
      color={completion.completed ? 'success' : 'error'}
    >
      <Card style={styles.courseCard.card}>
        <Box sx={{ ':hover': { backgroundColor: '#EAEAEA' } }}>
          <CardMedia>
            <img src={course.image} style={styles.courseCard.media} alt="Course cover" />
          </CardMedia>
          <CardContent>
            <Typography sx={{ textDecoration: 'underline' }} gutterBottom variant="h5" align="center">
              {course.title}
            </Typography>
            <Box sx={styles.courseCard.ratingBox}>
              <CourseRatingAverage rating={rating} />
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
                  rating={rating}
                  course={course}
                  position={position}
                />
              </Grid>
            </Grid>
          </CardActions>
        </Box>
      </Card>
    </CourseCardBadge>
  );
}

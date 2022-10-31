import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import CourseService from '../../../services/course.service';
import CourseContentsList from './CourseContentsList';
import CourseRatingAverage from './CourseRatingAverage';
import CourseTimeAndUpdated from './CourseTimeAndUpdated';
import CoursePeopleFor from './CoursePeopleFor';
import CourseDialogImage from '../../../assets/images/courses/courseImage.png';
import { styles } from '../styles';

// eslint-disable-next-line react/jsx-props-no-spreading
const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function CourseDialog(props) {
  const { course, position, rating } = props;
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const restartCourse = async () => {
    await CourseService.updateCoursePosition(course.id, 0).then((res) => res);
  };

  const pushCourse = () => {
    if (position === 0) {
      return <Button onClick={() => history.push(course.path, { process: 'Starting your course!' })}>Start Course</Button>;
    } if (position > 0 && position <= course.sections.length - 1) {
      return <Button onClick={() => history.push(course.path, { process: 'Resuming your course!' })}>Resume Course</Button>;
    }
    return (
      <Button onClick={async () => { await restartCourse(); history.push(course.path, { process: 'Restarting your course!' }); }}>
        Restart Course
      </Button>
    );
  };

  return (
    <div>
      <Button
        sx={styles.courseDialog.button}
        variant="outlined"
        onClick={handleClickOpen}
        align="center"
        endIcon={<ExploreIcon />}
        disabled={course.id >= 3 && course.id <= 6}
      >
        View Course
      </Button>
      <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose}>
        <DialogTitle sx={styles.courseDialog.title}>{course.title}</DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item>
              <CourseRatingAverage rating={rating} />
              <CourseTimeAndUpdated
                lastUpdated={course.lastUpdated}
                timeToComplete={course.timeToComplete}
              />
            </Grid>
            <Grid item sx={{ paddingLeft: 15 }}>
              <img src={CourseDialogImage} height="100" width="100" alt="course icon" />
            </Grid>
          </Grid>
          <DialogTitle sx={{ textAlign: 'center' }}>Who Is This Course For?</DialogTitle>
          <CoursePeopleFor whoFor={course.whoFor} />
          <DialogTitle sx={{ textAlign: 'center' }}>About</DialogTitle>
          <DialogContentText>
            {course.description}
          </DialogContentText>
          <CourseContentsList sx={{ textAlign: 'center' }} sections={course.sections} currentSection={position} completedSections={position - 1} overflow={false} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Exit</Button>
          {pushCourse()}
        </DialogActions>
      </Dialog>
    </div>
  );
}

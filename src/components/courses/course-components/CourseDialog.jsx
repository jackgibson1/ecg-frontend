/* eslint-disable react/prop-types */
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useHistory } from 'react-router-dom';
import ExploreIcon from '@mui/icons-material/Explore';
import CourseService from '../../../services/course.service';
import CourseContentsList from './CourseContentsList';
import CourseRatingAverage from './CourseRatingAverage';
import CourseTimeAndUpdated from './CourseTimeAndUpdated';
import CoursePeopleFor from './CoursePeopleFor';
import CourseDialogImage from '../../../assets/images/courses/courseImage.png';

// eslint-disable-next-line react/jsx-props-no-spreading
const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function CourseDialog(props) {
  const [open, setOpen] = React.useState(false);

  const history = useHistory();
  const { course, position, rating } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        sx={{ color: '#EE3233', marginBottom: '2%', boxShadow: '0 8px 40px -12px rgba(0,0,0,1)' }}
        variant="outlined"
        onClick={handleClickOpen}
        align="center"
        endIcon={<ExploreIcon />}
        disabled={course.id >= 3 && course.id <= 6}
      >
        View Course
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ textAlign: 'center', textDecoration: 'underline' }}>{course.title}</DialogTitle>
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
              <img src={CourseDialogImage} height="100" width="100" alt="medic" />
            </Grid>
          </Grid>
          <DialogTitle sx={{ textAlign: 'center' }}>Who Is This Course For?</DialogTitle>
          <CoursePeopleFor whoFor={course.whoFor} />
          <DialogTitle sx={{ textAlign: 'center' }}>About</DialogTitle>
          <DialogContentText id="alert-dialog-slide-description">
            {course.description}
          </DialogContentText>
          <CourseContentsList
            sx={{ textAlign: 'center' }}
            sections={course.sections}
            currentSection={position}
            completedSections={position - 1}
            overflow={false}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Exit</Button>
          {pushCourse()}
        </DialogActions>
      </Dialog>
    </div>
  );
}

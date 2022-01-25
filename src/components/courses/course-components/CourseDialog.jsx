/* eslint-disable react/prop-types */
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useHistory } from 'react-router-dom';
import userService from '../../../services/user.service';
import CourseContentsList from './CourseContentsList';
import CourseRating from './CourseRating';
import CourseTimeAndUpdated from './CourseTimeAndUpdated';
import CoursePeopleFor from './CoursePeopleFor';

// eslint-disable-next-line react/jsx-props-no-spreading
const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function CourseDialog(props) {
  const [open, setOpen] = React.useState(false);

  const history = useHistory();
  const { course, position } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const pushCourse = () => {
    if (position === 0) {
      return <Button onClick={() => history.push(course.path)}>Start Course</Button>;
    } if (position > 0 && position <= course.sections.length - 1) {
      return <Button onClick={() => history.push(course.path)}>Resume Course</Button>;
    }
    userService.updateCoursePosition(course.id, 0).then((res) => res);
    return <Button onClick={() => history.push(course.path)}>Restart Course</Button>;
  };

  return (
    <div>
      <Button sx={{ backgroundColor: '#A3D6F5', color: '#EE3233', marginBottom: '2%', ':hover': { color: '#FFFFFF' } }} variant="contained" onClick={handleClickOpen} align="center">
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
          <CourseRating readOnly />
          <CourseTimeAndUpdated
            lastUpdated={course.lastUpdated}
            timeToComplete={course.timeToComplete}
          />
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

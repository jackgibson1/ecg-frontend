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
import CourseTimeline from './CourseTimeline';
import userService from '../../../services/user.service';

// eslint-disable-next-line react/jsx-props-no-spreading
const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function CourseDialog(props) {
  const [open, setOpen] = React.useState(false);

  const history = useHistory();
  const {
    // eslint-disable-next-line react/prop-types
    course, position,
  } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const pushCourse = () => {
    if (position === 0) {
      return <Button onClick={() => history.push(course.path)}>Start Course</Button>;
    } if (position > 0 && position < course.sections.length - 1) {
      return <Button onClick={() => history.push(course.path)}>Resume Course</Button>;
    }
    userService.updateCoursePosition(course.id, 0).then((res) => res);
    return <Button onClick={() => history.push(course.path)}>Restart Course</Button>;
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} align="center">
        View Course
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ textAlign: 'center' }}>{course.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {course.description}
          </DialogContentText>
          <DialogTitle sx={{ textAlign: 'center' }}>Course Contents</DialogTitle>
          <CourseTimeline sections={course.sections} />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Exit</Button>
          {pushCourse()}
        </DialogActions>
      </Dialog>
    </div>
  );
}

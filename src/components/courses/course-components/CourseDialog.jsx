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

// eslint-disable-next-line react/jsx-props-no-spreading
const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function CourseDialog(props) {
  const history = useHistory();
  const {
    // eslint-disable-next-line react/prop-types
    title, description, open, setOpen, sections, path,
  } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const startCourse = () => {
    history.push(path);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        View Course
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ textAlign: 'center' }}>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {description}
          </DialogContentText>
          <DialogTitle sx={{ textAlign: 'center' }}>Course Contents</DialogTitle>
          <CourseTimeline sections={sections} />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Exit</Button>
          <Button onClick={startCourse}>Start Course</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

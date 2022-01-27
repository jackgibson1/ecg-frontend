/* eslint-disable no-unused-vars */
import * as React from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import UserService from '../../../services/user.service';
import CourseService from '../../../services/course.service';
import CreditEarnedModal from './CreditEarnedModal';

export default function CourseCompleteButton(props) {
  // eslint-disable-next-line react/prop-types
  const { courseId, userRating } = props;
  const [query, setQuery] = React.useState('idle');
  const [completeCourseResponse, setCompleteCourseResponse] = React.useState({ creditEarned: false, message: '' });
  const [submitRatingResponse, setSubmitRatingResponse] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  const timerRef = React.useRef();

  React.useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    [],
  );

  const handleClickQuery = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (query !== 'idle') {
      setQuery('idle');
      return;
    }

    setQuery('progress');

    timerRef.current = window.setTimeout(() => {
      Promise.all(
        [
          UserService.completeCourse(courseId),
          CourseService.submitCourseRating(courseId, userRating),
        ],
      ).then((resolvedPromises) => {
        const completedCourse = resolvedPromises[0];
        const submittedRating = resolvedPromises[1];

        if (completedCourse.data.creditEarned) setOpenModal(true);
        setCompleteCourseResponse(completedCourse.data);

        if (submittedRating.data.success) {
          setSubmitRatingResponse('Your rating has been successfully submitted, thank you!');
        } else {
          // eslint-disable-next-line quotes
          setSubmitRatingResponse(`You've already submitted a rating for this course.`);
        }
        setQuery('success');
      }).catch(() => {
        setQuery('error');
      });
    }, 2000);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ height: 40 }}>
        {query === 'success' ? (
          <div>
            <Typography>{submitRatingResponse}</Typography>
            <Typography>{completeCourseResponse.message}</Typography>
          </div>
        ) : (
          <Fade
            in={query === 'progress'}
            style={{
              transitionDelay: query === 'progress' ? '10ms' : '0ms',
            }}
            unmountOnExit
          >
            <CircularProgress />
          </Fade>
        )}
      </Box>
      <Button sx={{ backgroundColor: '#A3D6F5', color: '#EE3233', borderRadius: 3, m: 2 }} onClick={handleClickQuery}>
        {query === 'idle' && 'Complete Course'}
      </Button>
      <CreditEarnedModal open={openModal} setOpen={setOpenModal} />
    </Box>
  );
}

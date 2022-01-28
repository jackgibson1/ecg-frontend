/* eslint-disable no-unused-vars */
import * as React from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import CheckIcon from '@mui/icons-material/Check';
import GridViewIcon from '@mui/icons-material/GridView';
import UserService from '../../../services/user.service';
import CourseService from '../../../services/course.service';
import CreditEarnedModal from './CreditEarnedModal';

export default function CourseCompleteButton(props) {
  const history = useHistory();
  // eslint-disable-next-line react/prop-types
  const { courseId, userRating, query, setQuery } = props;
  const [completeCourseResponse, setCompleteCourseResponse] = React.useState('');
  const [submitRatingResponse, setSubmitRatingResponse] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const handleClickQuery = () => {
    if (userRating === 0) {
      setQuery('norating');
      return;
    }

    if (query === 'success') {
      // eslint-disable-next-line react/prop-types
      history.push('/courses');
      return;
    }

    setQuery('progress');

    window.setTimeout(() => {
      Promise.all(
        [
          UserService.completeCourse(courseId),
          CourseService.submitCourseRating(courseId, userRating),
        ],
      ).then((resolvedPromises) => {
        const completedCourse = resolvedPromises[0];
        const submittedRating = resolvedPromises[1];

        if (completedCourse.data.creditEarned) {
          setOpenModal(true);
          setCompleteCourseResponse(<Alert severity="success">Successfully completed course and earned a credit!</Alert>);
        } else {
          setCompleteCourseResponse(<Alert severity="success">Successfully completed course again! (Note you only earn credits for new courses/quizzes!)</Alert>);
        }

        if (submittedRating.data.success) {
          setSubmitRatingResponse(<Alert severity="success">Your rating has been successfully submitted, thank you!</Alert>);
        } else {
          setSubmitRatingResponse(<Alert severity="info">You&apos;ve already submitted a rating for this course.</Alert>);
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
          <Stack sx={{ width: '100%', mt: 13 }} spacing={2} direction="row">
            <Typography>{submitRatingResponse}</Typography>
            <Typography>{completeCourseResponse}</Typography>
          </Stack>
        ) : (
          <Fade
            sx={{ m: 15 }}
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
      {(query === 'idle' || query === 'norating') && (
      <Button sx={{ borderRadius: 3, mt: 15 }} color="success" variant="contained" onClick={handleClickQuery} endIcon={<CheckIcon />}>
        Get Credit
      </Button>
      )}
      {query === 'success' && (
      <Button sx={{ borderRadius: 3, mt: 15 }} variant="contained" onClick={handleClickQuery} endIcon={<GridViewIcon />}>
        Back To Courses
      </Button>
      )}
      {query === 'norating' && (
      <Alert severity="error">Please submit rating, your feedback is much appreciated.</Alert>
      )}
      <CreditEarnedModal open={openModal} setOpen={setOpenModal} />
    </Box>
  );
}

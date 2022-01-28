/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CourseCard from './CourseCard';
import courseDetails from './courseDetails';
import CourseBackgroundImage from '../../../assets/images/courses/coursebackground.jpg';
import authService from '../../../services/auth.service';
import UserService from '../../../services/user.service';
import CourseService from '../../../services/course.service';
import LoadingPage from '../../LoadingPage';

function Courses(props) {
  const [isLoading, setLoading] = useState(true);
  const [positions, setPositions] = useState([]);
  const [ratings, setRatings] = useState([]);

  if (!authService.isLoggedIn()) {
    // eslint-disable-next-line react/prop-types
    return <Redirect to={{ pathname: '/login', state: { from: props.location, alert: true } }} />;
  }

  useEffect(() => {
    Promise.all([UserService.getAllCoursePositions(), CourseService.getAllCourseRatings()])
      .then((resolvedPromises) => {
        const coursePositions = resolvedPromises[0];
        const courseRatings = resolvedPromises[1];

        setPositions(coursePositions.data);
        setRatings(courseRatings.data);
        setLoading(false);
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <LoadingPage text="Loading all courses" />;
  }

  return (
    <Box sx={{
      paddingTop: '2%', paddingLeft: '2%', paddingBottom: '2%', backgroundImage: `url(${CourseBackgroundImage})`, backgroundSize: 'cover',
    }}
    >
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {courseDetails.map((course, index) => (
          <Grid item xs={2} sm={4} md={4} key={Math.random()}>
            <CourseCard
              course={course}
              position={positions[index].position}
              rating={ratings[index]}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Courses;

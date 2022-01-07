import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CourseCard from './CourseCard';
import courseDetails from './courseDetails';
import CourseBackgroundImage from '../assets/images/coursebackground.jpeg';

function Courses() {
  return (
    <Box sx={{
      paddingTop: '2%', paddingLeft: '2%', paddingBottom: '2%', backgroundImage: `url(${CourseBackgroundImage})`, backgroundSize: 'cover',
    }}
    >
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {courseDetails.map((course) => (
          <Grid item xs={2} sm={4} md={4}>
            <CourseCard
              title={course.title}
              description={course.description}
              image={course.image}
              sections={course.sections}
              path={course.path}
            />
          </Grid>
        ))}
      </Grid>
    </Box>

  );
}

export default Courses;

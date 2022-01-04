import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CourseCard from './CourseCard';

import anatomyCard from '../assets/images/courses/anatomyCard.jpeg';
import conditionsCard from '../assets/images/courses/conditionsCard.jpeg';
import documentCard from '../assets/images/courses/documentCard.jpg';
import introductionCard from '../assets/images/courses/introductionCard.jpeg';
import readingCard from '../assets/images/courses/readingCard.jpeg';

const courseDetails = [
  {
    title: '1. Basic Anatomy & Physiology Of The Heart',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: anatomyCard,
  },
  {
    title: '2. ECG Introduction',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: introductionCard,
  },
  {
    title: '3. How To Read An ECG',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: readingCard,
  },
  {
    title: '4. How To Document An ECG',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: documentCard,
  },
  {
    title: '5. Condtions',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: conditionsCard,
  },
];

function Courses() {
  return (
    <Box sx={{ paddingTop: '2%', paddingLeft: '2%', paddingBottom: '2%' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {courseDetails.map((course) => (
          <Grid item xs={2} sm={4} md={4}>
            <CourseCard
              title={course.title}
              description={course.description}
              image={course.image}
            />
          </Grid>
        ))}
      </Grid>
    </Box>

  );
}

export default Courses;

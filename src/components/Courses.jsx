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
    title: '1. Anatomy, Blood Flow & Contraction Of The Heart',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    sections: ['1. Heart Introduction', '2. Anatomy Outside The Heart', '3. Anatomy Inside The Heart', '4. Blood Flow', '5. Contraction'],
    image: anatomyCard,
  },
  {
    title: '2. ECG Introduction',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    sections: ['1. Heart Introduction', '2. Anatomy Outside The Heart', '3. Anatomy Inside The Heart', '4. Blood Flow', '5. Contraction'],
    image: introductionCard,
  },
  {
    title: '3. Parts Of The ECG Explained',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    sections: ['1. Heart Introduction', '2. Anatomy Outside The Heart', '3. Anatomy Inside The Heart', '4. Blood Flow', '5. Contraction'],
    image: readingCard,
  },
  {
    title: '4. How To Read An ECG',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    sections: ['1. Heart Introduction', '2. Anatomy Outside The Heart', '3. Anatomy Inside The Heart', '4. Blood Flow', '5. Contraction'],
    image: readingCard,
  },
  {
    title: '5. How To Document An ECG',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    sections: ['1. Heart Introduction', '2. Anatomy Outside The Heart', '3. Anatomy Inside The Heart', '4. Blood Flow', '5. Contraction'],
    image: documentCard,
  },
  {
    title: '6. Conditions',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    sections: ['1. Heart Introduction', '2. Anatomy Outside The Heart', '3. Anatomy Inside The Heart', '4. Blood Flow', '5. Contraction'],
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
              sections={course.sections}
            />
          </Grid>
        ))}
      </Grid>
    </Box>

  );
}

export default Courses;

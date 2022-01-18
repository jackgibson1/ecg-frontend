/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { CircularProgress, Typography } from '@mui/material';
import CourseBackground from '../../../assets/images/courses/coursebackground.jpeg';
import CourseProgressStepper from '../../courses/course-components/CourseProgressStepper';
import quizDetails from './quizDetails';

// styled paper used to hold overarching course content
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '520px',
}));

export default function QuizLayout(props) {
  // get path and find quiz which matches current path
  const { pathname } = props.location;
  const quiz = quizDetails.find((qz) => qz.path === pathname);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleNext = async () => {

  };

  const handleBack = () => {

  };

  if (loading) {
    return (
      <div style={{
        display: 'flex', justifyContent: 'center', marginTop: '5%', textAlign: 'center',
      }}
      >
        <CircularProgress sx={{ position: 'absolute' }} />
        <Typography sx={{ position: 'absolute', marginTop: '5%' }} variant="h3">Loading your Quiz!</Typography>
      </div>
    );
  }

  return (
    <Grid sx={{ paddingTop: '2%', paddingLeft: '2%', paddingRight: '2%' }} container justifyContent="center">
      <Grid item xs={2}>
        <Item>
          Questions
        </Item>
      </Grid>
      <Grid item xs={10}>
        <Item>
          <Box sx={{
            borderColor: 'grey.500', border: 5, borderRadius: 5, width: '100%', height: '100%', backgroundImage: `url(${CourseBackground})`, backgroundSize: 'cover',
          }}
          >
            {quiz.questions[0].component}
          </Box>
        </Item>
        <Box sx={{
          borderColor: 'grey.500', border: 2, borderRadius: 5, width: '25%', height: '8%', alignItems: 'center', margin: 'auto', marginTop: '1%',
        }}
        >
          <CourseProgressStepper
            currentSection={0}
            handleNext={handleNext}
            handleBack={handleBack}
            totalSections={quiz.questions.length}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

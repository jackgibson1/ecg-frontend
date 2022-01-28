/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import courseDetails from './courseDetails';
import CourseContentsList from './CourseContentsList';
import CourseBackground from '../../../assets/images/courses/coursebackground.jpeg';
import CourseProgressStepper from './CourseProgressStepper';
import CourseCompleted from './CourseCompleted';
import UserService from '../../../services/user.service';
import LoadingPage from '../../LoadingPage';

// styled paper used to hold overarching course content
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '540px',
}));

export default function CourseLayout(props) {
  // get path and find course which matches current path
  const { pathname, state } = props.location;
  const course = courseDetails.find((cse) => cse.path === pathname);

  const [loading, setLoading] = useState(true);

  // state to track users current position (navigating back and forth through sections)
  const [currentSection, setCurrentSection] = React.useState(0);
  // state to track user completed sections - used to disable list items in CourseContentsList child
  const [completedSections, setCompletedSections] = React.useState(0);

  // on page render get current course position and set hooks accordingly
  useEffect(() => {
    UserService.getCoursePosition(course.id).then((res) => {
      setCurrentSection(res.data.position);
      setCompletedSections(res.data.position - 1);
    });

    const timer = setTimeout(() => setLoading(false), 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleNext = async () => {
    // only update position if completing section for first time
    if (currentSection > completedSections) {
      await UserService.updateCoursePosition(course.id, currentSection + 1).then(() => {
        setCompletedSections(currentSection);
      });
    }

    // increment current section
    setCurrentSection(currentSection + 1);
  };

  const handleBack = () => {
    // decrement current section
    setCurrentSection((prevCurrentSection) => prevCurrentSection - 1);
  };

  if (loading) {
    let text = 'Loading';
    if (typeof state !== 'undefined') {
      text = state.process;
    }
    return <LoadingPage text={text} />;
  }

  return (
    <Grid sx={{ paddingTop: '1%', paddingLeft: '0%', paddingRight: '0%' }} container justifyContent="center">
      <Grid item xs={2}>
        <Item>
          <CourseContentsList
            sections={course.sections}
            currentSection={currentSection}
            completedSections={completedSections}
            overflow
          />
        </Item>
      </Grid>
      <Grid item xs={10}>
        <Item>
          <Box sx={{
            borderColor: 'grey.500', border: 5, borderRadius: 10, width: '100%', height: '100%', backgroundImage: `url(${CourseBackground})`, backgroundSize: 'cover', paddingRight: '1%',
          }}
          >
            {currentSection === course.components.length
              ? <CourseCompleted course={course} /> : course.components[currentSection]}
          </Box>
        </Item>
        <Box sx={{
          borderColor: 'grey.500', border: 2, borderRadius: 5, width: '25%', height: '8%', alignItems: 'center', margin: 'auto', marginTop: '1%',
        }}
        >
          <CourseProgressStepper
            currentSection={currentSection}
            handleNext={handleNext}
            handleBack={handleBack}
            totalSections={course.components.length}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

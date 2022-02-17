/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import courseDetails from './courseDetails';
import CourseContentsList from './CourseContentsList';
import CourseBackground from '../../../assets/images/courses/courseBG.jpeg';
import CourseProgressStepper from './CourseProgressStepper';
import CourseCompleted from './CourseCompleted';
import CourseService from '../../../services/course.service';
import LoadingPage from '../../LoadingPage';

// styled paper used to hold overarching course content
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '530px',
  borderRadius: 20,
  marginLeft: '5px',
  marginRight: '5px',
}));

// eslint-disable-next-line no-unused-vars
const CourseItem = styled(Box)(({ theme }) => ({
  borderLeft: 10,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
  height: '530px',
  borderRadius: 20,
  width: '100%',
  backgroundImage: `url(${CourseBackground})`,
  backgroundSize: 'cover',
  paddingRight: '1%',
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
    CourseService.getCoursePosition(course.id).then((res) => {
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
      await CourseService.updateCoursePosition(course.id, currentSection + 1).then(() => {
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

  const handleClickSection = (section) => {
    setCurrentSection(section);
  };

  if (loading) {
    let text = 'Loading';
    if (typeof state !== 'undefined') {
      text = state.process;
    }
    return <LoadingPage text={text} />;
  }

  return (
    <Grid sx={{ paddingTop: '1%', paddingRight: '0.5%' }} container justifyContent="center">
      <Grid item xs={2}>
        <Item sx={{ boxShadow: 10, border: 1, borderColor: 'blue' }}>
          <CourseContentsList
            sections={course.sections}
            currentSection={currentSection}
            completedSections={completedSections}
            handleClickSection={handleClickSection}
            overflow
          />
        </Item>
        <Alert severity="success" sx={{ boxShadow: 10, borderRadius: 5, marginTop: '3%', marginLeft: '5px', marginRight: '5px' }}>Progress auto saves.</Alert>
      </Grid>
      <Grid item xs={10}>
        <CourseItem sx={{ boxShadow: 10, border: 1, borderColor: 'red' }}>
          {currentSection === course.sections.length
            ? <CourseCompleted course={course} history={props.history} />
            : course.sections[currentSection].component }
        </CourseItem>
        <Box sx={{
          border: 1, borderRadius: 2, width: '25%', height: '8%', margin: 'auto', marginTop: '1%', boxShadow: 10,
        }}
        >
          <CourseProgressStepper
            currentSection={currentSection}
            handleNext={handleNext}
            handleBack={handleBack}
            totalSections={course.sections.length}
          />

        </Box>
      </Grid>
    </Grid>
  );
}

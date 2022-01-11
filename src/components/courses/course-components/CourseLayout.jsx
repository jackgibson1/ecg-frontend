/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import courseDetails from './courseDetails';
import CourseContentsList from './CourseContentsList';
import CourseBackground from '../../../assets/images/courses/coursebackground.jpeg';
import CourseProgressStepper from './CourseProgressStepper';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '520px',
}));

// eslint-disable-next-line no-unused-vars
const NavigationArea = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '10%',
  marginTop: '1%',
}));

export default function CourseLayout(props) {
  // eslint-disable-next-line react/prop-types
  const { pathname } = props.location;
  const course = courseDetails.find((cse) => cse.path === pathname);

  const [activeSection, setActiveSection] = React.useState(0);
  const [completedSection, setCompletedSection] = React.useState(0);

  const handleNext = () => {
    if (activeSection === course.components.length - 1) {
      // eslint-disable-next-line react/prop-types
      props.history.push('/courses');
      return;
    }
    setActiveSection((prevActiveSection) => prevActiveSection + 1);

    if (activeSection >= completedSection) {
      setCompletedSection(activeSection);
    }
  };

  const handleBack = () => {
    setActiveSection((prevActiveSection) => prevActiveSection - 1);
  };

  return (
    <Grid sx={{ paddingTop: '2%', paddingLeft: '2%', paddingRight: '2%' }} container justifyContent="center">
      <Grid item xs={2}>
        <Item>
          <CourseContentsList
            sections={course.sections}
            activeSection={activeSection}
            completedSection={completedSection}
          />
        </Item>
      </Grid>
      <Grid item xs={10}>
        <Item>
          <Box sx={{
            borderColor: 'grey.500', border: 5, borderRadius: 5, width: '100%', height: '100%', backgroundImage: `url(${CourseBackground})`, backgroundSize: 'cover',
          }}
          >
            {course.components[activeSection]}
          </Box>
        </Item>
        <Box sx={{
          borderColor: 'grey.500', border: 2, borderRadius: 5, width: '25%', height: '8%', alignItems: 'center', margin: 'auto', marginTop: '1%',
        }}
        >
          <CourseProgressStepper
            activeSection={activeSection}
            handleNext={handleNext}
            handleBack={handleBack}
            totalSections={course.components.length}
          />
        </Box>

      </Grid>
    </Grid>
  );
}

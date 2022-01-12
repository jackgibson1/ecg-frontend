/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import courseDetails from './courseDetails';
import CourseContentsList from './CourseContentsList';
import CourseBackground from '../../../assets/images/courses/coursebackground.jpeg';
import CourseProgressStepper from './CourseProgressStepper';
import UserService from '../../../services/user.service';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '520px',
}));

export default function CourseLayout(props) {
  // eslint-disable-next-line react/prop-types
  const { pathname } = props.location;
  const course = courseDetails.find((cse) => cse.path === pathname);

  const [currentSection, setCurrentSection] = React.useState(0);
  const [completedSections, setCompletedSections] = React.useState(0);

  useEffect(() => {
    UserService.getCoursePosition(course.id).then((res) => {
      setCurrentSection(res.data.position);
      setCompletedSections(res.data.position === 0 ? 0 : res.data.position - 1);
    });
  }, []);

  const handleNext = async () => {
    if (currentSection > completedSections) {
      await UserService.updateCoursePosition(course.id, currentSection + 1).then(() => {
        setCompletedSections(currentSection);
      });
    }

    if (currentSection === course.components.length - 1) {
      // eslint-disable-next-line react/prop-types
      props.history.push('/courses');
      return;
    }
    setCurrentSection(currentSection + 1);
  };

  const handleBack = () => {
    setCurrentSection((prevCurrentSection) => prevCurrentSection - 1);
  };

  return (
    <Grid sx={{ paddingTop: '2%', paddingLeft: '2%', paddingRight: '2%' }} container justifyContent="center">
      <Grid item xs={2}>
        <Item>
          <CourseContentsList
            sections={course.sections}
            currentSection={currentSection}
            completedSections={completedSections}
          />
        </Item>
      </Grid>
      <Grid item xs={10}>
        <Item>
          <Box sx={{
            borderColor: 'grey.500', border: 5, borderRadius: 5, width: '100%', height: '100%', backgroundImage: `url(${CourseBackground})`, backgroundSize: 'cover',
          }}
          >
            {course.components[currentSection]}
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

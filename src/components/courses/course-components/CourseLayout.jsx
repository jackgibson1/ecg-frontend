import React, { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CourseDetails from './CourseDetails';
import CourseContentsList from './CourseContentsList';
import CourseProgressStepper from './CourseProgressStepper';
import CourseCompleted from './CourseCompleted';
import CourseService from '../../../services/course.service';
import LoadingPage from '../../misc/LoadingPage';
import { CourseContentsLayout, CourseSectionLayout, styles } from '../styles';

export default function CourseLayout(props) {
  // get path and find course which matches current path
  const { pathname, state } = props.location;
  const course = CourseDetails.find((cse) => cse.path === pathname);
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
    <Grid sx={styles.courseLayout.leftGrid} container justifyContent="center">
      <Grid item xs={2}>
        <CourseContentsLayout sx={styles.courseLayout.courseContents}>
          <CourseContentsList
            sections={course.sections}
            currentSection={currentSection}
            completedSections={completedSections}
            handleClickSection={handleClickSection}
            overflow
          />
        </CourseContentsLayout>
        <Alert severity="success" sx={styles.courseLayout.savesAlert}>Progress auto saves.</Alert>
      </Grid>
      <Grid item xs={10} sx={{ paddingRight: '0.2%' }}>
        <CourseSectionLayout sx={styles.courseLayout.courseSection}>
          {currentSection === course.sections.length
            ? <CourseCompleted course={course} history={props.history} />
            : course.sections[currentSection].component }
        </CourseSectionLayout>
        <Box sx={styles.courseLayout.stepperBox}>
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

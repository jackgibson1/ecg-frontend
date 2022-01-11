import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function CourseProgressStepper(props) {
  const theme = useTheme();
  const {
    // eslint-disable-next-line react/prop-types
    activeSection, handleNext, handleBack, totalSections,
  } = props;

  return (
    <MobileStepper
      variant="progress"
      steps={totalSections}
      position="static"
      activeStep={activeSection}
      sx={{
        maxWidth: 400, flexGrow: 1, borderRadius: 3, backgroundColor: 'transparent',
      }}
      nextButton={(
        <Button size="small" onClick={handleNext}>
          {activeSection === totalSections - 1 ? 'Finish' : 'Next'}
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      )}
      backButton={(
        <Button size="small" onClick={handleBack} disabled={activeSection === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      )}
    />
  );
}
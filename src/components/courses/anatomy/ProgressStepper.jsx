import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function ProgressStepper(props) {
  const {
    // eslint-disable-next-line react/prop-types
    counter, handleNext, handleBack, numberOfSections,
  } = props;
  const theme = useTheme();

  return (
    <MobileStepper
      variant="dots"
      steps={numberOfSections}
      position="static"
      activeStep={counter}
      sx={{
        maxWidth: 400, flexGrow: 1, borderRadius: 3, backgroundColor: 'transparent',
      }}
      nextButton={(
        <Button size="small" onClick={handleNext} disabled={counter === (numberOfSections - 1)}>
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      )}
      backButton={(
        <Button size="small" onClick={handleBack} disabled={counter === 0}>
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

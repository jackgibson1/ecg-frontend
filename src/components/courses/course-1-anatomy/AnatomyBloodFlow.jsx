/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ProgressStepper from './ProgressStepper';

// import all bloodfloow animations
import completeBloodFlowAnimation from '../../../assets/images/courses/course-1-anatomy/bloodflow/bloodflowintro.gif';
import stepOneAnimation from '../../../assets/images/courses/course-1-anatomy/bloodflow/step1flow.gif';
import stepTwoAnimation from '../../../assets/images/courses/course-1-anatomy/bloodflow/step2flow.gif';
import stepThreeAnimation from '../../../assets/images/courses/course-1-anatomy/bloodflow/step3flow.gif';
import stepFourAnimation from '../../../assets/images/courses/course-1-anatomy/bloodflow/step4flow.gif';
import stepFiveAnimation from '../../../assets/images/courses/course-1-anatomy/bloodflow/step5flow.gif';

const bloodFlowSections = [
  { name: 'Introduction', description: 'Blood enters the right side of the heart first. From there it is pumped to the lungs to absorb oxygen. The blood is then returned to the heart, but this time to the left side. Then it is pumped into the aorta, and from there to the rest of the body. Press the arrow button to see each step in the flow of blood through the heart and lungs.', image: completeBloodFlowAnimation, beenViewed: true },
  { name: 'Step 1', description: 'Deoxygenated blood from the upper and lower body enters the right atrium of the heart.', image: stepOneAnimation, beenViewed: false },
  { name: 'Step 2', description: 'The right ventricle pumps the blood to the lungs via the pulmonary arteries.', image: stepTwoAnimation, beenViewed: false },
  { name: 'Step 3', description: 'In the lungs, the blood gives up carbon dioxide and absorbs oxygen.', image: stepThreeAnimation, beenViewed: false },
  { name: 'Step 4', description: 'The oxygenated blood is returned to the left atrium of the heart.', image: stepFourAnimation, beenViewed: false },
  { name: 'Step 5', description: 'The left ventricle pumps the oxygenated blood into the aorta. From here, it is carried to the rest of the body so it can deliver oxygen to all the tissues and organs.', image: stepFiveAnimation, beenViewed: false },
  { name: 'Summary', description: 'Blood is continuously pumped through the heart so that the rest of the body gets all the oxygen it needs.', image: completeBloodFlowAnimation, beenViewed: false },
];

export default function AnatomyBloodFlow() {
  const [counter, setCounter] = useState(0);

  const handleNext = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleBack = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div>
      <Typography variant="h5" sx={{ marginTop: '1%', fontWeight: 'bold' }}>Blood Flow Through The Heart</Typography>
      <Grid fluid container justify="center">
        <Grid item xs={6}>
          <img src={bloodFlowSections[counter].image} height="400" alt="heart" />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" sx={{ marginTop: '15%', fontWeight: 'bold' }}>{bloodFlowSections[counter].name}</Typography>
          <Typography variant="body1" align="left">
            {bloodFlowSections[counter].description}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <ProgressStepper
            counter={counter}
            handleNext={handleNext}
            handleBack={handleBack}
            numberOfSections={bloodFlowSections.length}
          />
        </Grid>
      </Grid>
    </div>
  );
}

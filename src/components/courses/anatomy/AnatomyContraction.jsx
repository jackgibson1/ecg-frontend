/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import ProgressStepper from './ProgressStepper';

// import all contraction animations
import completeContractionAnimation from '../../../assets/images/courses/anatomy/contraction/contractionintro.gif';
import stepOneAnimation from '../../../assets/images/courses/anatomy/contraction/step1contraction.gif';
import stepTwoAnimation from '../../../assets/images/courses/anatomy/contraction/step2contraction.gif';
import stepThreeAnimation from '../../../assets/images/courses/anatomy/contraction/step3contraction.gif';
import stepFourAnimation from '../../../assets/images/courses/anatomy/contraction/step4contraction.gif';

const contractionSections = [
  { name: 'Introduction', description: 'The physical "beating" of the heart is what pushes the blood around the body. This is really the action of two separate coordinated pumps: the right side of the heart and the left side of the heart. Each pump has its own atrium, ventricle, inlet valve and outlet valve. The right side of the heart receives blood from the body and pumps it to the lungs. The left side of the heart receives blood from the lungs and pumps it to the rest of the body. Press the next button to see each step in how the heart pumps blood.', image: completeContractionAnimation, beenViewed: true },
  { name: 'Step 1', description: 'At the start of every heartbeat, the heart is relaxed. The inlet valves are open and blood flows freely from the veins into both the atria and ventricles.', image: stepOneAnimation, beenViewed: false },
  { name: 'Step 2', description: 'The right and left atria contract, or squeeze, pushing more blood into the ventricles. This last push causes the ventricles to fill completely with blood.', image: stepTwoAnimation, beenViewed: false },
  { name: 'Step 3', description: 'The right and left ventricle walls contract, or squeeze, causing the pressure inside the ventricle to rise. This forces the inlet valves to close. The closing valves make a thumping noise, which is the first heart sound. This is often called the "lub" sound. The pressure continues to rise inside each ventricle until the outlet valves are forced open. Blood is then pumped out into the pulmonary arteries and the aorta.', image: stepThreeAnimation, beenViewed: false },
  { name: 'Step 4', description: 'The ventricle walls relax and the outlet valves close, preventing blood from flowing backwards into the heart. Once again, the closing valves make a thumping noise. This is the second heart sound. It is known as the "dub" sound.The inlet valves open and the heart fills with blood once more.', image: stepFourAnimation, beenViewed: false },
  { name: 'Summary', description: 'Joined together, all four steps make up a full heartbeat, and the familiar "lub-dub" rhythm.', image: completeContractionAnimation, beenViewed: false },
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
      <Typography variant="h5" sx={{ marginTop: '1%', fontWeight: 'bold' }}>Contraction Of The Heart</Typography>
      <Grid fluid container justify="center">
        <Grid item xs={6}>
          <img src={contractionSections[counter].image} height="400" alt="heart" />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" sx={{ marginTop: '15%', fontWeight: 'bold' }}>{contractionSections[counter].name}</Typography>
          <Typography variant="body1" align="left">
            {contractionSections[counter].description}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <ProgressStepper
            counter={counter}
            handleNext={handleNext}
            handleBack={handleBack}
            numberOfSections={contractionSections.length}
          />
        </Grid>
      </Grid>
    </div>
  );
}

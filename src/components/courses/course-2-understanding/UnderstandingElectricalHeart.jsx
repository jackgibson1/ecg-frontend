/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import ProgressStepper from '../course-components/ProgressStepper';

// import all ecg heart animations
import summary from '../../../assets/images/courses/course-2-understanding/wave-summary/summary.gif';
import stepOne from '../../../assets/images/courses/course-2-understanding/wave-summary/step1.gif';
import stepTwo from '../../../assets/images/courses/course-2-understanding/wave-summary/step2.gif';
import stepThree from '../../../assets/images/courses/course-2-understanding/wave-summary/step3.gif';
import stepFour from '../../../assets/images/courses/course-2-understanding/wave-summary/step4.gif';
import stepFive from '../../../assets/images/courses/course-2-understanding/wave-summary/step5.gif';

const ecgSections = [
  { name: 'Overview', description: 'You are now aware of all the various waves, segments and intervals. This section will now show each step (with an animated heart) in producing the ECG. Click on the next button within this window to view the first step.', image: summary },
  { name: 'Step 1', description: 'The heart rests for a brief period between each beat. During this time there is no electrical activity.', image: stepOne },
  { name: 'Step 2', description: 'An electrical impulse is generated from a group of pacemaker cells called the sinoatrial (SA) node. This wave of electrical activity spreads from the (SA) node. This wave of electrical activity spreads from the SA node over the right atrium and left atrium, causing a bump in the ECG called the "P wave". The wave of electrical activity is blocked from spreading to the ventricles by a non-conducting band (shown in blue) surrounding the heart valves.', image: stepTwo },
  { name: 'Step 3', description: 'After a short delay at the atrioventricular (AV) node, the electrical impulse travels into a group of special fibres called the bundle of His. This bundle travels through the septum (the wall dividing the left and right ventricles), and then splits into the left and right branches. The branches carry the electrical signal to the walls of the ventricles. On the ECG, this electrical activity appears as a small downward dip called the "Q wave".', image: stepThree },
  { name: 'Step 4', description: 'The electrical impulse travels over the ventricles, causing a large peak in the ECG. This is called the "QRS complex".', image: stepFour },
  { name: 'Step 5', description: 'For a brief time, after the electrical impulse has traveled through the whole heart, there is no electrical activity. Then the heart begins to "recharge" from the inside to the outside. This causes a bump in the ECG, called the "T wave".', image: stepFive },
  { name: 'Summary', description: 'Time after time, the SA node generates electrical impulses. As the electrical currents move through the heart, the muscles of the heart contract and the heart beasts. This all happens very quickly; it only takes about 0.3 seconds for an electrical impulse to travel from the SA node to all the parts of the ventricles. This all continually produces the diagram as shown in section 5 of this course.', image: summary },
];

export default function UnderstandingElectricalHeart() {
  const [counter, setCounter] = useState(0);

  const handleNext = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleBack = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div>
      <Typography variant="h5" sx={{ marginTop: '1%', fontWeight: 'bold' }}>The Electrical Impulse Travelling Through The Heart</Typography>
      <Grid fluid container justify="center">
        <Grid item xs={6}>
          <img src={ecgSections[counter].image} height="400" alt="heart" />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" sx={{ marginTop: '15%', fontWeight: 'bold' }}>{ecgSections[counter].name}</Typography>
          <Typography variant="body1" align="left">
            {ecgSections[counter].description}
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <ProgressStepper
            counter={counter}
            handleNext={handleNext}
            handleBack={handleBack}
            numberOfSections={ecgSections.length}
          />
        </Grid>
      </Grid>
    </div>
  );
}

/* eslint-disable quotes */
import React from 'react';

// importing course card images
import anatomyCard from '../../../assets/images/courses/cards/anatomyCard.jpeg';
import conditionsCard from '../../../assets/images/courses/cards/conditionsCard.jpeg';
import documentCard from '../../../assets/images/courses/cards/documentCard.jpg';
import introductionCard from '../../../assets/images/courses/cards/introductionCard.jpg';
import readingCard from '../../../assets/images/courses/cards/readingCard.jpeg';
import partsCard from '../../../assets/images/courses/cards/partsCard.jpg';

// (1) Anatomy Course Components
import AnatomyIntroduction from '../course-1-anatomy/AnatomyIntroduction';
import AnatomyOutside from '../course-1-anatomy/AnatomyOutside';
import AnatomyInside from '../course-1-anatomy/AnatomyInside';
import AnatomyBloodFlow from '../course-1-anatomy/AnatomyBloodFlow';
import AnatomyContraction from '../course-1-anatomy/AnatomyContraction';

// (2) Understanding ECG Course Components
import UnderstandingIntroduction from '../course-2-understanding/UnderstandingIntroduction';
import UnderstandingWaves from '../course-2-understanding/UnderstandingWaves';
import UnderstandingBasicWaves from '../course-2-understanding/UnderstandingBasicWaves';
import UnderstandingSegmentsVsIntervals from '../course-2-understanding/UnderstandingSegmentsVsIntervals';
import UnderstandingThreeSegments from '../course-2-understanding/UnderstandingThreeSegments';
import UnderstandingFourIntervals from '../course-2-understanding/UnderstandingFourIntervals';
import UnderstandingFiveFourThree from '../course-2-understanding/UnderstandingFiveFourThree';
import UnderstandingElectricalHeart from '../course-2-understanding/UnderstandingElectricalHeart';
import UnderstandingReadingGraph from '../course-2-understanding/UnderstandingReadingGraph';

const courseDetails = [
  {
    id: 1,
    title: 'Heart Fundamentals',
    description: "This course serves as an introduction to the heart's structure, covering basic anatomy (inside and out), blood flow through the heart, and what makes the heart beat. Lastly, you will learn about the heart's constant blood supply.",
    sections: ['1. Heart Introduction', '2. Anatomy Outside The Heart', '3. Anatomy Inside The Heart', '4. Blood Flow', '5. Contraction'],
    components: [<AnatomyIntroduction />, <AnatomyOutside />, <AnatomyInside />,
      <AnatomyBloodFlow />, <AnatomyContraction />],
    path: '/courses/anatomy',
    whoFor: ['GPs', 'Foundation Doctors', 'Practice Nurses', 'Medical Students'],
    lastUpdated: '25/01/2022',
    timeToComplete: '10 minutes',
    references: [`[1] “Heart Physiology,” Utoronto.ca, 2015. https://pie.med.utoronto.ca/heart_physiology/ (accessed Jan. 25, 2022).`, `[2] “Vasculature of the Heart - TeachMeAnatomy,” Teachmeanatomy.info, 2013. https://teachmeanatomy.info/thorax/organs/heart/heart-vasculature/ (accessed Jan. 25, 2022).`],
    image: anatomyCard,
  },
  {
    id: 2,
    title: 'Understanding An ECG',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    sections: ['1. Introduction', '2. ECG Waves', '3. Five Basic Waveforms', '4. Segments Vs Intervals', '5. Three Basic Segments', '6. Four Sets Of Intervals', '7. 5-4-3 Rule For ECG Components', '8. Electrical Impulse Travelling Through The Heart', '9. How To Read ECG Paper', '10. Reading ECG paper', '11. Example ECG', '12. How The 12 Lead ECG works', '13. Electrodes', '14. Chest electrodes', '15. Limb electrodes', '16. Leads', '17. Chest leads', '18. Other leads', '19. The shape of the ECG waveform (1)', "20. The shape of the ECG waveform (2)", "21. Localising pathology on the ECG", "22. Cardiac axis", "23. Normal Cardiac Axis", "23. Right Axis Deviation", "24. Left Axis Deviation"],
    components: [<UnderstandingIntroduction />, <UnderstandingWaves />,
      <UnderstandingBasicWaves />, <UnderstandingSegmentsVsIntervals />,
      <UnderstandingThreeSegments />, <UnderstandingFourIntervals />,
      <UnderstandingFiveFourThree />, <UnderstandingElectricalHeart />,
      <UnderstandingReadingGraph />],
    path: '/courses/understanding',
    whoFor: ['GPs', 'Foundation Doctors', 'Practice Nurses', 'Medical Students'],
    lastUpdated: '25/01/2022',
    timeToComplete: '30 minutes',
    image: introductionCard,
  },
  {
    id: 3,
    title: 'Parts Of The ECG Explained',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    sections: ['1. What is an ECG', '2. Parts of the ECG Explained', '3. How to read ECG paper', '4. How the 12 lead ECG works', '5. The shape of the ECG waveform', '6. Localising pathology on the ECG', '7. Cardiac Axis'],
    components: [<AnatomyIntroduction />],
    whoFor: ['GPs', 'Foundation Doctors', 'Practice Nurses', 'Medical Students'],
    path: '/courses/parts',
    lastUpdated: '25/01/2022',
    timeToComplete: '30 minutes',
    image: partsCard,
  },
  {
    id: 4,
    title: 'How To Read An ECG',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    sections: ['1. Confirm Details', '2. Heart Rate', '3. Heart Rythm', '4. Cardiac Axis', '5. P Waves', '6. PR interval', '7. QRS Complex', '8. ST segment', '9. T waves', '10. U Waves', '11. Document Your Interpretation'],
    components: [<AnatomyIntroduction />],
    whoFor: ['GPs', 'Foundation Doctors', 'Practice Nurses', 'Medical Students'],
    path: '/courses/reading',
    lastUpdated: '25/01/2022',
    timeToComplete: '30 minutes',
    image: readingCard,
  },
  {
    id: 5,
    title: 'How To Document An ECG',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    sections: ['1. Documentation Basics', '2. Beginning Your Entry In The Notes', '3. Documenting the ECG results in the notes', '4. Completing the entry in the notes'],
    components: [<AnatomyIntroduction />],
    whoFor: ['GPs', 'Foundation Doctors', 'Practice Nurses', 'Medical Students'],
    path: '/courses/documenting',
    lastUpdated: '25/01/2022',
    timeToComplete: '30 minutes',
    image: documentCard,
  },
  {
    id: 6,
    title: 'Conditions',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    sections: ['1. Heart Introduction', '2. Anatomy Outside The Heart', '3. Anatomy Inside The Heart', '4. Blood Flow', '5. Contraction'],
    components: [<AnatomyIntroduction />],
    whoFor: ['GPs', 'Foundation Doctors', 'Practice Nurses', 'Medical Students'],
    path: '/courses/conditions',
    lastUpdated: '25/01/2022',
    timeToComplete: '30 minutes',
    image: conditionsCard,
  },
];

export default courseDetails;

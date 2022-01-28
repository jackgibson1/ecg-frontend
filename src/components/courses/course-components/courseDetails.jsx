/* eslint-disable quotes */
import React from 'react';

// importing course card images
import anatomyCard from '../../../assets/images/courses/anatomyCard.jpeg';
import conditionsCard from '../../../assets/images/courses/conditionsCard.jpeg';
import documentCard from '../../../assets/images/courses/documentCard.jpg';
import introductionCard from '../../../assets/images/courses/introductionCard.jpg';
import readingCard from '../../../assets/images/courses/readingCard.jpeg';
import partsCard from '../../../assets/images/courses/partsCard.jpg';

// Anatomy Course Components
import AnatomyIntroduction from '../anatomy/AnatomyIntroduction';
import AnatomyOutside from '../anatomy/AnatomyOutside';
import AnatomyInside from '../anatomy/AnatomyInside';
import AnatomyBloodFlow from '../anatomy/AnatomyBloodFlow';
import AnatomyContraction from '../anatomy/AnatomyContraction';

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
    title: 'Understanding An ECG?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    sections: ['1. Introduction', '2. What is a P wave?', '3. What is a PR interval?', '4. What is a QRS complex?', '5. What is an ST segment?', '6. What is a T wave?', '7. What is an RR interval?', '8. What is a QT interval?', '9. Everything together', '10. Reading ECG paper', '11. Example ECG', '12. How The 12 Lead ECG works', '13. Electrodes', '14. Chest electrodes', '15. Limb electrodes', '16. Leads', '17. Chest leads', '18. Other leads', '19. The shape of the ECG waveform (1)', "20. The shape of the ECG waveform (2)", "21. Localising pathology on the ECG", "22. Cardiac axis", "23. Normal Cardiac Axis", "23. Right Axis Deviation", "24. Left Axis Deviation"],
    components: [<AnatomyIntroduction />],
    path: '/courses/introduction',
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

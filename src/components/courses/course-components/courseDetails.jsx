import React from 'react';
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    sections: ['1. Heart Introduction', '2. Anatomy Outside The Heart', '3. Anatomy Inside The Heart', '4. Blood Flow', '5. Contraction'],
    components: [<AnatomyIntroduction />, <AnatomyOutside />, <AnatomyInside />,
      <AnatomyBloodFlow />, <AnatomyContraction />],
    path: '/courses/anatomy',
    image: anatomyCard,
  },
  {
    id: 2,
    title: 'ECG Introduction',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    sections: ['1. What is electrocardiography?', '2. History', '3. Medical Uses', '4. Electrocardiographs', '5. Electrodes & Leads', '6. Limb Leads', '7. Augmented Limb Leads', '8. Precordial Limb Leads', '9. Specialised Leads', '10. Lead Locations On An ECG Report', '11. Contiguity Of Leads'],
    components: [<AnatomyIntroduction />],
    path: '/courses/introduction',
    image: introductionCard,
  },
  {
    id: 3,
    title: 'Parts Of The ECG Explained',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    sections: ['1. What is an ECG', '2. Parts of the ECG Explained', '3. How to read ECG paper', '4. How the 12 lead ECG works', '5. The shape of the ECG waveform', '6. Localising pathology on the ECG', '7. Cardiac Axis'],
    components: [<AnatomyIntroduction />],
    path: '/courses/parts',
    image: partsCard,
  },
  {
    id: 4,
    title: 'How To Read An ECG',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    sections: ['1. Confirm Details', '2. Heart Rate', '3. Heart Rythm', '4. Cardiac Axis', '5. P Waves', '6. PR interval', '7. QRS Complex', '8. ST segment', '9. T waves', '10. U Waves', '11. Document Your Interpretation'],
    components: [<AnatomyIntroduction />],
    path: '/courses/reading',
    image: readingCard,
  },
  {
    id: 5,
    title: 'How To Document An ECG',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    sections: ['1. Documentation Basics', '2. Beginning Your Entry In The Notes', '3. Documenting the ECG results in the notes', '4. Completing the entry in the notes'],
    components: [<AnatomyIntroduction />],
    path: '/courses/documenting',
    image: documentCard,
  },
  {
    id: 6,
    title: 'Conditions',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    sections: ['1. Heart Introduction', '2. Anatomy Outside The Heart', '3. Anatomy Inside The Heart', '4. Blood Flow', '5. Contraction'],
    components: [<AnatomyIntroduction />],
    path: '/courses/conditions',
    image: conditionsCard,
  },
];

export default courseDetails;

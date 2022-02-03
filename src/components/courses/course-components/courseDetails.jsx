/* eslint-disable quotes */
import React from 'react';

// importing course card images
import anatomyCard from '../../../assets/images/courses/cards/anatomyCard.jpeg'; // Course 1
import conditionsCard from '../../../assets/images/courses/cards/conditionsCard.jpeg'; // Course 2
import documentCard from '../../../assets/images/courses/cards/documentCard.jpg'; // Course 3
import introductionCard from '../../../assets/images/courses/cards/introductionCard.jpg'; // Course 4
import readingCard from '../../../assets/images/courses/cards/readingCard.jpeg'; // Course 5
import partsCard from '../../../assets/images/courses/cards/partsCard.jpg'; // Course 6

// (1) Anatomy Course Components
import AnatomyIntroduction from '../course-1-anatomy/AnatomyIntroduction'; // 1
import AnatomyOutside from '../course-1-anatomy/AnatomyOutside'; // 2
import AnatomyInside from '../course-1-anatomy/AnatomyInside'; // 3
import AnatomyBloodFlow from '../course-1-anatomy/AnatomyBloodFlow'; // 4
import AnatomyContraction from '../course-1-anatomy/AnatomyContraction'; // 6

// (2) Understanding ECG Course Components
import UnderstandingIntroduction from '../course-2-understanding/UnderstandingIntroduction'; // 1
import UnderstandingWaves from '../course-2-understanding/UnderstandingWaves'; // 2
import UnderstandingBasicWaves from '../course-2-understanding/UnderstandingBasicWaves'; // 3
import UnderstandingSegmentsVsIntervals from '../course-2-understanding/UnderstandingSegmentsVsIntervals'; // 4
import UnderstandingThreeSegments from '../course-2-understanding/UnderstandingThreeSegments'; // 5
import UnderstandingFourIntervals from '../course-2-understanding/UnderstandingFourIntervals'; // 6
import UnderstandingFiveFourThree from '../course-2-understanding/UnderstandingFiveFourThree'; // 7
import UnderstandingElectricalHeart from '../course-2-understanding/UnderstandingElectricalHeart'; // 8
import UnderstandingReadingGraph from '../course-2-understanding/UnderstandingReadingGraph'; // 9
import UnderstandingTwelveLeads from '../course-2-understanding/UnderstandingTwelveLeads'; // 10
import UnderstandingElectrodes from '../course-2-understanding/UnderstandingElectrodes'; // 11
import UnderstandingLeads from '../course-2-understanding/UnderstandingLeads'; // 12
import UnderstandingTwelveLeadVideo from '../course-2-understanding/UnderstandingTwelveLeadVideo'; // 13
import UnderstandingWaveformOne from '../course-2-understanding/UnderstandingWaveformOne'; // 14
import UnderstandingWaveformTwo from '../course-2-understanding/UnderstandingWaveformTwo'; // 15
import UnderstandingPathology from '../course-2-understanding/UnderstandingPathology'; // 16
import UnderstandingCardiacAxis from '../course-2-understanding/UnderstandingCardiacAxis'; // 17
import UnderstandingNormalAxis from '../course-2-understanding/UnderstandingNormalAxis'; // 18
import UnderstandingRightAxis from '../course-2-understanding/UnderstandingRightAxis'; // 19
import UnderstandingLeftAxis from '../course-2-understanding/UnderstandingLeftAxis'; // 20
import UnderstandingCardiacVideo from '../course-2-understanding/UnderstandingCardiacVideo'; // 21

const courseDetails = [
  {
    id: 1,
    title: 'Heart Fundamentals',
    description: "This course serves as an introduction to the heart's structure, covering basic anatomy (inside and out), blood flow through the heart, and what makes the heart beat. Lastly, you will learn about the heart's constant blood supply.",
    sections: [
      { title: '1. Heart Introduction', component: <AnatomyIntroduction /> }, { title: '2. Anatomy Outside The Heart', component: <AnatomyOutside /> }, { title: '3. Anatomy Inside The Heart', component: <AnatomyInside /> },
      { title: '4. Blood Flow', component: <AnatomyBloodFlow /> }, { title: '5. Contraction', component: <AnatomyContraction /> },
    ],
    path: '/courses/anatomy',
    whoFor: ['GPs', 'Foundation Doctors', 'Practice Nurses', 'Medical Students'],
    lastUpdated: '25/01/2022',
    timeToComplete: '10 minutes',
    references: [
      `[1] “Heart Physiology,” Utoronto.ca, 2015. https://pie.med.utoronto.ca/heart_physiology/ (accessed Jan. 25, 2022).`,
      `[2] “Vasculature of the Heart - TeachMeAnatomy,” Teachmeanatomy.info, 2013. https://teachmeanatomy.info/thorax/organs/heart/heart-vasculature/ (accessed Jan. 25, 2022).`,
    ],
    image: anatomyCard,
  },
  {
    id: 2,
    title: 'Understanding An ECG',
    description: "This course covers the basics of electrocardiography. You'll learn what an ECG is, fundamental heart rhythms, waveforms, the cardiac axis, and the various components that make up an ECG trace.",
    sections: [
      { title: '1. Introduction', component: <UnderstandingIntroduction /> }, { title: '2. ECG Waves', component: <UnderstandingWaves /> }, { title: '3. Five Basic Waveforms', component: <UnderstandingBasicWaves /> },
      { title: '4. Segments Vs Intervals', component: <UnderstandingSegmentsVsIntervals /> }, { title: '5. Three Basic Segments', component: <UnderstandingThreeSegments /> }, { title: '6. Four Sets Of Intervals', component: <UnderstandingFourIntervals /> },
      { title: '7. 5-4-3 Rule For ECG Components', component: <UnderstandingFiveFourThree /> }, { title: '8. Electrical Impulse Travelling Through The Heart', component: <UnderstandingElectricalHeart /> }, { title: '9. How To Read ECG Paper', component: <UnderstandingReadingGraph /> },
      { title: '10. ElectrodesVsLeads', component: <UnderstandingTwelveLeads /> }, { title: '11. Electrodes', component: <UnderstandingElectrodes /> }, { title: '12. Leads', component: <UnderstandingLeads /> }, { title: '13. 12-Lead ECG Video Summary', component: <UnderstandingTwelveLeadVideo /> },
      { title: '14. Waveform Shape (1)', component: <UnderstandingWaveformOne /> }, { title: '15. Waveform Shape (2)', component: <UnderstandingWaveformTwo /> }, { title: '16. Localising Pathology On The ECG', component: <UnderstandingPathology /> },
      { title: '17. Cardiac Axis', component: <UnderstandingCardiacAxis /> }, { title: '18. Normal Cardiac Axis', component: <UnderstandingNormalAxis /> }, { title: '19. Right Axis Deviation', component: <UnderstandingRightAxis /> }, { title: '20. Left Axis Deviation', component: <UnderstandingLeftAxis /> },
      { title: '21. Cardiac Summary Video', component: <UnderstandingCardiacVideo /> },
    ],
    path: '/courses/understanding',
    whoFor: ['GPs', 'Foundation Doctors', 'Practice Nurses', 'Medical Students'],
    lastUpdated: '25/01/2022',
    timeToComplete: '30 minutes',
    references: [
      `[1] “Heart Physiology,” Utoronto.ca, 2015.`,
      `[2] “Goldberger’s Clinical Electrocardiography A Simplified Approach” Ary L. Goldberger, 2018.`,
      `[3] J. Seladi-Schulman, “Understanding Sinus Rhythm,” Healthline, Nov. 11, 2021.`,
      `[4] “Electrocardiogram (EKG) Components and Intervals,” Alberta.ca, 2019.`,
      `[5] “Understanding an ECG | ECG Interpretation | Geeky Medics,” Geeky Medics, Mar. 05, 2011.`,
    ],
    image: introductionCard,
  },
  {
    id: 3,
    title: 'Parts Of The ECG Explained',
    description: 'This course has not yet been implemented due to time constraints. All demonstrable functionality can be found within the first two courses; heart fundamentals & understanding an ECG. Will be completed if product goes to market.',
    sections: [{ title: "Section Not Implemented", component: <UnderstandingIntroduction /> }],
    whoFor: ['GPs', 'Foundation Doctors', 'Practice Nurses', 'Medical Students'],
    path: '/courses/parts',
    lastUpdated: '25/01/2022',
    timeToComplete: '30 minutes',
    image: partsCard,
  },
  {
    id: 4,
    title: 'How To Read An ECG',
    description: 'This course has not yet been implemented due to time constraints. All demonstrable functionality can be found within the first two courses; heart fundamentals & understanding an ECG. Will be completed if product goes to market.',
    sections: [{ title: "Section Not Implemented", component: <UnderstandingIntroduction /> }],
    whoFor: ['GPs', 'Foundation Doctors', 'Practice Nurses', 'Medical Students'],
    path: '/courses/reading',
    lastUpdated: '25/01/2022',
    timeToComplete: '30 minutes',
    image: readingCard,
  },
  {
    id: 5,
    title: 'How To Document An ECG',
    description: 'This course has not yet been implemented due to time constraints. All demonstrable functionality can be found within the first two courses; heart fundamentals & understanding an ECG. Will be completed if product goes to market.',
    sections: [{ title: "Section Not Implemented", component: <UnderstandingIntroduction /> }],
    whoFor: ['GPs', 'Foundation Doctors', 'Practice Nurses', 'Medical Students'],
    path: '/courses/documenting',
    lastUpdated: '25/01/2022',
    timeToComplete: '30 minutes',
    image: documentCard,
  },
  {
    id: 6,
    title: 'Conditions',
    description: 'This course has not yet been implemented due to time constraints. All demonstrable functionality can be found within the first two courses; heart fundamentals & understanding an ECG. Will be completed if product goes to market.',
    sections: [{ title: "Section Not Implemented", component: <UnderstandingIntroduction /> }],
    whoFor: ['GPs', 'Foundation Doctors', 'Practice Nurses', 'Medical Students'],
    path: '/courses/conditions',
    lastUpdated: '25/01/2022',
    timeToComplete: '30 minutes',
    image: conditionsCard,
  },
];

export default courseDetails;

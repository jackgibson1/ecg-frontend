import React from 'react';
// importing quiz images
import anatomyCard from '../../../assets/images/courses/cards/anatomyCard.jpeg';
import conditionsCard from '../../../assets/images/courses/cards/conditionsCard.jpeg';
import documentCard from '../../../assets/images/courses/cards/documentCard.jpg';
import introductionCard from '../../../assets/images/courses/cards/introductionCard.jpg';
import readingCard from '../../../assets/images/courses/cards/readingCard.jpeg';
import partsCard from '../../../assets/images/courses/cards/partsCard.jpg';

// importing anatomy quiz questions
import Question1 from '../anatomy/Question1';

const quizDetails = [
  {
    id: 1,
    title: 'Heart Fundamentals',
    description: 'Ten questions based on the Heart Fundamentals course. Questions covering all aspects of the hearts structure, blood flow and contraction.',
    questions: [{ component: <Question1 />, answer: '1' }, { component: <h1>My!</h1>, answer: '2' }, { component: <h1>Name!</h1>, answer: '3' }, { component: <h1>Is!</h1>, answer: '4' }],
    path: '/quizzes/anatomy',
    difficulty: 3,
    lastUpdated: '03/02/2022',
    image: anatomyCard,
  },
  {
    id: 2,
    title: 'Understanding An ECG',
    description: 'This quiz has not yet been implemented due to time constraints. All demonstrable functionality can be found within the first quiz.',
    questions: [{ component: <h1>Hello!</h1>, answer: '1' }],
    path: '/quizzes/introduction',
    difficulty: 4,
    lastUpdated: '03/02/2022',
    image: introductionCard,
  },
  {
    id: 3,
    title: 'Parts Of The ECG Explained',
    description: 'This quiz has not yet been implemented due to time constraints. All demonstrable functionality can be found within the first quiz.',
    questions: [{ component: <h1>Hello!</h1>, answer: '1' }],
    path: '/quizzes/parts',
    difficulty: 3,
    lastUpdated: '03/02/2022',
    image: partsCard,
  },
  {
    id: 4,
    title: 'How To Read An ECG',
    description: 'This quiz has not yet been implemented due to time constraints. All demonstrable functionality can be found within the first quiz.',
    questions: [{ component: <h1>Hello!</h1>, answer: '1' }],
    path: '/quizzes/reading',
    difficulty: 3,
    lastUpdated: '03/02/2022',
    image: readingCard,
  },
  {
    id: 5,
    title: 'How To Document An ECG',
    description: 'This quiz has not yet been implemented due to time constraints. All demonstrable functionality can be found within the first quiz.',
    questions: [{ component: <h1>Hello!</h1>, answer: '1' }],
    path: '/quizzes/documenting',
    difficulty: 4,
    lastUpdated: '03/02/2022',
    image: documentCard,
  },
  {
    id: 6,
    title: 'Conditions',
    description: 'This quiz has not yet been implemented due to time constraints. All demonstrable functionality can be found within the first quiz.',
    questions: [{ component: <h1>Hello!</h1>, answer: '1' }],
    path: '/quizzes/introduction',
    difficulty: 4,
    lastUpdated: '03/02/2022',
    image: conditionsCard,
  },
];

export default quizDetails;

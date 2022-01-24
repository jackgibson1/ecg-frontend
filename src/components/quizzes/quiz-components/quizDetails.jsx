import React from 'react';
// importing quiz images
import anatomyCard from '../../../assets/images/courses/anatomyCard.jpeg';
import conditionsCard from '../../../assets/images/courses/conditionsCard.jpeg';
import documentCard from '../../../assets/images/courses/documentCard.jpg';
import introductionCard from '../../../assets/images/courses/introductionCard.jpg';
import readingCard from '../../../assets/images/courses/readingCard.jpeg';
import partsCard from '../../../assets/images/courses/partsCard.jpg';

// importing anatomy quiz questions
import Question1 from '../anatomy/Question1';

const quizDetails = [
  {
    id: 1,
    title: 'Heart Fundamentals',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    questions: [{ component: <Question1 />, answer: '1' }, { component: <h1>My!</h1>, answer: '2' }, { component: <h1>Name!</h1>, answer: '3' }, { component: <h1>Is!</h1>, answer: '4' }],
    path: '/quizzes/anatomy',
    image: anatomyCard,
  },
  {
    id: 2,
    title: 'ECG Introduction',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    questions: [{ component: <h1>Hello!</h1>, answer: '1' }],
    path: '/quizzes/introduction',
    image: introductionCard,
  },
  {
    id: 3,
    title: 'Parts Of The ECG Explained',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    questions: [{ component: <h1>Hello!</h1>, answer: '1' }],
    path: '/quizzes/parts',
    image: partsCard,
  },
  {
    id: 4,
    title: 'How To Read An ECG',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    questions: [{ component: <h1>Hello!</h1>, answer: '1' }],
    path: '/quizzes/reading',
    image: readingCard,
  },
  {
    id: 5,
    title: 'ECG Introduction',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    questions: [{ component: <h1>Hello!</h1>, answer: '1' }],
    path: '/quizzes/documenting',
    image: documentCard,
  },
  {
    id: 6,
    title: 'ECG Introduction',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    questions: [{ component: <h1>Hello!</h1>, answer: '1' }],
    path: '/quizzes/introduction',
    image: conditionsCard,
  },
];

export default quizDetails;

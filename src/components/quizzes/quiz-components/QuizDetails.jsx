import React from 'react';
// importing quiz images
import anatomyCard from '../../../assets/images/courses/cards/anatomyCard.jpeg';
import conditionsCard from '../../../assets/images/courses/cards/conditionsCard.jpeg';
import documentCard from '../../../assets/images/courses/cards/documentCard.jpg';
import introductionCard from '../../../assets/images/courses/cards/introductionCard.jpg';
import readingCard from '../../../assets/images/courses/cards/readingCard.jpeg';
import partsCard from '../../../assets/images/courses/cards/partsCard.jpg';

// importing anatomy quiz questions
import Question1 from '../quiz-1-anatomy/Question1';
import Question2 from '../quiz-1-anatomy/Question2';
import Question3 from '../quiz-1-anatomy/Question3';
import Question4 from '../quiz-1-anatomy/Question4';
import Question5 from '../quiz-1-anatomy/Question5';

const QuizDetails = [
  {
    id: 1,
    title: 'Heart Fundamentals',
    description: 'Five questions based on the Heart Fundamentals course. Questions covering all aspects of the hearts structure, blood flow and contraction.',
    questions: [
      { component: <Question1 />, answer: '1', answerDesc: 'The answer was the Aorta (1). It carries oxygen-rich blood away from the heart, to the rest of the body.' },
      { component: <Question2 />, answer: '2', answerDesc: 'The answer was 2 - it delivers deoxygenated blood from the lower body into the heart.' },
      { component: <Question3 />, answer: '3', answerDesc: 'The answer was 3 - it is 2-leafed valve that prevents blood from flowing backwards from the left ventricle into the left atrium.' },
      { component: <Question4 />, answer: '4', answerDesc: 'The answer was 4 - it shows the blood giving up carbon dioxide and absorbing oxygen.' },
      { component: <Question5 />, answer: '4', answerDesc: 'The answer was 2 - a normal heartbeat has two sounds, a lub (sometimes called S1) and a dub (S2).' },
    ],
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

export default QuizDetails;

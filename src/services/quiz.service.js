/*
 * Quiz services including API calls and localstorage interactions
 * quiz scores (stored in DB via API), getting and updating local quiz (localstorage)
*/

import api from './api';
import authService from './auth.service';

// get users score for provided quiz (from API)
function getQuizScore(quizId) {
  return api.get(`/quiz/score/${quizId}`,
    { headers: {
      'user-id': authService.getCurrentUser().id,
    } });
}

// get list of all quiz scores for a user (from API)
function getAllQuizScores() {
  return api.get('/quiz/scores/all',
    { headers: {
      'user-id': authService.getCurrentUser().id,
    } });
}

// update quiz score for provided quiz (from API)
function updateQuizScore(quizId, score) {
  const userid = authService.getCurrentUser().id;
  return api.put('/quiz/score', { quizId, score },
    {
      headers: {
        'user-id': userid,
      },
    });
}

// since quizzes have to be completed in one attempt (can't exit and rejoin)
// there is no need to store quiz progression server side
// therefore quiz progression is stored client side (localstorage) until Quiz is fully complete
function getLocalQuiz() {
  return JSON.parse(localStorage.getItem('quiz'));
}

// update quiz in localstorage
function updateLocalQuiz(quiz) {
  localStorage.setItem('quiz', JSON.stringify(quiz));
}

export default {
  getQuizScore,
  getAllQuizScores,
  updateQuizScore,
  getLocalQuiz,
  updateLocalQuiz,
};

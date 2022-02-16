import axios from 'axios';
import authService from './auth.service';
import authHeader from './auth-header';

const API_URL = process.env.REACT_APP_API_URL;

// get users score for provided quiz (from API)
function getQuizScore(quizId) {
  const accesstoken = authHeader()['x-access-token'];
  return axios.get(`${API_URL}/quiz/score/${quizId}`, { headers: {
    'x-access-token': accesstoken,
    'user-id': authService.getCurrentUser().id,
  } });
}

// get list of all quiz scores for a user (from API)
function getAllQuizScores() {
  const accesstoken = authHeader()['x-access-token'];
  return axios.get(`${API_URL}/quiz/scores/all`, { headers: {
    'x-access-token': accesstoken,
    'user-id': authService.getCurrentUser().id,
  } });
}

// update quiz score for provided quiz (from API)
function updateQuizScore(quizId, score) {
  const accesstoken = authHeader()['x-access-token'];
  const userid = authService.getCurrentUser().id;
  return axios.put(`${API_URL}/quiz/score`, { quizId, score },
    {
      headers: {
        'x-access-token': accesstoken,
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

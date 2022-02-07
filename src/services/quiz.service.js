import axios from 'axios';
import authService from './auth.service';
import authHeader from './auth-header';

// will eventually change to env variable
const API_URL = 'http://localhost:8080/api';

function getQuizScore(quizId) {
  const accesstoken = authHeader()['x-access-token'];
  return axios.get(`${API_URL}/quizscores/${quizId}`, { headers: { 'x-access-token': accesstoken } });
}

function getAllQuizScores() {
  const accesstoken = authHeader()['x-access-token'];
  return axios.get(`${API_URL}/allquizscores`, { headers: { 'x-access-token': accesstoken } });
}

function updateCourseScore(quizId, score) {
  const accesstoken = authHeader()['x-access-token'];
  const userid = authService.getCurrentUser().id;
  return axios.put(`${API_URL}/quizscores`, { quizId, score },
    {
      headers: {
        'x-access-token': accesstoken,
        'user-id': userid,
      },
    });
}

export default {
  getQuizScore,
  getAllQuizScores,
  updateCourseScore,
};

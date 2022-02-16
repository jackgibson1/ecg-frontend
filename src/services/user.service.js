import axios from 'axios';
import authService from './auth.service';
import authHeader from './auth-header';

// will eventually change to env variable
const API_URL = 'http://localhost:8080/api';

function getDateCreated() {
  return axios.get(`${API_URL}/user/datecreated`, { headers: { 'x-access-token': authHeader()['x-access-token'], 'user-id': authService.getCurrentUser().id } });
}

function getCredits() {
  return axios.get(`${API_URL}/user/credits`, { headers: { 'x-access-token': authHeader()['x-access-token'], 'user-id': authService.getCurrentUser().id } });
}

function getLocalQuiz() {
  return JSON.parse(localStorage.getItem('quiz'));
}

function updateLocalQuiz(quiz) {
  localStorage.setItem('quiz', JSON.stringify(quiz));
}

export default {
  getDateCreated,
  getCredits,
  getLocalQuiz,
  updateLocalQuiz,
};

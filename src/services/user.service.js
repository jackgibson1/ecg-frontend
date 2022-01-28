import axios from 'axios';
import authService from './auth.service';
import authHeader from './auth-header';

// will eventually change to env variable
const API_URL = 'http://localhost:8080/api';

const getPublicContent = () => axios.get(`${API_URL}all`, { headers: authHeader() });
const getAdminBoard = () => axios.get(`${API_URL}admin`, { headers: authHeader() });

function getAllCoursePositions() {
  return axios.get(`${API_URL}/position/all`, { headers: { 'x-access-token': authHeader()['x-access-token'], 'user-id': authService.getCurrentUser().id } });
}

function getCoursePosition(courseId) {
  return axios.get(`${API_URL}/position/${courseId}`, { headers: { 'x-access-token': authHeader()['x-access-token'], 'user-id': authService.getCurrentUser().id } });
}

function updateCoursePosition(courseId, updatedPosition) {
  const body = { updatedPosition };
  return axios.put(`${API_URL}/position/${courseId}`, body,
    {
      headers: {
        'x-access-token': authHeader()['x-access-token'],
        'user-id': authService.getCurrentUser().id,
      },
    });
}
function completeCourse(courseId) {
  return axios.post(`${API_URL}/coursecomplete/${courseId}`, {},
    {
      headers: {
        'x-access-token': authHeader()['x-access-token'],
        'user-id': authService.getCurrentUser().id,
      },
    }).then((res) => res);
}

function getLocalQuiz() {
  return JSON.parse(localStorage.getItem('quiz'));
}

function updateLocalQuiz(quiz) {
  localStorage.setItem('quiz', JSON.stringify(quiz));
}

export default {
  getPublicContent,
  getAdminBoard,
  getAllCoursePositions,
  getCoursePosition,
  updateCoursePosition,
  completeCourse,
  getLocalQuiz,
  updateLocalQuiz,
};

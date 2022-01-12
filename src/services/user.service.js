import axios from 'axios';
import authService from './auth.service';
import authHeader from './auth-header';

// will eventually change to env variable
const API_URL = 'http://localhost:8080/api/position/';

const getPublicContent = () => axios.get(`${API_URL}all`, { headers: authHeader() });
const getAdminBoard = () => axios.get(`${API_URL}admin`, { headers: authHeader() });

function getAllCoursePositions() {
  return axios.get(`${API_URL}all`, { headers: { 'x-access-token': authHeader()['x-access-token'], 'user-id': authService.getCurrentUser().id } });
}

function getCoursePosition(courseId) {
  return axios.get(`${API_URL}${courseId}`, { headers: { 'x-access-token': authHeader()['x-access-token'], 'user-id': authService.getCurrentUser().id } });
}

function updateCoursePosition(courseId, updatedPosition) {
  const body = { updatedPosition };
  return axios.put(`${API_URL}${courseId}`, body,
    {
      headers: {
        'x-access-token': authHeader()['x-access-token'],
        'user-id': authService.getCurrentUser().id,
      },
    });
}

export default {
  getPublicContent,
  getAdminBoard,
  getAllCoursePositions,
  getCoursePosition,
  updateCoursePosition,
};

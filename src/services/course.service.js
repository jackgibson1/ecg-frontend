import axios from 'axios';
import authService from './auth.service';
import authHeader from './auth-header';

// will eventually change to env variable
const API_URL = 'http://localhost:8080/api';

function getCourseRating(courseId) {
  const accesstoken = authHeader()['x-access-token'];
  return axios.get(`${API_URL}/ratings/${courseId}`, { headers: { 'x-access-token': accesstoken } });
}

function getAllCourseRatings() {
  const accesstoken = authHeader()['x-access-token'];
  return axios.get(`${API_URL}/ratings`, { headers: { 'x-access-token': accesstoken } });
}

function submitCourseRating(courseId, rating) {
  return axios.post(`${API_URL}/ratings/submit`, { courseId, rating },
    {
      headers: {
        'x-access-token': authHeader()['x-access-token'],
        'user-id': authService.getCurrentUser().id,
      },
    });
}

export default {
  getCourseRating,
  getAllCourseRatings,
  submitCourseRating,
};

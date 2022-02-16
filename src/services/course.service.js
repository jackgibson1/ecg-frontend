import axios from 'axios';
import authService from './auth.service';
import authHeader from './auth-header';

// will eventually change to env variable
const API_URL = 'http://localhost:8080/api';

// get rating for respective course
function getCourseRating(courseId) {
  const accesstoken = authHeader()['x-access-token'];
  return axios.get(`${API_URL}/course/rating/${courseId}`, { headers: { 'x-access-token': accesstoken } });
}

// get list of all ratings for all courses
function getAllCourseRatings() {
  const accesstoken = authHeader()['x-access-token'];
  return axios.get(`${API_URL}/course/ratings/all`, { headers: { 'x-access-token': accesstoken } });
}

// submit a course rating for provided course
function submitCourseRating(courseId, rating) {
  const accesstoken = authHeader()['x-access-token'];
  const userid = authService.getCurrentUser().id;
  return axios.post(`${API_URL}/course/rating/submit`, { courseId, rating },
    {
      headers: {
        'x-access-token': accesstoken,
        'user-id': userid,
      },
    });
}

// get position for provided course
function getCoursePosition(courseId) {
  return axios.get(`${API_URL}/course/position/${courseId}`, { headers: { 'x-access-token': authHeader()['x-access-token'], 'user-id': authService.getCurrentUser().id } });
}

// updated position for provided courseId
function updateCoursePosition(courseId, updatedPosition) {
  const body = { updatedPosition };
  return axios.put(`${API_URL}/course/position/${courseId}`, body,
    {
      headers: {
        'x-access-token': authHeader()['x-access-token'],
        'user-id': authService.getCurrentUser().id,
      },
    });
}

// get list of all positions for all courses
function getAllCoursePositions() {
  return axios.get(`${API_URL}/course/positions/all`, { headers: { 'x-access-token': authHeader()['x-access-token'], 'user-id': authService.getCurrentUser().id } });
}

// save course completions - checks if users earns credit or not
function completeCourse(courseId) {
  return axios.post(`${API_URL}/course/complete/${courseId}`, {},
    {
      headers: {
        'x-access-token': authHeader()['x-access-token'],
        'user-id': authService.getCurrentUser().id,
      },
    }).then((res) => res);
}

function getAllCourseCompletions() {
  const accesstoken = authHeader()['x-access-token'];
  return axios.get(`${API_URL}/course/completions/all`, {
    headers: {
      'x-access-token': accesstoken,
      'user-id': authService.getCurrentUser().id,
    },
  });
}

export default {
  getCourseRating,
  getAllCourseRatings,
  submitCourseRating,
  getCoursePosition,
  updateCoursePosition,
  getAllCoursePositions,
  completeCourse,
  getAllCourseCompletions,
};

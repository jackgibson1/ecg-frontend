/*
 * Quiz services for interacting with the API
 * course ratings, course positions and course completions
*/

import api from './api';
import authService from './auth.service';

// get rating for respective course
function getCourseRating(courseId) {
  return api.get(`/course/rating/${courseId}`);
}

// get list of all ratings for all courses
function getAllCourseRatings() {
  return api.get('/course/ratings/all');
}

// submit a course rating for provided course
function submitCourseRating(courseId, rating) {
  const userid = authService.getCurrentUser().id;
  return api.post('/course/rating/submit', { courseId, rating },
    {
      headers: { 'user-id': userid },
    });
}

// get position for provided course
function getCoursePosition(courseId) {
  return api.get(`/course/position/${courseId}`,
    {
      headers: { 'user-id': authService.getCurrentUser().id },
    });
}

// updated position for provided courseId
function updateCoursePosition(courseId, updatedPosition) {
  const body = { updatedPosition };
  return api.put(`/course/position/${courseId}`, body,
    {
      headers: {
        'user-id': authService.getCurrentUser().id,
      },
    });
}

// get list of all positions for all courses
function getAllCoursePositions() {
  return api.get('/course/positions/all',
    { headers: { 'user-id': authService.getCurrentUser().id } });
}

// save course completions - checks if users earns credit or not
function completeCourse(courseId) {
  return api.post(`/course/complete/${courseId}`, {},
    {
      headers: {
        'user-id': authService.getCurrentUser().id,
      },
    }).then((res) => res);
}

function getAllCourseCompletions() {
  return api.get('/course/completions/all', {
    headers: {
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

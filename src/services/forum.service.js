/*
* Forum service for interacting with forum endpoints
* Creating question, deleting question, get all questions, get question, create comment,
* delete comment and get all comments for a question
*/

import api from './api';
import authService from './auth.service';

// Create post
async function createQuestion(title, description, file, fileName) {
  const res = await api.post('/forum/question/create', { title, description, file, fileName },
    { headers: { username: authService.getCurrentUser().username } });
  return res;
}

// Upload question image
async function uploadImage(formData) {
  const res = await api.post('/forum/question/upload', formData);
  return res;
}

// Get question image name
async function getImageName(questionId) {
  const res = await api.get(`/forum/question/image/${questionId}`);
  return res;
}

// Delete question
async function deleteQuestion(questionId) {
  const res = await api.delete(`/forum/question/delete/${questionId}`, {
    headers: { username: authService.getCurrentUser().username },
  });
  return res;
}

// Get all questions
async function getAllQuestions(page, filter) {
  const res = await api.get(`/forum/question/all?page=${page}&filter=${filter}`);
  return res;
}

// Get a single question
async function getQuestion(questionId) {
  const res = await api.get(`/forum/question/${questionId}`);
  return res;
}

// Create comment
async function createComment(questionId, description) {
  const res = await api.post('/forum/comment/create', { description, questionId },
    { headers: { username: authService.getCurrentUser().username } });
  return res;
}

// Delete comment
async function deleteComment(commentId) {
  const res = await api.delete(`/forum/comment/delete/${commentId}`, {
    headers: { username: authService.getCurrentUser().username },
  });
  return res;
}

// Get all comments for specified question
async function getAllComments(questionId) {
  const res = await api.get(`/forum/comment/${questionId}`);
  return res;
}

export default {
  createQuestion,
  uploadImage,
  getImageName,
  deleteQuestion,
  getAllQuestions,
  getQuestion,
  createComment,
  deleteComment,
  getAllComments,
};

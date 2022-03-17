/*
* Forum service for interacting with forum endpoints
* Creating post, deleting post, get all posts, get post, create comment,
* delete comment and get all comments for a post
*/

import api from './api';
import authService from './auth.service';

// Create post
async function createPost(title, description, file, fileName) {
  const res = await api.post('/forum/post/create', { title, description, file, fileName },
    { headers: { username: authService.getCurrentUser().username } });
  return res;
}

// Upload post image
async function uploadImage(formData) {
  const res = await api.post('/forum/post/upload', formData);
  return res;
}

// Get post image name
async function getImageName(postId) {
  const res = await api.get(`/forum/post/image/${postId}`);
  return res;
}

// Delete post
async function deletePost(postId) {
  const res = await api.delete(`/forum/post/delete/${postId}`, {
    headers: { username: authService.getCurrentUser().username },
  });
  return res;
}

// Get all posts
async function getAllPosts(page, filter) {
  const res = await api.get(`/forum/post/all?page=${page}&filter=${filter}`);
  return res;
}

// Get a single post
async function getPost(postId) {
  const res = await api.get(`/forum/post/${postId}`);
  return res;
}

// Create comment
async function createComment(postId, description) {
  const res = await api.post('/forum/comment/create', { description, postId },
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

// Get all posts for specified post
async function getAllComments(postId) {
  const res = await api.get(`/forum/comment/${postId}`);
  return res;
}

export default {
  createPost,
  uploadImage,
  getImageName,
  deletePost,
  getAllPosts,
  getPost,
  createComment,
  deleteComment,
  getAllComments,
};

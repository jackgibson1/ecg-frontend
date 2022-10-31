/*
 * Admin services for interacting with the API
 * get all users, delete user, reset all stats for user, delete post and delete comment
*/
import api from './api';
import authService from './auth.service';

function getAllUsers() {
  return api.get('/admin/all-users',
    {
      headers: { 'admin-user-id': authService.getCurrentUser().id },
    });
}

function deleteUser(userId) {
  return api.delete('/admin/delete-user',
    {
      headers: { 'admin-user-id': authService.getCurrentUser().id },
      data: { userId },
    });
}

export default {
  getAllUsers,
  deleteUser,
};

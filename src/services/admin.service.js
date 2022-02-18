/*
 * Admin services for interacting with the API
 * get all users, delete user, reset all stats for user, delete post and delete comment
*/
import axios from 'axios';
import authService from './auth.service';
import authHeader from './auth-header';

const API_URL = process.env.REACT_APP_API_URL;

function getAllUsers() {
  return axios.get(`${API_URL}/admin/all-users`,
    { headers: {
      'x-access-token': authHeader()['x-access-token'],
      'admin-user-id': authService.getCurrentUser().id,
    },
    });
}

function deleteUser(userId) {
  return axios.delete(`${API_URL}/admin/delete-user`,
    { headers: {
      'x-access-token': authHeader()['x-access-token'],
      'admin-user-id': authService.getCurrentUser().id,
    },
    data: {
      userId,
    },
    });
}

export default {
  getAllUsers,
  deleteUser,
};

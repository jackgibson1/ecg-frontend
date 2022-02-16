/*
 * User services
 * get when user account was created and user credits
*/

import axios from 'axios';
import authService from './auth.service';
import authHeader from './auth-header';

const API_URL = process.env.REACT_APP_API_URL;

function getDateCreated() {
  return axios.get(`${API_URL}/user/datecreated`, { headers: { 'x-access-token': authHeader()['x-access-token'], 'user-id': authService.getCurrentUser().id } });
}

function getCredits() {
  return axios.get(`${API_URL}/user/credits`, { headers: { 'x-access-token': authHeader()['x-access-token'], 'user-id': authService.getCurrentUser().id } });
}

export default {
  getDateCreated,
  getCredits,
};

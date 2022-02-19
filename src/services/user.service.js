/*
 * User services
 * get when user account was created and user credits
*/

import api from './api';
import authService from './auth.service';

function getDateCreated() {
  return api.get('/user/datecreated', { headers: { 'user-id': authService.getCurrentUser().id } });
}

function getCredits() {
  return api.get('/user/credits', { headers: { 'user-id': authService.getCurrentUser().id } });
}

export default {
  getDateCreated,
  getCredits,
};

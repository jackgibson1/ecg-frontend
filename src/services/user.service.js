import axios from 'axios';
import authHeader from './auth-header';

// will eventually change to env variable
const API_URL = 'http://localhost:8080/api/test/';

const getPublicContent = () => axios.get(`${API_URL}all`, { headers: authHeader() });
const getUserBoard = () => axios.get(`${API_URL}user`, { headers: authHeader() });
const getModeratorBoard = () => axios.get(`${API_URL}mod`, { headers: authHeader() });
const getAdminBoard = () => axios.get(`${API_URL}admin`, { headers: authHeader() });

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};
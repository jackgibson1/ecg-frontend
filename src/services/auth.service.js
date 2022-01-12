// Authentication service uses Axios for HTTP requests and LocalStorage for user information
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

// login(): POST {username, password} & save JWT to Local Storage
const login = (username, password) => axios.post(`${API_URL}signin`, {
  username,
  password,
})
  .then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  });

// register(): POST {username, email, password}
const register = (username, email, password) => axios.post(`${API_URL}signup`, {
  username,
  email,
  password,
}).then(() => {
  login(username, password);
});

// logout(): remove JWT form Local Storage
const logout = () => localStorage.removeItem('user');

// getCurrentUser(): get stored user information including JWT
const getCurrentUser = () => JSON.parse(localStorage.getItem('user'));

// redirect to login in page if not signed in
const isLoggedIn = () => {
  if (!localStorage.getItem('user')) return false;
  return true;
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
  isLoggedIn,
};

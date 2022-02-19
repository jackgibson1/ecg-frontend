// Authentication service uses Axios for HTTP requests and LocalStorage for user information
import api from './api';
import TokenService from './token.service';

// login(): POST {username, password} & save JWT to Local Storage
const login = (username, password) => api.post('/auth/signin', {
  username,
  password,
})
  .then((response) => {
    if (response.data.accessToken) {
      TokenService.setUser(response.data);
    }
    return response.data;
  });

// register(): POST {username, email, password}
const register = (username, email, password) => api.post('/auth/signup', {
  username,
  email,
  password,
}).then(() => {
  login(username, password);
});

// logout(): remove JWT form Local Storage
const logout = () => TokenService.removeUser();

// getCurrentUser(): get stored user information including JWT
const getCurrentUser = () => TokenService.getUser();

// redirect to login in page if not signed in
const isLoggedIn = () => {
  if (!localStorage.getItem('user')) return false;
  return true;
};

// verfiy captcha token
const verifyCaptchaToken = (responseToken) => api.post('/auth/verifycaptcha', {
  responseToken,
}).then((res) => res.data);

export default {
  register,
  login,
  logout,
  getCurrentUser,
  isLoggedIn,
  verifyCaptchaToken,
};

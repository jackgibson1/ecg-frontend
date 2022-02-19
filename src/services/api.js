/* eslint-disable no-underscore-dangle */
/*
 * Service provides Axios insrance with interceptors request & repsonse
 * Required for JWT refresh token
*/

import axios from 'axios';
import TokenService from './token.service';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const SetupInterceptors = (history, logOut) => {
  instance.interceptors.request.use(
    (config) => {
      const token = TokenService.getLocalAccessToken();
      if (token) {
      // eslint-disable-next-line no-param-reassign
        config.headers['x-access-token'] = token;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (res) => res,
    async (err) => {
      const originalConfig = err.config;
      if (originalConfig.url !== '/auth/signin' && err.response) {
      // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
          try {
            const rs = await instance.post('/auth/refreshtoken', {
              refreshToken: TokenService.getLocalRefreshToken(),
            });
            const { accessToken } = rs.data;
            TokenService.updateLocalAccessToken(accessToken);
            return instance(originalConfig);
          } catch (_error) {
            await history.push({
              pathname: '/login',
              state: { from: window.location.pathname, alert: true, message: 'Session has expired! Please log in again.' },
            });
            logOut();
            Promise.reject(_error);
          }
        }
      }
      return Promise.reject(err);
    },
  );
};

export default instance;

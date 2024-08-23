import axios from 'axios';
import { getToken, USER_TOKEN } from '../services/apiTokens';

const apiClient = axios.create({
  baseURL: 'https://tiji-dev.herokuapp.com/api/v1/', 
  timeout: 10000,
});

// Intercept requests to add the Authorization header
apiClient.interceptors.request.use(
  async (config) => {
    try {
      const token = await getToken(USER_TOKEN);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error adding authorization header:', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;

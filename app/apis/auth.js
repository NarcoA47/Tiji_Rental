// auth.js
import api from './api';

export const login = async (email, password) => {
  try {
    const response = await api.post('/login', {
      email,
      password,
    });
    // Handle success, for example, store the token or user data
    return response.data; // or whatever your API returns
  } catch (error) {
    // Handle error, e.g., show error messages
    throw error.response?.data?.message || 'Login failed';
  }
};

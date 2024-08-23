import apiClient from './apiClient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_TOKEN, setToken, removeToken } from '../services/apiTokens'; // Assuming you've created apiTokens.js

export const login = async (username, password) => {
  try {
    const response = await apiClient.post('users/login/', { username, password });

    if (response.status === 200) {
      const { access_token, refresh_token } = response.data;

      // Store tokens in AsyncStorage
      await setToken(USER_TOKEN, access_token);
      await setToken('refreshToken', refresh_token);

      return response.data;
    } else {
      throw new Error('Login failed. Please check your credentials.');
    }
  } catch (error) {
    console.error('Error logging in:', error);
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

export const signup = async (username, phoneNumber, email, password, navigation) => {
  try {
    const response = await apiClient.post('users/signup/', {
      username,
      phone_number: phoneNumber,
      email,
      password,
    });

    if (response.status === 201) {
      const { access_token, refresh_token } = response.data;

      // Store tokens in AsyncStorage
      await setToken(USER_TOKEN, access_token);
      await setToken('refreshToken', refresh_token);

      // Navigate to the OTP screen
      navigation.navigate('OTP');
    } else {
      throw new Error('Failed to register. Please check your details.');
    }
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.detail || 'Failed to register.');
    } else {
      throw new Error('An error occurred. Please try again later.');
    }
  }
};

export const passwordReset = async (email) => {
  try {
    const response = await apiClient.post('obtain-password-code/', { email });

    if (response.status === 200) {
      console.log('Password reset code sent successfully');
      return response.data;
    } else {
      console.error('Failed to send password reset code');
      return null;
    }
  } catch (error) {
    console.error('Error sending password reset code:', error);
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

export const verifyPasswordResetCode = async (code) => {
  try {
    const response = await apiClient.post('password-code-verify/', { code });
    return response.data;
  } catch (error) {
    console.error('Error verifying password reset code:', error);
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

export const logout = async (navigation) => {
  try {
    const response = await apiClient.post('users/logout/');
    if (response.status === 200) {
      // Remove tokens from AsyncStorage
      await removeToken(USER_TOKEN);
      await removeToken('refreshToken');

      // Navigate to the login screen or home screen
      navigation.navigate('Login');
    }
  } catch (error) {
    console.error('Error logging out:', error);
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

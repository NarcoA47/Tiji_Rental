import apiClient from './apiClient';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_TOKEN, REFRESH_TOKEN, setToken, removeToken } from '../services/apiTokens'; // Assuming you've created apiTokens.js

export const login = async (username, password) => {
  try {
    // Make the login request to obtain a new token
    const response = await axios.post('https://tiji-dev.herokuapp.com/api/v1/users/login/', {
      username, 
      password
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    // Check if the response contains the expected tokens
    const { access_token, refresh_token } = response.data;

    if (access_token) {
      // Store the tokens in AsyncStorage
      await AsyncStorage.setItem('access_token', access_token);
      await AsyncStorage.setItem('refresh_token', refresh_token);
      return response.data;
    } else {
      console.error('Login failed: Tokens not found in response');
    }

  } catch (error) {
    console.error('Error logging in:', error);
  }
};



export const signup = async (username, phonNumber, email, password, navigation) => {
  try {
    const response = await apiClient.post('users/signup/', {
      username,
      phone_number: phonNumber,
      email,
      password,
    });

    if (response.status === 201) {
      const { access_token, refresh_token } = response.data;

      // Store tokens in AsyncStorage
      await setToken(USER_TOKEN, access_token);
      await setToken(REFRESH_TOKEN, refresh_token);
      await AsyncStorage.setItem('USERNAME', data.username); // Store username


      // Navigate to the OTP screen
      navigation.navigate('OTP');
    } else {
      throw new Error('Failed to register. Please check your details.');
    }
  } catch (error) {

    console.error('Signup Error:', error);


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

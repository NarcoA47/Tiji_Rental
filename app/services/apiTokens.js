import AsyncStorage from '@react-native-async-storage/async-storage';

export const USER_TOKEN = 'userToken';
export const ACCESS_TOKEN = 'accessToken';
// export const USERNAME = 'userName';
export const REFRESH_TOKEN = 'refreshToken';
export const GET_STARTED_TOKEN = 'getStartedToken';
export const DEVICE_TOKEN = 'deviceToken';
export const DEVICE_PAYLOAD = 'devicePayload';

// Save a token to AsyncStorage
export const saveToken = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving token:', error);
  }
};

export const getToken = async (key) => {
  try {
    const token = await AsyncStorage.getItem(key);
    return token;
  } catch (error) {
    console.error('Error getting token:', error);
    return null;
  }
};

export const setToken = async (key, value) => {
  if (token) { 
    try {
      //  = await AsyncStorage.setItem(key);
       const token = await AsyncStorage.setItem(key, value);
      return token;

    } catch (error) {
      console.error('Error storing token:', error);
    }
  } else {
    console.error('No token provided to store');
  }
};

export const removeToken = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing token:', error);
  }
};
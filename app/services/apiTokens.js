import AsyncStorage from '@react-native-async-storage/async-storage';

export const USER_TOKEN = 'userToken';
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
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error('Error setting token:', error);
  }
};

export const removeToken = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing token:', error);
  }
};
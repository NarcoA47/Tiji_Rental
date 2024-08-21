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

// Retrieve a token from AsyncStorage
export const getToken = async (key) => {
  try {
    const token = await AsyncStorage.getItem(key);
    return token ? JSON.parse(token) : null;
  } catch (error) {
    console.error('Error retrieving token:', error);
  }
};

// Remove a token from AsyncStorage
export const removeToken = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing token:', error);
  }
};

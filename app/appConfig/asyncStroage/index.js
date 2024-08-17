import AsyncStorage from '@react-native-async-storage/async-storage';

export const USER_TOKEN = 'userToken';
export const GET_STARTED_TOKEN = 'getStartedToken';
export const DEVICE_TOKEN = 'deviceToken';
export const DEVICE_PAYLOAD = 'devicePayload';

export const saveToken = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    return error;
  }
};

export const getToken = async key => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    return error;
  }
};

export const removeToken = async key => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (error) {
    return error;
  }
};

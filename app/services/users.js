import apiClient from './apiClient';

export const getUserProfile = async () => {
    return apiClient.get('users/profile/');
};

export const updateUserProfile = async (profileData) => {
    return apiClient.put('users/profile/', profileData);
};


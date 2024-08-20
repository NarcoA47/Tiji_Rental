import apiClient from "./apiClient";


export const login = async (username, password) => {
    return apiClient.post('users/login/', { username, password });
};

export const register = async (username, password, phoneNumber) => {
    return apiClient.post('users/register/', { username, password, phone_number: phoneNumber });
};

export const logout = async () => {
    return apiClient.post('users/logout/');
};



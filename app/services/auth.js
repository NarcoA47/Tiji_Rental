import apiClient from "./apiClient";


export const login = async (username, password) => {
    return apiClient.post('users/login/', { username, password });
};

export const signup = async (username, phoneNumber, email, password) => {
    try {
        const response = await apiClient.post('users/register/', {
            username: username,
            phone_number: phoneNumber,
            email: email,
            password: password,
            // verification_code: verificationCode
        });

        if (response.status === 201) {
            const { access_token, refresh_token } = response.data;

            // Store tokens in AsyncStorage
            await AsyncStorage.setItem('accessToken', access_token);
            await AsyncStorage.setItem('refreshToken', refresh_token);

            // You can navigate to the next screen or return the response data
            navigation.navigate('OTP');
        } else {
            throw new Error('Failed to register. Please check your details.');
        }
    } catch (error) {
        if (error.response && error.response.data) {
            const errorData = error.response.data;
            throw new Error(errorData.detail || 'Failed to register.');
        } else {
            throw new Error('An error occurred. Please try again later.');
        }
    }
};

export const passwordReset = async (email) => {
    try {
        const response = await apiClient.post('obtain-password-code/', {
            email: email,
        });

        if (response.status === 200) {
            console.log('Password reset code sent successfully');
            return response.data;
        } else {
            console.error('Failed to send password reset code');
            return null;
        }
    } catch (error) {
        console.error('Error sending password reset code:', error);
        throw error;
    }
};

export const verifyPasswordResetCode = async (code) => {
    try {
        const response = await apiClient.post('password-code-verify/', { code });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Network Error');
    }
};

export const logout = async () => {
    return apiClient.post('users/logout/');
};



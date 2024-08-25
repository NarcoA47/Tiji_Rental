import React, { useState } from 'react';
import { View, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { Input, Text } from 'react-native-magnus';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import { login } from '../../services/auth';
import { setToken, USER_TOKEN } from '@/app/services/apiTokens';
import ForgetPasswordText from './forgotpasswordText';
import { LoginButton } from '@/components/button';

export default function SigninForms() {
    const navigation = useNavigation(); 
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLogin = async () => {
        if (!username || !password) {
            Alert.alert('Validation Error', 'Please enter both username and password.');
            return;
        }

        setLoading(true);

        try {
            const response = await login(username, password);

            console.log('Login Response:', response);

            if (response) {

                // const { access_token } = response;

                // console.log('Access Token:', access_token);

                // await setToken(access_token);
                
                console.log('Navigating to LoginSuccess');
                navigation.navigate('LoginSuccess');
              } 
            } 
            catch (error) {
                if (error.response && error.response.status === 401) {
                    Alert.alert('Login Failed', 'Incorrect username or password. Please try again.');
                } else {
                    Alert.alert('Error', 'An error occurred. Please try again later.');
                }
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.inputFormTwo}>
                <View>
                    <Text style={styles.inputText}>Phone Number</Text>
                    <Input
                        placeholder="e.g +260 968"
                        onChangeText={setUsername}
                        focusBorderColor="blue700"
                        style={styles.input}
                        value={username}
                        keyboardType="default"
                    />
                </View>
                <View>
                    <Text style={styles.inputText}>Password</Text>
                    <Input
                        onChangeText={setPassword}
                        placeholder="Enter Password"
                        p={10}
                        focusBorderColor="blue700"
                        style={styles.input}
                        value={password}
                        secureTextEntry={!passwordVisible}
                        keyboardType="visible-password"
                        suffix={
                            <Ionicons
                                name={passwordVisible ? 'eye' : 'eye-off'}
                                size={24}
                                color="gray"
                                onPress={togglePasswordVisibility}
                            />
                        }
                    />
                </View>
                <ForgetPasswordText />
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <LoginButton onPress={handleLogin} />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputText: {
        marginBottom: 8,
        fontSize: 18,
    },
    input: {
        borderWidth: 1,
        marginBottom: 16,
        padding: 12,
        borderRadius: 4,
    },
    inputFormTwo: {},
});

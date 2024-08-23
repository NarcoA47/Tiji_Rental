import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Input, Text } from "react-native-magnus";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginButton } from '@/components/button';
import ForgetPasswordText from './forgotpasswordText';
import { Ionicons } from '@expo/vector-icons'; 
import { login  } from "../../services/auth";
import { setToken } from '@/app/services/apiTokens';


export default function SigninForms() {
    const navigation = useNavigation(); // Use the navigation hook
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLogin = async () => {
        try {
            const response = await login(username, password);
            if (response.status === 200) {
                // Store the auth token (if provided in the response)
                const { access_token } = response.data;
                if (access_token) {
                    await setToken(USER_TOKEN, access_token);
                }
                navigation.navigate('LoginSuccess');
    
                setTimeout(() => {
                    navigation.navigate('BusHome');
                }, 1000); 
            } else {
                alert('Failed to log in. Please check your username and password.');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert('Incorrect username or password. Please try again.');
            } else {
                alert('An error occurred. Please try again later.');
            }
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
                        placeholder='Enter Password'
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
                <LoginButton onPress={handleLogin} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 18,
    },
    inputText: {
        marginLeft: 12,
        marginBottom: 4,
        padding: 4,
        borderRadius: 4,
        fontSize: 18,
    },
    input: {
        borderWidth: 1,
        marginLeft: 14,
        marginRight: 14,
        marginTop: 4,
        marginBottom: 4,
        padding: 4,
        borderRadius: 4,
    },
    inputFormTwo: {},
});

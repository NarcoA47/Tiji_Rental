import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Input, Text } from "react-native-magnus";
import { useNavigation } from '@react-navigation/native';
import { LoginButton } from '@/components/button';
import ForgetPasswordText from './forgotpasswordText';
import axios from 'axios';

export default function SigninForms() {
    const navigation = useNavigation(); // Removed the navigation prop
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://tiji-dev.herokuapp.com/api/v1/users/login/', {
                username: username,
                password: password,
            });
    
            if (response.status === 200) {
                // Navigate to the success screen
                navigation.navigate('Success');
            } else {
                // Handle cases where the response status is not 200 (though unlikely with axios)
                console.error('Login failed with status:', response.status);
                alert('Failed to log in. Please check your username and password.');
            }
        } catch (error) {
            
            if (error.response && error.response.status === 401) {
                
                alert('Incorrect username or password. Please try again.');
            } else {
                
                console.error('An error occurred during login:', error);
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
                        keyboardType="phone-pad"
                    />
                </View>
                <View>
                    <Text style={styles.inputText}>Password</Text>
                    <Input
                        onChangeText={setPassword}
                        p={10}
                        focusBorderColor="blue700"
                        style={styles.input}
                        value={password}
                        secureTextEntry={!passwordVisible}
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
        justifyContent: 'center'
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

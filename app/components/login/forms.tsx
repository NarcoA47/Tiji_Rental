import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Input, Text } from "react-native-magnus";
import { useNavigation } from '@react-navigation/native';
import { LoginButton } from '@/components/button';
import ForgetPasswordText from './forgotpasswordText';
import axios from 'axios';

export default function SigninForms() {
    const navigation = useNavigation(); // Removed the navigation prop
    const [password, getPassword] = useState('');
    const [number, setNumber] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://172.20.10.3:8000/api/v1/users/login/', {
                phone_number: number,
            });
            if (response.status === 200) {
                navigation.navigate('OTP');
            } else {
                console.error('Failed to send verification code');
            }
        } catch (error) {
            console.error(error);
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
                        onChangeText={setNumber}
                        focusBorderColor="blue700"
                        style={styles.input}
                        value={number}
                        keyboardType="phone-pad"
                    />
                </View>
                <View>
                    <Text style={styles.inputText}>Password</Text>
                    <Input
                        onChangeText={getPassword}
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

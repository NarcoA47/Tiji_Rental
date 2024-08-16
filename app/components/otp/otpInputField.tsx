import React, { useState, useRef } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import axios from 'axios';

const BlockInput = ({ length, onComplete }) => {
    const [code, setCode] = useState(new Array(length).fill(''));
    const inputs = useRef([]);

    const handleChange = (text, index) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);

        if (text && index < length - 1) {
            inputs.current[index + 1].focus();
        }

        if (newCode.join('').length === length) {
            onComplete(newCode.join(''));
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    return (
        <View style={styles.container}>
            {code.map((value, index) => (
                <TextInput
                    key={index}
                    style={styles.input}
                    value={value}
                    onChangeText={(text) => handleChange(text, index)}
                    keyboardType="numeric"
                    maxLength={1}
                    ref={(input) => (inputs.current[index] = input)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                />
            ))}
        </View>
    );
};

export default function OtpInputField() {
    const handleComplete = async (code) => {
        console.log('Code entered:', code);

        try {
            const response = await axios.post('http://172.20.10.3:8000/api/v1/users/verify-2fa-code/', {
                phone_number: '0968324065', // replace with the actual phone number
                code: code,
            });

            if (response.status === 200) {
                // Code verified successfully
                console.log('Verification successful');
                // You can navigate to the next screen or perform other actions here
            } else {
                // Handle error response
                console.log('Verification failed');
            }
        } catch (error) {
            console.error('Error verifying code:', error);
        }
    };

    return (
        <View style={styles.appContainer}>
            <Text style={styles.label}>Enter Verification Code:</Text>
            <BlockInput length={6} onComplete={handleComplete} />
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 18,
        marginBottom: 20,
    },
    input: {
        height: 50,
        width: 50,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 5,
        textAlign: 'center',
        fontSize: 18,
    },
});

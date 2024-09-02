import { passwordreset } from '@/app/services/auth';
import { PasswordButton } from '@/components/button';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TextInput } from 'react-native';

export default function PasswordForms() {

    const [email, setEmail] = React.useState('');
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const handlePasswordReset = async () => {
        setLoading(true);
        try {
            const response = await passwordreset(email);
            if (response) {
                navigation.navigate('OTPResetPassword');
            }
        } catch (error) {
            Alert.alert('Error', 'Failed to send password reset code. Please try again.');
        }
    };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.paragraph}>Enter your Email</Text>
        <View style={styles.inputFormTwo}>
        <View >
            <Text style={styles.inputText}>Email</Text>
                <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="austin@gmail.com"
                keyboardType="email-address"/>
            </View>
            <PasswordButton onPress={handlePasswordReset}/>
        </View>
    </View>
  )
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
    paragraph: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 18,
    },
    inputFormOne: {
        flexDirection: 'row',
        width: 100
    },
    inputText: {
        marginLeft: 12,
        marginBottom: 4,
        padding: 4,
        borderRadius: 4,
        fontSize: 18,
    },
    inputOne: {
        borderColor: '#00000044',
        borderWidth: 1,
        marginLeft: 14,
        marginRight: 10,
        marginTop: 4,
        marginBottom: 4,
        padding: 4,
        borderRadius: 4,
        width: 180,
        
    },
    inputFormTwo: {

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

    checkboxManager: {
        flexDirection: 'row',
        marginTop: 8,
    },

    checkbox: {
        marginLeft: 14,
        marginTop: 2,
        marginRight: 4,
        width: 12,
        height: 12,
        borderColor: 'black',
    },

    checkBoxText: {
        fontSize: 14,
        fontWeight: 'bold'
    },
})
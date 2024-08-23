import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Button } from 'react-native';
import { Input } from 'react-native-magnus';

import axios from 'axios';
import { ResetPasswordButton } from '@/components/button';

export default function ResetPasswordForms({ navigation }) {
  const [newPassword, setNewPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    if (newPassword !== verifyPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('https://your-backend-url.com/api/v1/password-reset/', {
        password1: newPassword,
        password2: verifyPassword,
      });

      if (response.status === 200) {
        Alert.alert('Success', 'Password has been reset successfully');
        navigation.navigate('Login'); // Redirect to the login screen
      } else {
        Alert.alert('Error', 'Unexpected status code: ' + response.status);
      }
    } catch (error) {
      if (error.response) {
        Alert.alert('Error', error.response.data.error || 'Something went wrong');
      } else if (error.request) {
        Alert.alert('Error', 'No response received');
      } else {
        Alert.alert('Error', 'Error setting up request: ' + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.paragraph}>Your new password must not be the same as your old password</Text>
      <View style={styles.inputFormTwo}>
        <View>
          <Text style={styles.inputText}>New Password</Text>
          <Input
            focusBorderColor="blue700"
            style={styles.input}
            onChangeText={setNewPassword}
            value={newPassword}
            secureTextEntry
          />
        </View>
      </View>
      <View style={styles.inputFormTwo}>
        <View>
          <Text style={styles.inputText}>Verify Password</Text>
          <Input
            focusBorderColor="blue700"
            style={styles.input}
            onChangeText={setVerifyPassword}
            value={verifyPassword}
            secureTextEntry
          />
        </View>
      </View>
      <ResetPasswordButton 
        onPress={handleResetPassword}
        
      />
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
  paragraph: {
    fontSize: 16,
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
  inputFormTwo: {
    marginBottom: 20,
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
});


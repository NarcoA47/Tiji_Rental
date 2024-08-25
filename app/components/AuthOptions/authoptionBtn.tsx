import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AuthOptionBtn = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login'); // Navigate to Login screen
  };

  const handleRegister = () => {
    navigation.navigate('Profile'); // Navigate to Register screen
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
        To enjoy full access to TiJi, kindly login or register an account.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: -300,
    top: 120,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 16,
    color: '#0034BF',
  },
  button: {
    backgroundColor: '#0034BF',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: '#E0E0E0',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#000000',
    fontSize: 16,
  },
});

export default AuthOptionBtn;

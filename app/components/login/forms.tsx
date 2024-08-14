import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import { Input } from "react-native-magnus";
import {Checkbox, Text } from "react-native-magnus";

export default function SigninForms() {

    const [password, getPassword] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const [isChecked, setChecked] = useState(false);
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };


  return (
    <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputFormTwo}>
        <View >
            <Text style={styles.inputText}>Phone Number</Text>
                <Input
                    
                    placeholder="e.g +260 968"
                    onChangeText={onChangeNumber}
                    
                    focusBorderColor="blue700"
                    style={styles.input}
                    value={number}
                
                keyboardType="phone-pad"/>
                
            </View>
            <View >
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
})
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';

export default function ResetPasswordForms() {

    const [newPassword, setNewPassword] = React.useState('');
    const [verifyPassword, setVerifyPassword] = React.useState('');



  return (
    <View style={styles.container}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.paragraph}>Your new password must not be the same as your old password</Text>
        <View style={styles.inputFormTwo}>
        <View >
            <Text style={styles.inputText}>New Password</Text>
                <TextInput
                mode='outlined'
                style={styles.input}
                onChangeText={setNewPassword}
                value={newPassword}
                
                />
            </View>
        </View>
        <View style={styles.inputFormTwo}>
        <View >
            <Text style={styles.inputText}>Verify Password</Text>
                <TextInput
                mode='outlined'
                style={styles.input}
                onChangeText={setVerifyPassword}
                value={verifyPassword}
                
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
        borderColor: '#00000044',
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
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from 'react-native-magnus';
import { TextInput } from 'react-native-paper'; 

export default function PasswordForms() {

    const [number, onChangeNumber] = React.useState('');



  return (
    <View style={styles.container}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.paragraph}>Enter your Phone Number</Text>
        <View style={styles.inputFormTwo}>
        <View >
            <Text style={styles.inputText}>Phone Number</Text>
                <Input
                style={styles.input}
                onChangeText={onChangeNumber}
                focusBorderColor="blue700"
                value={number}
                placeholder="e.g +260 968"
                keyboardType="phone-pad"/>
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
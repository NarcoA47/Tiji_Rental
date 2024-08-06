import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Checkbox from 'expo-checkbox';

export default function SigninForms() {

    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const [isChecked, setChecked] = useState(false);


  return (
    <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <View style={styles.inputFormTwo}>
        <View >
            <Text style={styles.inputText}>Phone Number</Text>
                <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder=""
                keyboardType="number"/>
            </View>
            <View >
            <Text style={styles.inputText}>Password</Text>
                <TextInput
                style={styles.input}
                onChangeText={text}
                value={text}
                placeholder=""
                keyboardType="text"/>
            </View>
            
        </View>
        <View style={styles.checkboxManager}>
            <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            style={styles.checkbox}
            />
            <Text style={styles.checkBoxText}>Remeber Me</Text>
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
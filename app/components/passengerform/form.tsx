import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { ScrollView } from 'react-native-gesture-handler';
import { Input } from 'react-native-magnus';

export default function PassengerForm() {

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    
  return (
    <ScrollView>
        
    <View style={styles.container}>
        <Text style={styles.title}>Passenger Details</Text>
        <View style={styles.inputFormOne}>
            <View >
            <Text style={styles.inputText}>First Name</Text>
                <Input
                style={styles.inputOne}
                focusBorderColor="blue700"
                onChangeText={setFirstName}
                value={firstName}
                placeholder="First Name"
                />
            </View>
            <View>
            <Text style={styles.inputText}>Last Name</Text>
                <Input
                focusBorderColor="blue700"
                style={styles.inputOne}
                onChangeText={setLastName}
                value={lastName}
                placeholder="Last Name"
                />
            </View>
        </View>
        <View style={styles.inputFormTwo}>
            
            <View >
                <Text style={styles.inputText}>Phone Number</Text>
                    <Input
                    style={styles.input}
                    focusBorderColor="blue700"
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="e.g +260 968"
                    keyboardType="phone-pad"/>
            </View>
        </View>
    </View>
    </ScrollView>
    
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
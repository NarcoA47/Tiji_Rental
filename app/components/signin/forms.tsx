import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { ScrollView } from 'react-native-gesture-handler';

export default function SigninForms() {

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const [isChecked, setChecked] = useState(false);
    const [password, setPassword] = React.useState("");
    const [newpassword, setNewPassword] = React.useState("");
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };

  return (
    <ScrollView>
        
    <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <View style={styles.inputFormOne}>
            <View >
            <Text style={styles.inputText}>First Name</Text>
                <TextInput
                style={styles.inputOne}
                onChangeText={setFirstName}
                mode='outlined'
                value={firstName}
                placeholder="First Name"
                />
            </View>
            <View>
            <Text style={styles.inputText}>Last Name</Text>
                <TextInput
                style={styles.inputOne}
                mode='outlined'
                onChangeText={setLastName}
                value={lastName}
                placeholder="Last Name"
                />
            </View>
        </View>
        <View style={styles.inputFormTwo}>
            <View >
                <Text style={styles.inputText}>Username</Text>
                    <TextInput
                    style={styles.input}
                    mode='outlined'
                    onChangeText={setUsername}
                    value={username}
                    placeholder="e.g Wayne29"
                    />
            </View>
            <View >
                <Text style={styles.inputText}>Email</Text>
                    <TextInput
                    style={styles.input}
                    mode='outlined'
                    onChangeText={setEmail}
                    value={email}
                    placeholder="e.g austin23@gmail.com"
                    />
            </View>
            <View >
                <Text style={styles.inputText}>Phone Number</Text>
                    <TextInput
                    style={styles.input}
                    mode='outlined'
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="e.g +260 968"
                    keyboardType="phone-pad"/>
            </View>
            <View>
                <Text style={styles.inputText}>New Password</Text>
                <TextInput
                style={styles.input}
                mode='outlined'
                onChangeText={text => setNewPassword(text)}
                value={newpassword}
                placeholder="New Password"
                secureTextEntry={!passwordVisible}
                />
                {/* <TouchableOpacity onPress={togglePasswordVisibility} style={styles.visibilityToggle}>
                    <Text>{passwordVisible ? 'Hide' : 'Show'}</Text>
                </TouchableOpacity> */}
            </View>
            <View>
                <Text style={styles.inputText}>Verify Password</Text>
                <TextInput
                style={styles.input}
                mode='outlined'
                onChangeText={setPassword}
                value={password}
                placeholder="Verify Password"
                secureTextEntry={!passwordVisible} // Optional: Use the same visibility toggle for both fields
                />
            </View>
        </View>
        <View style={styles.checkboxManager}>
            <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            style={styles.checkbox}
            />
            <Text style={styles.checkBoxText}>Terms and Conditions</Text>
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
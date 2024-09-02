import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Checkbox from 'expo-checkbox';
import { ScrollView } from 'react-native-gesture-handler';
import RegisterButton from '@/components/button';
import { Ionicons } from '@expo/vector-icons'; // Importing the icon library
import { signup } from '@/app/services/auth';

export default function SigninForms() {

    const navigation = useNavigation(); 

    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [password, setPassword] = React.useState("");
    const [isChecked, setChecked] = useState(false);
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };

    const handleSignup = async () => {
        try {
          const response = await signup(username, phone_number, email, password);
          navigation.navigate('Login');
        }
        catch (error) {
            Alert.alert('Error', 'Registration Failed. Please try again.');
        }
      };


  return (
    <ScrollView>
        
    <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        {/* <View style={styles.inputFormOne}> */}
            {/* <View >
            <Text style={styles.inputText}>First Name</Text>
                <Input
                style={styles.inputOne}
                focusBorderColor="blue700"
                onChangeText={setFirstName}
                value={firstName}
                placeholder="First Name"
                />
            </View> */}
            {/* <View>
            <Text style={styles.inputText}>Last Name</Text>
                <Input
                focusBorderColor="blue700"
                style={styles.inputOne}
                onChangeText={setLastName}
                value={lastName}
                placeholder="Last Name"
                />
            </View>
        </View> */}
        <View style={styles.inputFormTwo}>
            <View >
                <Text style={styles.inputText}>Username</Text>
                    <TextInput
                    style={styles.input}
                    onChangeText={setUsername}
                    value={username}
                    keyboardType='default'
                    placeholder="e.g Wayne29"
                    />
            </View>
            <View >
                <Text style={styles.inputText}>Email</Text>
                    <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    keyboardType='email-address'
                    placeholder="e.g austin23@gmail.com"
                    />
            </View>
            <View >
                <Text style={styles.inputText}>Phone Number</Text>
                    <TextInput
                    style={styles.input}
                    // focusBorderColor="blue700"
                    onChangeText={setphone_number => setPhoneNumber(setphone_number)}
                    value={phone_number}
                    placeholder="e.g +260 968"
                    keyboardType="phone-pad"/>
            </View>
            <View>
                <Text style={styles.inputText}>New Password</Text>
                <TextInput
                style={styles.input}
                onChangeText={text => setPassword(text)}
                value={password}
                keyboardType="visible-password"
                placeholder="New Password"
                secureTextEntry={!passwordVisible}
                // suffix={
                //     <Ionicons
                //         name={passwordVisible ? 'eye' : 'eye-off'}
                //         size={24}
                //         color="gray"
                //         onPress={togglePasswordVisibility}
                //     />
                // }
                />
                {/* <TouchableOpacity onPress={togglePasswordVisibility} style={styles.visibilityToggle}>
                    <Text>{passwordVisible ? 'Hide' : 'Show'}</Text>
                </TouchableOpacity> */}
            </View>
            {/* <View>
                <Text style={styles.inputText}>Verify Password</Text>
                <Input
                style={styles.input}
                focusBorderColor="blue700"
                onChangeText={setPassword}
                value={password}
                placeholder="Verify Password"
                secureTextEntry={!passwordVisible} // Optional: Use the same visibility toggle for both fields
                />
            </View> */}
        </View>
        <View style={styles.checkboxManager}>
            <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            style={styles.checkbox}
            />
            <Text style={styles.checkBoxText}>Terms and Conditions</Text>
        </View>
        <RegisterButton onPress={handleSignup}/>
        
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
        fontSize: 24,
        // top: 2,
        width: 18,
        height: 18,
        borderColor: 'black',
    },

    checkBoxText: {
        fontSize: 14,
        fontWeight: 'bold'
    },
})
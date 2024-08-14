import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { ScrollView } from 'react-native-gesture-handler';
import { Input } from 'react-native-magnus';

export default function EditProfileForm() {

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const [isChecked, setChecked] = useState(false);
    const [nrc, setNRC] = React.useState("");
    const [newpassword, setNewPassword] = React.useState("");
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };

  return (
    <ScrollView>
    <View style={styles.container}>
        <Text style={styles.title}>Edit Profile</Text>
        <View style={styles.subheaderContainer}>
            <View style={styles.grayLine} />
        </View>
        <View style={styles.inputFormTwo}>
            <View >
                <TextInput
                
                label="Full Name"
                activeOutlineColor='#0034BF'
                onChangeText={setFirstName}
                outlineColor='#0034BF'
                value={firstName}
                placeholder="Full Name"
                />
            </View>
        </View>
        <View style={styles.inputFormTwo}>
            <View >
                    <TextInput
                    label="Username"
                    onChangeText={setUsername}
                    value={username}
                    placeholder="e.g Wayne29"
                    />
            </View>
            <View >
                    <TextInput
                    label="Phone Number(Required Field)"
                    onChangeText={onChangeNumber}
                    value={number}
                    disabled
                    placeholder="e.g +260 968"
                    keyboardType="phone-pad"/>
            </View>
            <View >
                    <TextInput
                    label="NRC(Optional)"
                    
                    onChangeText={setEmail}
                    value={email}
                    placeholder="e.g austin23@gmail.com"
                    />
            </View>
            <View>
                <TextInput
                label="Email"
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="e.g austin23@gmail.com"
                secureTextEntry={!passwordVisible}
                />
                
            </View>
        </View>
    </View>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
        top: 12,
    },
    subheaderContainer: {
        marginVertical: 10,
        alignItems: 'flex-start', // Center the line horizontally
      },
      grayLine: {
        borderBottomColor: '#d3d3d3', // Gray color
        borderBottomWidth: 2,
        width: 700, // Fixed width (e.g., 200 pixels)
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
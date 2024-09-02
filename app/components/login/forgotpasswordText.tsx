import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
// import CheckBox from '@react-native-community/checkbox';

export default function ForgetPasswordText() {


    const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <View style={styles.checkboxManager}>
            {/* <CheckBox><Text style={styles.checkBoxText}>Remeber Me</Text></CheckBox> */}
            
        </View>
        <View style={styles.textManager}> 
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
            <Text style={styles.passwordController}>Forget Password</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        textAlign: 'right',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },

    textManager: {
        marginTop: 8,
        marginLeft: 14,
        flexDirection: 'row',
    },

    text: {
        marginRight: 4,
        fontSize: 18,
    },

    loginController: {
        fontSize: 16,
        color: '#0034BF'
    },
    passwordController: {
        marginRight: 16,
        fontSize: 16,
        color: '#0034BF',
        
    },

    checkboxManager: {
        flexDirection: 'row',
        marginTop: 8,
        marginLeft: 14,
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
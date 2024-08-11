import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function LoginText() {


    const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
            <Text style={styles.passwordController}>Forget Password</Text>
        </TouchableOpacity>
        <View style={styles.textManager}> 
        <Text style={styles.text}>I Don't have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}><Text  style={styles.loginController}>Signin</Text></TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        textAlign: 'right',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    textManager: {
        marginRight: 16,
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
        fontSize: 16,
        color: '#0034BF',
        
    },
})
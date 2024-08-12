import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function ForgetPasswordText() {


    const navigation = useNavigation()

  return (
    <View style={styles.container}>
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
        marginRight: 16,
        fontSize: 16,
        color: '#0034BF',
        
    },
})
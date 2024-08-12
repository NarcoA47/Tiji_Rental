import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function LoginText() {

    const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <View style={styles.textManager}> 
        <Text style={styles.text}>Already have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text  style={styles.loginController}>Login</Text></TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        textAlign: 'right',
        alignItems: 'flex-start',
        paddingLeft: 27,
        marginBottom: 80,
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
        fontSize: 18,
        color: '#0034BF'
    },
})
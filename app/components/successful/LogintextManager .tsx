import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function LoginSuccessfullTextMessage() {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.leadingText}>Successful</Text>
        </View>
        <View>
            <Text style={styles.bodyText}>You have successfuly Login!</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    leadingText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 12,
    },

    bodyText: {
        fontSize: 18,
        margin: 12,
        textAlign: 'center',
    },
})
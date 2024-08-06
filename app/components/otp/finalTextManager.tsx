import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function FinalTextManager() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Didn't receive code?</Text>
        <TouchableOpacity><Text style={styles.action}> Resend code</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    text: {
        fontSize: 18,
    },

    action: {
        fontSize: 18,
        color: '#0034BF'
    },
})
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function OtpTextManage() {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.leadingText}>OTP Code</Text>
        </View>
        <View>
            <Text style={styles.bodyText}>An OTP code has been shared with you, Kindly input it below</Text>
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
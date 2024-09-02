import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function FinalTextManager() {

    const handleResendCodePress = async () => {
      try {
        await resendCode();
        Alert.alert('Success', 'A new code has been sent to your email.');
      } catch (error) {
        Alert.alert('Error', 'Failed to resend code. Please try again.');
      }
    };
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Didn't receive code?</Text>
        <TouchableOpacity onPress={handleResendCodePress}>
            <Text style={styles.action}>Resend code</Text>
      </TouchableOpacity>
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
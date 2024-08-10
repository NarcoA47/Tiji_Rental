import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Bookings() {
  return (
    <View style={styles.container}>
        <Text style={styles.textTitle}>Recent Bookings</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        elevation: 3,
    },

    textTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },
})

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function PopularText() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Popular Places</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        marginLeft: 10,
    },

    title: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
})
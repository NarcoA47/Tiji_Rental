import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function HeadTextManager() {
  return (
    <View style={styles.container}>
        <Text style={styles.textHeader}>Company Name</Text>
        <Text style={styles.textTitle}>Live Location, Address Chitu Road</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },

  textHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 1
  },

  textTitle: { 
    fontSize: 18,
    marginBottom: 1,
    color: '#B4B4B4'
  },
})
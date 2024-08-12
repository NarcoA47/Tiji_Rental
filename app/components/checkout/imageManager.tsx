import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function ImageManager() {
  return (
    <View style={styles.container}>
        <Image source={require('../../../assets/images/homeScreen/Car-hire.png')} style={styles.imageManager}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },

    imageManager: {
        width: 300,
        height: 240,
    },
})
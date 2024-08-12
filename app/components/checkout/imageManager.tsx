import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function ImageManager() {
  return (
    <View>
        <Image source={require('../../../assets/images/homeScreen/Car-hire.png')} style={styles.imageManager}/>
    </View>
  )
}


const styles = StyleSheet.create({
    imageManager: {
        width: 200,
        height: 160,
    },
})
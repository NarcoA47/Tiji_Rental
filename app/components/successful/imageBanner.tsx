import React from 'react'
import { Image, View, StyleSheet, Text } from 'react-native';

export default function ImageBanner() {
  return (
    <View style={styles.container}>
        <Image
            source={require('../../../assets/images/userOnboard/2.png')}
            style={styles.image}
        />
    </View>
  )
}

const  styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    image: {
        marginTop: 100,
        width: 200,
        height: 200,
    },
})
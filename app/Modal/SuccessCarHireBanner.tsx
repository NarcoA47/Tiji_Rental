import React from 'react'
import { Image, View, StyleSheet, Text } from 'react-native';

export default function SuccessImageCarHireBanner() {
  return (
    <View style={styles.container}>
        <Image
            source={require('../../assets/images/methods/checkbox.png')}
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
        marginTop: 15,
        width: 100,
        height: 100,
        bottom: 20,
    },
})
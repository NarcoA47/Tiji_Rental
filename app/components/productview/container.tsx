import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Container() {
  return (
    <View>
        <View style={styles.cardTwo}>
            <View style={styles.contentOne}>
            <View style={styles.textContainer}>
                    <Text style={styles.leadText}>Car hire services</Text>
                    <Text style={styles.descriptionText1}>Explore Our Diverse Fleet</Text>
                </View>
                <Image style={styles.ImageControllerCardTwo} source={require('../../../assets/images/homeScreen/Bmw.png')}/>
                <View style={styles.textContainer}>
                    <Text style={styles.leadText}>BMW</Text>
                    <Text style={styles.descriptionText}>M4 Competiton</Text>
                    <Text style={styles.descriptionText}>350/Day</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

    ImageControllerCardTwo: {
        width: 330,
        height: 160,
        marginBottom: 10,
    },

    contentOne: {
        margin: 10,
    },

    textContainer: {
        marginBottom: 10,
    },
    
    leadText: {
        color: '#FFFFFF',
        marginTop: 4,
        marginBottom: 6,
        fontWeight: 'bold',
        fontSize: 20,
    },

    descriptionText: {
        color: '#FFFFFF',
        marginBottom: 2,
        fontWeight: 'bold',
        fontSize: 14,
    },
    descriptionText1: {
        color: '#FFFFFF',
        marginBottom: 2,
        fontWeight: 'bold',
        fontSize: 12,
    },

    cardTwo: {
        // backgroundColor: '#ffffff',
        width: 240,
        height: 180,
        // borderRadius: 5,
        margin: 20,
    },
})
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function Slider() {
  return (
    <View style={styles.container}>
        <View style={styles.cardOne}>
            <View style={styles.contentOne}>
                <Text style={styles.leadText}>Tickets</Text>
                <Text style={styles.descriptionText}>Buy your ticket and explore</Text>
                <Image style={styles.ImageController} source={require('../../../assets/images/homeScreen/Car-hire.png')}/>
            </View>
        </View>
        <View style={styles.cardTwo}>
            <View style={styles.contentOne}>
                <Text style={styles.leadText}>Car Hire</Text>
                <Text style={styles.descriptionText}>Rent Your Car at a cost</Text>
                <Image style={styles.ImageControllerCardTwo} source={require('../../../assets/images/homeScreen/Car-hire.png')}/>
            </View>
        </View>
    </View>
  )
}

const styles =StyleSheet.create({

    container:{
        flexDirection: 'row'
    },

    cardOne: {
        backgroundColor: '#ffffff',
        width: 120,
        height: 200,
        borderRadius: 5,
        margin: 10,
    },

    ImageController: {
        width: 110,
        height: 88,
        
    },

    ImageControllerCardTwo: {
        width: 200,
        height: 160,
        marginBottom: 10,
    },

    contentOne: {
        margin: 10,
        
    },

    leadText: {
        color: '#0034BF',
        marginTop: 4,
        marginBottom: 6,
        fontWeight: 'bold',
        fontSize: 20,
    },

    descriptionText: {
        color: '#0034BF',
        marginBottom: 6,
        fontWeight: 'bold',
        fontSize: 14,
    },

    cardTwo: {
        backgroundColor: '#ffffff',
        width: 240,
        height: 180,
        borderRadius: 5,
        margin: 20,
    },

})

export default Slider

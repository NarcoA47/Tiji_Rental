import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function DatePicker() {
  return (
    <View style={styles.conatiner}>
        <Text style={styles.headingText}>Pick A Date</Text>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.insideText} >Today</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text  style={styles.insideText} >Tomorrow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text  style={styles.insideText} >Select Date</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    conatiner: {
        margin: 20,
        top: 40
    },

    headingText: {
        fontSize: 18,
        paddingLeft: 12,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginBottom: 1
    },

    insideText: {
        color: '#FFFFFF'
    },



    buttonContainer: {
        flexDirection: 'row',
    },

    optionButton: {
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 10,
        padding: 4,
        margin: 8,
    },
})
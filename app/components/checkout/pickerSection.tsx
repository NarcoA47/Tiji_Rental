import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function PickerSection() {
  return (
    <View style={styles.conatiner}>
        <Text style={styles.headingText}>Pick A Date</Text>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.optionButton}>
                <Text>Today</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text>Tomorrow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text>Select Date</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    conatiner: {
        margin: 20,
    },

    headingText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 1
    },

    buttonContainer: {
        flexDirection: 'row',
    },

    optionButton: {
        borderColor: '#8B8B8B',
        borderWidth: 1,
        borderRadius: 4,
        padding: 4,
        margin: 8,
    },
})
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function More() {
  return (
   <View style={sytles.container}>
    <Text>More Cars</Text>
    <View>
        <Text>Categories</Text>
        <View style={sytles.itemContainer}>
            <TouchableOpacity style={sytles.item}>
                <Text>All</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>SUV</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Seden</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Coupe</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Luxary Car</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Hybrid</Text>
            </TouchableOpacity>
        </View>
    </View>
   </View>
  )
}

const sytles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    itemContainer: {
        
    },
    item: {
        borderWidth: 1,
        borderColor: '#383838',
        padding: 10,
        margin: 10,
    },
})
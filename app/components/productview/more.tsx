import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function More() {
  return (
   <View style={styles.container}>
    <Text  style={styles.title}>More Cars</Text>
    <View>
        <Text style={styles.subTitle}>Categories</Text>
        <View style={styles.itemContainer}>
            <TouchableOpacity style={styles.item}>
                <Text>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text>SUV</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text>Seden</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text>Coupe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text>Luxary Car</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text>Hybrid</Text>
            </TouchableOpacity>
        </View>
    </View>
   </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        margin: 20,
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10,
      },

      subTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10,
      },

    itemContainer: {
        flexDirection: 'row',
    },
    
    item: {
        borderWidth: 1,
        borderColor: '#383838',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
})
import { BookNowButton } from '@/components/button'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function FooterManager() {
  return (
    <View style={styles.container}>
        <View style={styles.textCanvas}>
          <View style={styles.textContainer}>
            <View style={styles.leadText}>
              <Text style={styles.textTitle}>Merceded AMG</Text>
              <Text style={styles.textPrice}>K1,000/day</Text>
            </View>
            <View>
            <AntDesign name="staro" size={24} color="#ffffff" />
            </View>
          </View>
          <View style={styles.secondaryTextContainer}>
            <Text style={styles.secondLeadText}>Description</Text>
            <Text style={styles.secondText}>Wanna ride the coolesr sports car in the world</Text>
          </View>
          <View style={styles.finalTextContainer}>
            <Text style={styles.finalTextLead}>Company Info</Text>
            <Text style={styles.finalText}>About, Contact Info, Location</Text>
          </View>
        </View>
        <BookNowButton/>
    </View>
  )
}

const styles = StyleSheet.create({
    
    container: {
      backgroundColor: '#0034BF',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      color: '#ffffff',
    },

    textCanvas: {
      margin: 20,
    },

    textContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },

    leadText: {
      
    },
    
    textTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#ffffff'
    },

    textPrice: {
      fontWeight: 'bold',
      color: '#ffffff'
    },

    secondaryTextContainer: {
      marginTop: 10,
      marginBottom: 10,
    },

    secondLeadText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#ffffff'
    },

    secondText: {
      fontWeight: 'bold',
      color: '#ffffff'
    },

    finalTextContainer: {
      marginTop: 10,
      marginBottom: 10,
    },

    finalTextLead: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#ffffff'
    },

    finalText: {
      fontWeight: 'bold',
      color: '#ffffff'
    },
})
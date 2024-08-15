import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Services() {

    const navigation = useNavigation()

    return (
        <View style={styles.scrollContainer}>
            <Text style={styles.serviceTitle}>Services</Text>
            <View style={styles.services}>
            <View style={styles.serviceContent}>
                <View >
                    <Text style={styles.bodyTitle}>Company Name</Text>
                    <Text style={styles.bodyText}>About the Company</Text>
                    <Text style={styles.bodyText}>Location</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ProductView')}>
                    <View>
                        <Image source={require('../../../assets/images/homeScreen/companycar.png')} style={styles.imageManager}/>
                    </View>
                </TouchableOpacity>
                
            </View>
            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        padding: 10,
        margin: 10,
    },
    services: {
        backgroundColor: '#0034BF',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        elevation: 3,
      },
      serviceContent: { 
        flexDirection: 'row',
        
      },
      bodyTitle: {
        color: '#FFFFFF',
        fontSize: 24,
        marginBottom: 40,
        fontWeight: 'bold',
      },
      bodyText: {
        color: '#FFFFFF',
      },
      serviceTitle: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      companyInfo: {
        
        marginTop: 10,
      },
      imageManager: {
        width: 143,
        height: 125,
        paddingLeft: 30,
        
    },
      
})
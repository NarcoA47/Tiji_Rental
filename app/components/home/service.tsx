import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Services() {

    const navigation = useNavigation()

    return (
        <View style={styles.scrollContainer}>
            <View style={styles.services}>
            <Text style={styles.serviceTitle}>Services</Text>
            <View style={styles.serviceContent}>
                <View>
                <Text>Company Name</Text>
                <Text>About the Company</Text>
                <Text>Location</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ProductView')}>
                    <View>
                        <Image source={require('../../../assets/images/homeScreen/Car-hire.png')} style={styles.imageManager}/>
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
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        elevation: 3,
      },
      serviceContent: { 
        flexDirection: 'row',
      },
      serviceTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      companyInfo: {
        marginTop: 10,
      },
      imageManager: {
        width: 180,
        height: 150,
    },
      
})
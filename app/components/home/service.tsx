import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios'; 

export default function Services() {

  const [company, setCompany] = useState(null); // State to hold company data
  const navigation = useNavigation();

  useEffect(() => {
      // Fetch company data from your API
      axios.get('http://172.20.10.3:8000/api/v1/company/1/') // Adjust URL as needed
          .then(response => setCompany(response.data))
          .catch(error => console.error('Error fetching company data:', error));
  }, []);

  // if (!company) {
  //     // Show a loading indicator or message while data is being fetched
  //     return <Text>Loading...</Text>;
  // }
    return (
      <View style={styles.scrollContainer}>
        <Text style={styles.serviceTitle}>Services</Text>
        <View style={styles.services}>
            <View style={styles.serviceContent}>
                <View>
                    {/* <Text style={styles.bodyTitle}>{company.name}</Text> */}
                    {/* <Text style={styles.bodyText}>{company.about}</Text> */}
                    {/* <Text style={styles.bodyText}>{company.address}</Text> */}
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ProductView')}>
                    <View>
                        <Image source={require('../../../assets/images/homeScreen/companycar.png')} style={styles.imageManager} />
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
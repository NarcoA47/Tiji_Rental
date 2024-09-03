import { BookNowButton } from '@/components/button'
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function FooterManager() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('access_token');
        if (accessToken) {
          const carIds = [1, 2, 3]; // Replace with dynamic IDs if needed
          const response = await axios.get(`https://tiji-dev.herokuapp.com/api/v1/company/cars/?ids=${carIds.join(',')}`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`,
            },
          });

          const items = response.data.map(item => ({
            id: item.id,
            make: item.make,
            model: item.model,
            amount: item.amount,
            daily_rate: item.daily_rate,
            image_url: item.image_url,
            company: item.company,// Include company data
            category: item.category
          }));

          setData(items); // Update state with processed data
        } else {
          console.error('Access token not found');
          setError('Access token not found');
        }
      } catch (error) {
        console.error('Error fetching data:', error.response ? error.response.data : error.message);
        setError('Error fetching data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {data.map((item) => (
        <View key={item.id} style={styles.textCanvas}>
          <View style={styles.textContainer}>
            <View style={styles.leadText}>
              <Text style={styles.textTitle}>{item.make}</Text>
              <Text style={styles.textPrice}>K{item.amount}/day</Text>
            </View>
            <View>
              <AntDesign name="staro" size={24} color="#ffffff" />
            </View>
          </View>
          <View style={styles.secondaryTextContainer}>
            <Text style={styles.secondLeadText}>Description</Text>
            <Text style={styles.secondText}>{item.category.description}</Text>
          </View>
          <View style={styles.finalTextContainer}>
            <Text style={styles.finalTextLead}>Company Info</Text>
            <Text style={styles.finalText}>
              {item.company.name}
            </Text>
            <Text style={styles.finalText}>
              {item.company.about}, 
            </Text>
            <Text style={styles.finalText}>
              {item.company.contact_number}
            </Text>
          </View>
        </View>
      ))}
      <BookNowButton />
    </View>
  );
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

    leadText: {},
    
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
});

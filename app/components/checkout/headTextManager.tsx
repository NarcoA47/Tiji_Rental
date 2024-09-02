import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function HeadTextManager() {
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
          <Text style={styles.textHeader}>{item.company.name}</Text>
          <Text style={styles.textTitle}>{item.company.address}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },

  textHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 1
  },
  textCanvas: {
    margin: 20,
  },

  textTitle: { 
    fontSize: 18,
    marginBottom: 1,
    color: '#B4B4B4'
  },
})
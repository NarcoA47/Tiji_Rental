import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ActivityIndicator, FlatList } from 'react-native';

export default function MoreCards() {
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
          const response = await axios.get(`https://tiji-dev.herokuapp.com/api/v1/cars/?ids=${carIds.join(',')}`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`,
            },
          });
          console.log('API Response:', response.data); // Log response data

          // Assuming the relevant data is directly in response.data.results
          const items = response.data.results.map(item => ({
            id: item.id,
            make: item.make,
            model: item.model,
            daily_rate: item.daily_rate,
            image_url: item.image_url, 
            make: item.make, // Assuming this structure
            model: item.model,
            daily_rate: item.daily_rate,
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

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      {data.length === 0 ? (
        <Text style={styles.noDataText}>No cars available at the moment</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()} // Ensure 'id' is unique
          renderItem={({ item }) => (
            <View style={styles.cardManager}>
              <Text>{item.make} {item.model}</Text>
              <View>
                <Image
                  source={{ uri: item.image_url }}
                  source={{ uri: item.image_url }} 
                  style={styles.imageContainer}
                  // defaultSource={require('../../../assets/images/homeScreen/Car-hire.png')} // Fallback image if image_url fails to load
                />
              </View>
              <View style={styles.footerContainer}>
                <View>
                  <Text style={styles.time}>Daily</Text>
                  <Text style={styles.price}>${item.daily_rate}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Checkout')}
                  style={styles.buttonContainer}
                >
                  <Text style={styles.textColor}>Rent Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    margin: 10,
  },
  noDataText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'red',
  },
  cardManager: {
    flexBasis: '42%',
    backgroundColor: '#CCC9C9',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  imageContainer: {
    width: 150,
    height: 120,
    borderRadius: 10, // Optionally add border radius for images
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    backgroundColor: '#0034BF',
    margin: 4,
    height: 25,
    textAlign: 'center',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
  },
  textColor: {
    color: '#ffffff',
  },
  time: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

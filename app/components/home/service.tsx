import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function Services() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('access_token');
        if (accessToken) {
          // Fetching only car information for car ID 1
          const carId = 1;
          const response = await axios.get(`https://tiji-dev.herokuapp.com/api/v1/company/cars/?ids=${carId}`, {
            // headers: {
            //   'Content-Type': 'application/json',
            //   'Authorization': `Bearer ${accessToken}`,
            // },
          });

          const items = response.data.map(item => ({
            id: item.id,
            image_url: item.image_url,
            company: item.company,
            category: item.category,
          }));

          setData(items);
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
    <View style={styles.scrollContainer}>
      <Text style={styles.serviceTitle}>Services</Text>
      <View style={styles.services}>
        <TouchableOpacity onPress={() => navigation.navigate('CarAuthOption')}>
          {data.length === 0 ? (
            <Text style={styles.noDataText}>No services available at the moment</Text>
          ) : (
            data.map(item => (
              <View key={item.id} style={styles.textCanvas}>
                <View style={styles.serviceContent}>
                  <View style={styles.companyInfo}>
                    <Text style={styles.bodyTitle}>{item.company.name}</Text>
                    <Text style={styles.bodyText}>{item.company.address}</Text>
                  </View>
                  <View>
                    <Image source={{ uri: item.image_url }} style={styles.imageManager} />
                  </View>
                </View>
              </View>
            ))
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 10,
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
  services: {
    backgroundColor: '#0034BF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
  },
  serviceContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  companyInfo: {
    flex: 1,
  },
  bodyTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    marginBottom: 10,
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
  imageManager: {
    width: 143,
    height: 125,
    marginLeft: 10,
  },
});

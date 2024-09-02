import React, { useEffect } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function ImageManager() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('access_token');
        if (accessToken) {
          const response = await axios.get(`https://tiji-dev.herokuapp.com/api/v1/cars`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`,
            },
          });

          console.log('API Response:', response.data); // Log the entire response to check structure

          // Safely access results array
          const items = response.data?.results?.map(item => ({
            id: item.id,
            image_url: item.image_url,
          })) || [];

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
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Image 
            source={{ uri: item.image_url }}  
            style={styles.imageManager}
          />
        )}
        contentContainerStyle={styles.imageList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageList: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageManager: {
    width: 300,
    height: 240,
    marginBottom: 20,
  },
  errorText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'red',
  },
});

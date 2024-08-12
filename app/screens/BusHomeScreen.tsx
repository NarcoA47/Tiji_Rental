import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Bookings from '../components/home/bookings';
import Popular from '../components/home/popular';
import { ScrollView } from 'react-native-gesture-handler';
import { MainBusHomeNavigation } from '@/components/navigation/topNavigation';

const BusHomeScreen = () => {
  const [location, setLocation] = useState('Lusaka');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('Today');

  const popularPlaces = [
    { id: '1', title: 'Victoria Fall', description: 'Visit the Victoria Fall and travel with Tiji', location: 'Livingstone' },
    { id: '2', title: 'National Park', description: '', location: 'South Luangwa' },
  ];

  const recentBookings = [
    { id: '1', title: 'Greyhound Express', price: '$700', from: 'Surat, Guj.', to: 'Rajkot, Guj.', time: '3:00 PM', duration: '09h 00m' },
    { id: '2', title: 'Greyhound Express', price: '$700', from: 'Surat, Guj.', to: 'Rajkot, Guj.', time: '12:00 AM', duration: '09h 00m' },
  ];

  const handleSearch = () => {
    // Implement search functionality here
    console.log(`Searching for buses from ${location} to ${destination} on ${date}`);
  };

  return (
    <ScrollView>
      <MainBusHomeNavigation/>
      <View style={styles.container}>
        
        
        <Popular/>
        <Bookings/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
  },
  input: {
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 5,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  placeCard: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    marginVertical: 8,
    borderRadius: 5,
  },
  bookingCard: {
    padding: 12,
    marginVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
});

export default BusHomeScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = () => {
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
    <View style={styles.container}>
      <Text style={styles.header}>TIJI</Text>
      <TextInput
        style={styles.input}
        placeholder="Where are you going?"
        value={destination}
        onChangeText={setDestination}
      />
      <View style={styles.dateContainer}>
        <Button title="Today" onPress={() => setDate('Today')} />
        <Button title="Tomorrow" onPress={() => setDate('Tomorrow')} />
        <Button title="Select Date" onPress={() => {/* Implement date picker */}} />
      </View>
      <Button title="Search For A bus" onPress={handleSearch} />

      <Text style={styles.subHeader}>Popular Places</Text>
      <FlatList
        data={popularPlaces}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.placeCard}>
            <Text style={styles.placeTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.location}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />

      <Text style={styles.subHeader}>Recent Bookings</Text>
      <FlatList
        data={recentBookings}
        renderItem={({ item }) => (
          <View style={styles.bookingCard}>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
            <Text>{item.from} - {item.to}</Text>
            <Text>{item.time} ({item.duration})</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
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

export default HomeScreen;

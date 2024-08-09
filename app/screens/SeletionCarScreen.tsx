import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const App = () => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowPicker(true);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TIJI</Text>
        <Text style={styles.subtitle}>Chituli Rd, 6039</Text>
      </View>
      <Text style={styles.companyName}>Company Name</Text>
      <Text style={styles.location}>Live Location, Address Chituli Road</Text>
      <Text style={styles.dateLabel}>Pick a date</Text>
      <View style={styles.dateButtons}>
        <Button title="Today" onPress={() => setDate(new Date())} />
        <Button title="Tomorrow" onPress={() => {
          const tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);
          setDate(tomorrow);
        }} />
        <Button title="Select date" onPress={showDatepicker} />
      </View>
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
      {/* <Image
        source={{ uri: 'https://example.com/your-car-image.jpg' }} // Replace with actual image URL
        style={styles.carImage}
      /> */}
      <View style={styles.carInfo}>
        <Text style={styles.carName}>Mercedes AMG</Text>
        <Text style={styles.price}>K 1,000/day</Text>
        <Text style={styles.description}>Wanna ride the coolest sport car in the world?</Text>
        <Text style={styles.companyInfo}>Company Info: About, Contact Info, Location(address)</Text>
        <Button title="Book Now" onPress={() => alert('Booking confirmed!')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#0047AB',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
  },
  companyName: {
    fontSize: 20,
    marginVertical: 10,
  },
  location: {
    fontSize: 16,
    color: '#888',
  },
  dateLabel: {
    marginVertical: 10,
    fontSize: 18,
  },
  dateButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  carImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 10,
  },
  carInfo: {
    backgroundColor: '#0047AB',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  carName: {
    fontSize: 22,
    color: '#fff',
  },
  price: {
    fontSize: 18,
    color: '#fff',
  },
  description: {
    fontSize: 16,
    color: '#fff',
  },
  companyInfo: {
    fontSize: 14,
    color: '#ddd',
  },
});

export default App;

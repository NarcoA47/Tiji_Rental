import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome, Guest</Text>
        <TouchableOpacity>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {/* <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card}>
            <Image source={require('../../assets/images/homeScreen/Ticket.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Tickets</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Image source={require('../../assets/images/homeScreen/car_hire.png')} style={styles.cardImage} />
            <Text style={styles.cardTitle}>Car Hire</Text>
          </TouchableOpacity>
        </View> */}

        <View style={styles.services}>
          <Text style={styles.serviceTitle}>Services</Text>
          <View style={styles.companyInfo}>
            <Text>About the Company</Text>
            <Text>Location</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Popular Places</Text>
        {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['Victoria Fall', 'Livingstone', 'National Park', 'South Luangwa'].map((place, index) => (
            <View key={index} style={styles.placeCard}>
              <Image source={require(`../../assets/${place.replace(' ', '_').toLowerCase()}.png`)} style={styles.placeImage} />
              <Text>{place}</Text>
            </View>
          ))}
        </ScrollView> */}

        <Text style={styles.sectionTitle}>Recent Bookings</Text>
        {/* Add recent bookings component here */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#003366',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
  },
  loginText: {
    color: '#ffffff',
  },
  scrollContainer: {
    padding: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    flex: 1,
    margin: 5,
    alignItems: 'center',
    elevation: 3,
  },
  cardImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  services: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  companyInfo: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  placeCard: {
    marginRight: 10,
    alignItems: 'center',
  },
  placeImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
});

export default App;

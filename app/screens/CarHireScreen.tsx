import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const cars = [
    {
      id: 1,
      name: 'Porsche Cayman',
      price: 'k 2500',
      image: require('./assets/porsche.png'), // Placeholder for the image
    },
    {
      id: 2,
      name: 'Mercedes AMG',
      price: 'k 1000',
      image: require('./assets/mercedes.png'), // Placeholder for the image
    },
    {
      id: 3,
      name: 'Toyota Mark',
      price: 'k 350',
      image: require('./assets/toyota.png'), // Placeholder for the image
    },
    {
      id: 4,
      name: 'Toyota Vitz',
      price: 'k 500',
      image: require('./assets/vitz.png'), // Placeholder for the image
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TIJI</Text>
        <Text style={styles.subtitle}>Chituli Rd, 6039</Text>
        <Text style={styles.carService}>Car hire services</Text>
        <Text style={styles.exploreText}>Explore Our Diverse Fleet</Text>
        <Image
          source={require('./assets/bmw.png')} // Placeholder for the featured car image
          style={styles.featuredImage}
        />
        <Text style={styles.featuredCar}>BMW M4 Competition</Text>
        <Text style={styles.price}>350 ZMW/day</Text>
      </View>

      <Text style={styles.moreCars}>More Cars</Text>
      <View style={styles.categories}>
        <Text style={styles.category}>All</Text>
        <Text style={styles.category}>SUV</Text>
        <Text style={styles.category}>Sedan</Text>
        <Text style={styles.category}>Coupe</Text>
        <Text style={styles.category}>Luxury Car</Text>
        <Text style={styles.category}>Hybrid</Text>
      </View>

      <View style={styles.carList}>
        {cars.map(car => (
          <View key={car.id} style={styles.carItem}>
            <Image source={car.image} style={styles.carImage} />
            <Text style={styles.carName}>{car.name}</Text>
            <Text style={styles.carPrice}>{car.price}</Text>
            <TouchableOpacity style={styles.rentButton}>
              <Text style={styles.rentButtonText}>Rent now</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#3B5998',
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    fontSize: 28,
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  carService: {
    fontSize: 20,
    color: '#FFFFFF',
    marginTop: 10,
  },
  exploreText: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  featuredImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  featuredCar: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  price: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  moreCars: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 10,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  category: {
    fontSize: 16,
    color: '#3B5998',
  },
  carList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  carItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: '40%',
    elevation: 3,
  },
  carImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  carName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  carPrice: {
    fontSize: 14,
    color: '#888888',
  },
  rentButton: {
    backgroundColor: '#3B5998',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  rentButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default HomeScreen;

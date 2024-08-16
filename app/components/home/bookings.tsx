import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import BookingText from './bookingText';

export default function Bookings() {
  return (
    <View style={styles.container}>
      {/* <BookingText/> */}
      <View style={styles.card}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/Cars/MercedesAMG.png')} // Replace with your image URL
          style={styles.image}
        />
        <Text style={styles.title}>Greyhound Express</Text>
        <Text style={styles.price}>$700</Text>
      </View>
      <View style={styles.route}>
        <View style={styles.routeInfo}>
          <Text style={styles.location}>Surat, Guj...</Text>
          <Text style={styles.time}>3:00 PM</Text>
        </View>
        <View style={styles.routeIcon}>
          <View style={styles.routeUse}>
          <View style={styles.dots}/>
          <View style={styles.dots}/>
          <View style={styles.dots}/>
          <View style={styles.dots}/>
          <FontAwesome6 name="train" size={24} color="#800080" />
          <View style={styles.dots}/>
          <View style={styles.dots}/>
          <View style={styles.dots}/>
          <View style={styles.dots}/>
          </View>
          <Text style={styles.duration}>09h 00m</Text>
        </View>
        <View style={styles.routeInfo}>
          <Text style={styles.location}>Rajkot, Guj...</Text>
          <Text style={styles.time}>12:00 AM</Text>
        </View>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    margin: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },

  card: {

  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: '#000000',
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#800080', // Purple color for the price
  },
  route: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  routeInfo: {
    
    alignItems: 'center',
  },
  location: {
    fontSize: 14,
    color: '#333',
  },
  time: {
    fontSize: 16,
    color: '#800080', // Purple color for the time
    fontWeight: 'bold',
  },
  routeIcon: {
    
    alignItems: 'center',
  },
  routeUse: {
    flexDirection: 'row',
  },
  duration: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },

  dots: {
    position: 'relative',
    top: 14,
    width: 8,
    height: 4,
    backgroundColor: '#800080',
    borderRadius: 10,
    margin: 2.5,
  }
})

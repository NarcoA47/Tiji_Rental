import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default function OnBoardingTwo() {
  const navigation = useNavigation();
    //   const data = [
    //     {
    //         title: 'Welcome To TiJi',
    //         subtitle: 'Your One-Stop travel solution',
    //         image: require('../../assets/images/userOnboard/Welcome-cuate 1.png'),

    //     }
    //   ];

    //   const renderItem = ({ item }) => (
    //     <View style={styles.slide}>
    //       <Image source={item.image} style={styles.image} />
    //       <Text style={styles.title}>{item.title}</Text>
    //       <Text style={styles.subtitle}>{item.subtitle}</Text>
    //     </View>
    //   );
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/userOnboard/Car-ONBoarding.png')} 
        style={styles.image}
      />
      <Text style={styles.title}>Car Hire & Rental</Text>
      <Text style={styles.subtitle}>An Easy way of Car booking.</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate('onBoardingThree')} 
        style={styles.skip}
      >
        <View style={styles.row}>
            <View style={styles.dotsContainer}>
                <View style={styles.dots}/>
                <View style={styles.dot1}/>
                <View style={styles.dots}/>
            </View>
            <Text style={styles.skipText}>Next</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#003DA5',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        height: 900,
    },
    image: {
        width: '100%',
        height: '40%', // Adjusted for better responsiveness
        resizeMode: 'contain',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 10,
    },

    dotsContainer: {
        flexDirection: 'row',
        bottom: 160,
    },

    dots: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#D9D9D9', // Change this to your desired color
        marginRight: 5,
    },
    dot1: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#C9A96D', // Change this to your desired color
        marginRight: 5,
    },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: '#FFFFFF',
    marginVertical: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8, // Increased for a more modern look
    paddingVertical: 15,
    paddingHorizontal: 40,
    width: 370,
    marginBottom: 20, // Increased spacing
  },
  buttonText: {
    color: '#003DA5', // Matching button text color to the theme
    fontSize: 16,
    width: 300,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  skip: {
    position: 'absolute',
    bottom: 12,
    paddingRight: 23,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end'
  },

  skipText: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'right',
    bottom: 160,
  },
});

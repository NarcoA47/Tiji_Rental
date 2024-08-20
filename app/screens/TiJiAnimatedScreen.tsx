import { useNavigation } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const TiJiAnimateOpenningScreen = () => {
    const slideAnim = useRef(new Animated.Value(-500)).current; // Initial value for Y position

    const navigation = useNavigation(); // Hook for navigation

    useEffect(() => {
        Animated.sequence([
        Animated.delay(1000),
        Animated.timing(slideAnim, {
            toValue: -550,
            duration: 1000,
            useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 999,
            useNativeDriver: true, 
        }),
        ]).start(() => {
        // Navigation to OnBoardingScreen after animation completes
        navigation.navigate('OnBoardingScreen');
        });
    }, [slideAnim, navigation]);
    

  return (
    <View style={styles.container}>
      <View style={styles.blueContainer}>
        <Text style={styles.title}>TIJI</Text>
      </View>
      <Animated.View
        style={[
          styles.whiteContainer,
          {
            transform: [{ translateX: slideAnim }],
          },
        ]}
      >
        <Text style={styles.subtitle}>TIJI</Text>
        <Text style={styles.location}>Zambia</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueContainer: {
    backgroundColor: '#0038A8',
    width: '100%',
    height: 900, // Adjusted to cover the whole screen
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // Positioned to cover the whole screen
    top: 0,
  },
  whiteContainer: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  title: {
    fontSize: 48,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 48,
    color: '#0038A8',
    fontWeight: 'bold',
    // margin: 20,
    textAlign: 'left',
    bottom: 200,
    paddingRight: 200,
  },
  location: {
    fontSize: 20,
    color: '#000000',
    bottom: 200,
    paddingRight: 210,
  },
});

export default TiJiAnimateOpenningScreen;

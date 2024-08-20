import React from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import OnBoardingOne from '../onboarding/onBoardingScreenOne';
import OnBoardingTwo from '../onboarding/onBoardingScreenTwo';
import OnBoardingThree from '../onboarding/onBoardingScreenThree';

const { width : screenWidth } = Dimensions.get('window');

const OnBoardingScreenOne = () => {
  return (
    <View >
      <OnBoardingOne/>
    </View>
  );
};

const OnBoardingScreenTwo = () => {
  return (
    <View>
      <OnBoardingTwo/>
    </View>
  );
};

const OnBoardingScreenThree = () => {
  return (
    <View>
      <OnBoardingThree/>
    </View>
  );
};

const App = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const slides = [
    <OnBoardingScreenOne key="1" />,
    <OnBoardingScreenTwo key="2" />,
    <OnBoardingScreenThree key="3" />,
  ];

  const renderItem = ({ item }) => {
    return item;
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={slides}
        renderItem={renderItem}
        width={screenWidth}
        
        onSnapToItem={(index) => setActiveSlide(index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default App;
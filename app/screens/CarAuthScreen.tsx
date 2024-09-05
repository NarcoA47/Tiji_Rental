import React from 'react';
import { View, StyleSheet} from 'react-native';
import Naviagtion from '@/components/navigation/topNavigation';
import CarAuthOptionBtn from '../components/AuthOptions/CarauthoptionBtn';

function CarAuthOptionScreen () {
  return (
    <View style={{ backgroundColor: '#FFFF', flex: 1 }}>
      <Naviagtion/>
        <View style={styles.container}>
          <CarAuthOptionBtn/>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#ffffff',
      marginTop: 100,
  },
});

export default CarAuthOptionScreen;

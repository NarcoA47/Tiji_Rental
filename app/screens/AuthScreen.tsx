import React from 'react';
import { View, StyleSheet} from 'react-native';
import Naviagtion from '@/components/navigation/topNavigation';
import AuthOptionBtn from '../components/AuthOptions/authoptionBtn';

function AuthOptionScreen () {
  return (
    <View style={{ backgroundColor: '#FFFF', flex: 1 }}>
      <Naviagtion/>
        <View style={styles.container}>
          <AuthOptionBtn/>
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

export default AuthOptionScreen;

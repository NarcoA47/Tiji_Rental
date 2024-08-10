import { MainNavigation } from '@/components/navigation/topNavigation';
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Services from '../components/home/service';
import Popular from '../components/home/popular';

const HomeScreenMain = () => {
  return (
    <ScrollView>
       <View style={styles.container}>
      <MainNavigation/>
      <Services/>
      <Popular/>
    </View>
    </ScrollView>
   
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

export default HomeScreenMain;

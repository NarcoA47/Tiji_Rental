import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { List, MD3Colors, Divider } from 'react-native-paper';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; //
import { Text } from "react-native-magnus";
import { useNavigation } from 'expo-router';

export default function SupportListContainer() {
  const dropdownRef = React.createRef();
  const navigation = useNavigation()
  
  return (
    <ScrollView>
        <View>
            <Text mt="lg" letterSpacing={2} color="gray700">
            SIMPA TECHNOLOGIES LIMITED is located in Lusaka , Zambia and is part of the transport industry. We are a new company and we envision to penetrate the transport industry by allowing our clients to book tickets for long distances from the comfort of their homes. 
            </Text>
            <Text mt="lg" letterSpacing={2} color="gray700">With the coming of COVID-19 ,we believe in diconjesting bus stations and only allowing passengers who have reserved and booked tickets to their destination to freely move in those premises. This is in view to curb the spread of COVID-19.</Text>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 40,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  subheaderContainer: {
    marginVertical: 10,
    alignItems: 'flex-start', // Center the line horizontally
  },
  grayLine: {
    borderBottomColor: '#d3d3d3', // Gray color
    borderBottomWidth: 2,
    width: 700, // Fixed width (e.g., 200 pixels)
  },
});

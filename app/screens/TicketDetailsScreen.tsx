import React from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; //
import Naviagtion from '@/components/navigation/topNavigation';
import { StyleSheet, ScrollView } from 'react-native';
import CardDetailsContainer from '../components/busListTickets/carddetails';

const TicketDetails = () => {
  

  return (
    <ScrollView >
      <Naviagtion/>
      <CardDetailsContainer/>
    </ScrollView>
  );
};

export default TicketDetails;

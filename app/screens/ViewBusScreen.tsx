import { MainPayNavigation } from '@/components/navigation/topNavigation';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import BusListContainer from '../components/busListTickets/buseslist';

function ViewBusScreen() {
  
  return (
    <ScrollView>
      <MainPayNavigation/>
      <BusListContainer/>
    </ScrollView>
  );
};

export default ViewBusScreen;

import React from 'react'
import { View } from 'react-native'
import Naviagtion from '@/components/navigation/topNavigation';
import { ScrollView } from 'react-native-gesture-handler';
import PassengerForm from '../components/passengerform/form';
import { NextButton } from '@/components/button';


function PassengerDetailsScreen() {
  return (
    <ScrollView>
      <View>
        <Naviagtion/>
        <PassengerForm/>
        <NextButton/>
      </View>
    </ScrollView>
  )
}

export default PassengerDetailsScreen

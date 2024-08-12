import React, { useState } from 'react';
import { Text, View } from 'react-native'
import MobilePayForm from '../components/mobilepay/form';
import { PayButton } from '@/components/button';
import { MainPayNavigation, PayNaviagtion } from '@/components/navigation/topNavigation';


function MobilePayScreen () {

  return (
    <View>
      <MainPayNavigation/>
      <MobilePayForm/>
      <PayButton/>
      <PayNaviagtion/>
      
    </View>
  );
};


export default MobilePayScreen;

import React, { useState } from 'react';
import { View, Button } from 'react-native';
import ConfirmDetailsModal from '../Modal/ConfirmDetailsModal';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  
  const passengerDetails = {
    name: 'Tiza Mpata',
    phone: '+260 961780810',
    departureTime: '09:00hrs',
    tickets: 1,
    from: 'Lusaka',
    to: 'Kabwe',
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Show Confirm Details" onPress={() => setModalVisible(true)} />
      <ConfirmDetailsModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
        passengerDetails={passengerDetails} 
      />
    </View>
  );
};

export default App;

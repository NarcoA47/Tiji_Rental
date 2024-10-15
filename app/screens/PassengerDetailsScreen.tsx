import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Modal } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import CardDetailsContainer from '../components/busListTickets/carddetails'; 

export function PassengerDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const { busDetails, ticketCount } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [passengerDetails, setPassengerDetails] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    departureTime: busDetails.departure_time,
    tickets: ticketCount,
    from: busDetails.current_location,
    to: busDetails.where_to,
  });

  const handleInputChange = (field: string, value: string | number) => {
    setPassengerDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handleNext = () => {
    setModalVisible(true);
  };

  const totalAmount = busDetails.ticket_price * ticketCount;

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back-circle" size={48} color="#0046cf" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Passenger Details</Text>
      <Text style={styles.subtitle}>Please ensure you fill this before payments</Text>

      {/* Form */}
      <View style={styles.form}>
        <View style={styles.inputRow}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="First Name"
            value={passengerDetails.firstName}
            onChangeText={(text) => handleInputChange('firstName', text)}
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Last Name"
            value={passengerDetails.lastName}
            onChangeText={(text) => handleInputChange('lastName', text)}
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={passengerDetails.phone}
          onChangeText={(text) => handleInputChange('phone', text)}
        />
      </View>

      {/* <Text style={styles.label}>From: {passengerDetails.from}</Text>
      <Text style={styles.label}>To: {passengerDetails.to}</Text>
      <Text style={styles.label}>Departure Time: {passengerDetails.departureTime}</Text>
      <Text style={styles.label}>Number of Tickets: {passengerDetails.tickets}</Text>
      <Text style={styles.label}>Total Amount: K{totalAmount}.00</Text> */}

      {/* Next Button */}
      <TouchableOpacity onPress={handleNext} style={styles.buttonManager}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={modalVisible} animationType="slide">
        <CardDetailsContainer
          busDetails={busDetails}
          ticketCount={ticketCount}
          passengerDetails={passengerDetails}
          onClose={() => setModalVisible(false)}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
    textAlign: 'left',
  },
  form: {
    marginBottom: 30,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    height: 50,
  },
  halfInput: {
    width: '48%',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonManager: {
    backgroundColor: '#28a745',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PassengerDetails;

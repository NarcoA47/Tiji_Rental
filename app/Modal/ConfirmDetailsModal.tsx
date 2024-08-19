import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Close } from '@/components/navigation/topNavigation';

const ConfirmDetailsModal = ({ visible, onClose, passengerDetails }) => {
  const navigation = useNavigation();

  const handleProceedToPayment = () => {
    onClose(); // Close the modal
    navigation.navigate('Payment'); // Navigate to Payment screen
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose} // Close modal on Android back button
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Close onClose={onClose} />
          <Text style={styles.title}>Confirm Details</Text>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>
              <Text style={styles.bold}>Name: </Text>
              {passengerDetails.name}
            </Text>
            <Text style={styles.label}>
              <Text style={styles.bold}>Phone No: </Text>
              {passengerDetails.phone}
            </Text>
            <Text style={styles.label}>
              <Text style={styles.bold}>Departure Time: </Text>
              {passengerDetails.departureTime}
            </Text>
            <Text style={styles.label}>
              <Text style={styles.bold}>Number Of Tickets: </Text>
              {passengerDetails.tickets}
            </Text>
            <View style={styles.row}>
              <Text style={styles.label}>
                <Text style={styles.bold}>From: </Text>
                {passengerDetails.from}
              </Text>
              <Text style={styles.label}>
                <Text style={styles.bold}>To: </Text>
                {passengerDetails.to}
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleProceedToPayment}>
            <Text style={styles.buttonText}>Proceed to Payment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    color: '#0034BF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fieldContainer: {
    marginVertical: 10,
    padding: 10,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 2,
    borderRadius: 10,
    borderStyle: 'dotted',
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.5)',
    borderStyle: 'dotted',
  },
  bold: {
    fontWeight: 'bold',
  },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 5,
    },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#28a745',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ConfirmDetailsModal;

import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const ConfirmDetailsModal = ({ visible, onClose, passengerDetails }) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Confirm Details</Text>
          <Text style={styles.label}>Name: {passengerDetails.name}</Text>
          <Text style={styles.label}>Phone Number: {passengerDetails.phone}</Text>
          <Text style={styles.label}>Departure Time: {passengerDetails.departureTime}</Text>
          <Text style={styles.label}>Number Of Tickets: {passengerDetails.tickets}</Text>
          <Text style={styles.label}>From: {passengerDetails.from}</Text>
          <Text style={styles.label}>To: {passengerDetails.to}</Text>

          <TouchableOpacity style={styles.button} onPress={onClose}>
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
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

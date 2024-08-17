import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Close } from '@/components/navigation/topNavigation';
import { BackToHomeButton } from '@/components/button';
import ConfirmImagebanner from './confirmImageBanner';

const ConfirmedBookingTicketModal = ({ visible, onClose }) => {
  const navigation = useNavigation();

  const handleTicketDEtails = () => {
    onClose(); // Close the modal
    navigation.navigate('TicketDetails'); // Navigate to Ticket Screen
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
          <ConfirmImagebanner/>
          <Text style={styles.title}>Booking Confirmed!</Text>
          <View>
            <Text style={styles.bodyText}>Congratulations! Your bus ticket is
            confirmed. For more details check your
            email.
            </Text>
            </View>
          <TouchableOpacity style={styles.button} onPress={handleTicketDEtails}>
            <Text style={styles.buttonText}>View Your Ticket</Text>
          </TouchableOpacity>
          <BackToHomeButton/>
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
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: '#0034BF',
        fontWeight: 'bold',
        marginBottom: 10,
    },
  bodyText: {
    fontSize: 16,
    margin: 12,
    textAlign: 'center',
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
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
});

export default ConfirmedBookingTicketModal;

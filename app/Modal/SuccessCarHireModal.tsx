import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import ImageCarHireBanner from './ImageCarHireBanner';
import SuccessfulHireModal from './SuccessfulHire';

const SuccessCarHireModal = ({ visible, onClose }) => {
  const [carSuccessModalVisible, setCarSuccessModalVisible] = React.useState(false);

  const handleSuccessfullyCarHire = () => {
    onClose(); // Close the current modal
    setCarSuccessModalVisible(true); // Show the new modal
  };

  const handleCancel = () => {
    onClose(); // Close the modal
  };

  return (
    <View>
      <Modal
        transparent={true}
        animationType="slide"
        visible={visible}
        onRequestClose={onClose} // Close modal on Android back button
      >
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            <ImageCarHireBanner />
            <Text style={styles.title}>Confirm Hire?</Text>
            <Text style={styles.bodyText}>
              You are about to confirm your car hire.
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleSuccessfullyCarHire}>
                <Text style={styles.buttonText}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
  
      <SuccessfulHireModal
        visible={carSuccessModalVisible}
        onClose={() => setCarSuccessModalVisible(false)}
      />
    </View>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  button: {
    padding: 15,
    backgroundColor: '#28a745',
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginRight: 10, // Space between buttons
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  cancelButton: {
    padding: 15,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white', // White background for cancel button
  },
  cancelButtonText: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 16,
  },
});

export default SuccessCarHireModal;

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PaymentScreen = () => {
  const [cardType, setCardType] = useState('VISA');
  const [nameOnCard, setNameOnCard] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  const handlePay = () => {
    // Validate inputs and handle payment logic here
    console.log('Payment details:', { cardType, nameOnCard, cardNumber, expiryDate, securityCode });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Add Card</Text>
      <Picker
        selectedValue={cardType}
        style={styles.picker}
        onValueChange={(itemValue) => setCardType(itemValue)}
      >
        <Picker.Item label="VISA" value="VISA" />
        <Picker.Item label="MasterCard" value="MasterCard" />
        <Picker.Item label="MTN" value="MTN" />
        <Picker.Item label="Airtel" value="Airtel" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Name On Card"
        value={nameOnCard}
        onChangeText={setNameOnCard}
      />
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={setCardNumber}
      />
      <View style={styles.expirySecurityContainer}>
        <TextInput
          style={styles.expiryInput}
          placeholder="MM/YY"
          value={expiryDate}
          onChangeText={setExpiryDate}
        />
        <TextInput
          style={styles.securityInput}
          placeholder="CVV"
          keyboardType="numeric"
          value={securityCode}
          onChangeText={setSecurityCode}
        />
      </View>
      <Button title="Pay" onPress={handlePay} color="#007BFF" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  expirySecurityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expiryInput: {
    flex: 1,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  securityInput: {
    width: '30%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default PaymentScreen;

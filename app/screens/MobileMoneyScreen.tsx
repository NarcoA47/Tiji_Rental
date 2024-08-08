import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';

const MobilePayScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [mobileProvider, setMobileProvider] = useState('MTN');

  const handlePayment = () => {
    // Perform payment logic here
    console.log('Payment Info:', { phoneNumber, amount, mobileProvider });
    // Add your API call for payment processing here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TIJI</Text>
      <Text style={styles.subtitle}>Chituli Rd, 6039</Text>
      <Text style={styles.header}>Add Card</Text>
      <View style={styles.cardIcons}>
        <Text>VISA</Text>
        <Text>MasterCard</Text>
        <Text>Zamtel</Text>
        <Text>MTN</Text>
        <Text>Airtel</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Picker
        selectedValue={mobileProvider}
        style={styles.picker}
        onValueChange={(itemValue) => setMobileProvider(itemValue)}
      >
        <Picker.Item label="MTN" value="MTN" />
        <Picker.Item label="Zamtel" value="Zamtel" />
        <Picker.Item label="Airtel" value="Airtel" />
      </Picker>
      <Button title="Pay" onPress={handlePayment} color="#007BFF" />
      <Button title="Back" onPress={() => console.log('Back pressed')} color="#6c757d" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  cardIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  picker: {
    height: 50,
    marginBottom: 20,
  },
});

export default MobilePayScreen;

import React, { useState } from 'react';
import { Image,View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import Checkbox from 'expo-checkbox';
import {Picker} from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
// import { Input } from 'react-native-magnus';
import axios from 'axios';
import { PayButton } from '@/components/button';

export default function CardForm() {

    const [text, onChangeText] = React.useState('');
    const [isChecked, setChecked] = useState(false);

    const [cardType, setCardType] = React.useState('VISA');
    const [nameOnCard, setNameOnCard] = React.useState('');
    const [cardNumber, setCardNumber] = React.useState('');
    const [expiryDate, setExpiryDate] = React.useState('');
    const [securityCode, setSecurityCode] = React.useState('');
    const [totalPrice, setTotalPrice] = React.useState('')

    const handlePay = async () => {
        try {
            const response = await axios.post('https://tiji-dev.herokuapp.com/api/v1/payments/webhook/', {
                card_type: cardType,
                name_on_card: nameOnCard,
                card_number: cardNumber,
                expiry_date: expiryDate,
                security_code: securityCode,
                amount: totalPrice, 
            });
    
            if (response.status === 200) {
                // Handle successful payment
                console.log('Payment successful:', response.data);
            } else {
                // Handle unexpected status codes
                console.error('Unexpected status code:', response.status);
            }
        } catch (error) {
            // Handle error responses
            const err = error as any;
            if (err.response) {
                console.error('Error response:', err.response.data);
            } else if (err.request) {
                console.error('No response received:', err.request);
            } else {
                console.error('Error setting up request:', err.message);
            }
        }
    };


  return (
    <View style={styles.container}>
        <View>
            <Image style={styles.ImageController} source={require('../../../assets/images/methods/pay.png')}/>
        </View>
        
        <View style={styles.inputFormTwo}>
            <View >
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
                <TextInput
                style={styles.input}
                placeholder="MM/YY"
                value={expiryDate}
                onChangeText={setExpiryDate}
                />
                <TextInput
                style={styles.input}
                placeholder="CVV"
                keyboardType="numeric"
                value={securityCode}
                onChangeText={setSecurityCode}
                />
            </View>
            <PayButton onPress={handlePay}/>
        </View>        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center'
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 18,
    },
    inputFormOne: {
        flexDirection: 'row',
        width: 100
    },
    inputText: {
        marginLeft: 12,
        marginBottom: 4,
        padding: 4,
        borderRadius: 4,
        fontSize: 18,
    },
    inputOne: {
        borderColor: '#00000044',
        borderWidth: 1,
        marginLeft: 14,
        marginRight: 10,
        marginTop: 4,
        marginBottom: 4,
        padding: 4,
        borderRadius: 4,
        width: 180,
        
    },
    
    inputFormTwo: {

    },
    input: {
        borderWidth: 1,
        marginLeft: 14,
        marginRight: 14,
        marginTop: 4,
        marginBottom: 4,
        padding: 4,
        borderRadius: 4,
    },

    checkboxManager: {
        flexDirection: 'row',
        marginTop: 8,
    },

    checkbox: {
        marginLeft: 14,
        marginTop: 2,
        marginRight: 4,
        width: 12,
        height: 12,
        borderColor: 'black',
    },
    ImageController: {
        width: 410,
        height: 80,
        margin: 12,
        padding: 10,
        
        
    },
    picker: {
        height: 50,
        marginBottom: 20,
    },
    checkBoxText: {
        fontSize: 14,
        fontWeight: 'bold'
    },
})
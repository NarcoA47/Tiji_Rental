import React, { useState } from 'react';
import { TextInput } from 'react-native-paper'; 
import { Image,View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import {Picker} from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';

export default function MobilePayForm() {

    const [text, onChangeText] = React.useState('');
    const [isChecked, setChecked] = useState(false);

    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [amount, setAmount] = useState('');
    const [mobileProvider, setMobileProvider] = useState('MTN');

    const handlePayment = () => {
        // Perform payment logic here
        console.log('Payment Info:', { phoneNumber, amount, mobileProvider });
        // Add your API call for payment processing here
    };


  return (
    <View style={styles.container}>
        <View>
            <Image style={styles.ImageController} source={require('../../../assets/images/methods/pay.png')}/>
        </View>
        
        <View style={styles.inputFormTwo}>
        <View >
            <Text style={styles.inputText}>Phone Number</Text>
                <TextInput
                style={styles.input}
                onChangeText={setPhoneNumber}
                value={phoneNumber}
                mode="outlined"
                placeholder="e.g +260 968 "
                keyboardType="phone-pad"/>
            </View>
            <View >
            <Text style={styles.inputText}>Amount</Text>
                <TextInput
                style={styles.input}
                onChangeText={setAmount}
                value={amount}
                mode="outlined"
                placeholder=""
                keyboardType="numeric"/>
            </View>
            
        </View>
        <View>
            <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'MTN', value: 'MTN' },
                            { label: 'Zamtel', value: 'Zamtel' },
                            { label: 'Airtel', value: 'Airtel' },
                        ]}
                    />
        </View>
        {/* <Picker
        selectedValue={mobileProvider}
        style={styles.picker}
        onValueChange={(itemValue) => setMobileProvider(itemValue)}
      >
        <Picker.Item label="MTN" value="MTN" />
        <Picker.Item label="Zamtel" value="Zamtel" />
        <Picker.Item label="Airtel" value="Airtel" />
      </Picker> */}
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
        borderColor: '#00000044',
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
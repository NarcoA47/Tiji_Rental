import { PayButton } from '@/components/button';
import React, { useState, useRef } from 'react';
import { Image, View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
// import { Input, Dropdown } from 'react-native-magnus';
import axios from 'axios';

export default function MobilePayForm() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [mobileProvider, setMobileProvider] = useState('Select Mobile Money Payment');
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [paymentUrl, setPaymentUrl] = React.useState('');

    const initiatePayment = async () => {
        try {
            const response = await axios.post('https://tiji-dev.herokuapp.com/api/v1/payments/webhook/', {
                phone_number: phoneNumber,
                amount: amount,
                mobile_provider: mobileProvider,
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
            if (error.response) {
                console.error('Error response:', error.response.data);
            } else if (error.request) {
                console.error('No response received:', error.request);
            } else {
                console.error('Error setting up request:', error.message);
            }
        }
    };

    const handleDropdownSelect = (value) => {
        setMobileProvider(value);
        setDropdownVisible(false);
    };

    

    return (
        <ScrollView>

            <View style={styles.container}>
                <View>
                    <Image style={styles.ImageController} source={require('../../../assets/images/methods/pay.png')} />
                </View>
                
                <View style={styles.inputFormTwo}>
                    <View>
                        <Text style={styles.inputText}>Phone Number</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setPhoneNumber}
                            value={phoneNumber}
                            placeholder="e.g +260 968"
                            keyboardType="phone-pad"
                        />
                    </View>
                    <View>
                        <Text style={styles.inputText}>Amount</Text>
                        <TextInput
                            placeholder="11000"
                            onChangeText={setAmount}
                            style={styles.input}
                            value={amount}
                            keyboardType="numeric"
                        />
                    </View>
                </View>

                <View>
                    <Text style={styles.inputText}>Mobile Provider</Text>
                    <TextInput
                        placeholder={mobileProvider}
                        onPress={() => setDropdownVisible(!dropdownVisible)}
                        style={styles.input}
                        value={mobileProvider}
                        editable={false}
                    />
                    {/* <Dropdown
                        visible={dropdownVisible}
                        onClose={() => setDropdownVisible(false)}
                        title={
                            <Text mx="xl" color="gray500" pb="md" style={styles.inputText}>
                                Please Select your network Provider
                            </Text>
                        }
                        mt="md"
                        pb="2xl"
                        showSwipeIndicator={true}
                        roundedTop="xl"
                    >
                        <Dropdown.Option py="md" px="xl" block onPress={() => handleDropdownSelect('MTN')}>
                            MTN
                        </Dropdown.Option>
                        <Dropdown.Option py="md" px="xl" block onPress={() => handleDropdownSelect('Airtel')}>
                            Airtel
                        </Dropdown.Option>
                        <Dropdown.Option py="md" px="xl" block onPress={() => handleDropdownSelect('Zamtel')}>
                            Zamtel
                        </Dropdown.Option>
                    </Dropdown> */}
                </View>
                <PayButton onPress={initiatePayment}/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    inputText: {
        marginLeft: 12,
        marginBottom: 4,
        padding: 4,
        borderRadius: 4,
        fontSize: 18,
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
    ImageController: {
        width: 410,
        height: 80,
        margin: 12,
        padding: 10,
    },
});

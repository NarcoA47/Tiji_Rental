import React, { useState, useRef } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { Input, Dropdown } from 'react-native-magnus';

export default function MobilePayForm() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [mobileProvider, setMobileProvider] = useState('Select Mobile Money Payment');
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handlePayment = () => {
        // Perform payment logic here
        console.log('Payment Info:', { phoneNumber, amount, mobileProvider });
        // Add your API call for payment processing here
    };

    const handleDropdownSelect = (value) => {
        setMobileProvider(value);
        setDropdownVisible(false);
    };

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.ImageController} source={require('../../../assets/images/methods/pay.png')} />
            </View>
            
            <View style={styles.inputFormTwo}>
                <View>
                    <Text style={styles.inputText}>Phone Number</Text>
                    <Input
                        style={styles.input}
                        onChangeText={setPhoneNumber}
                        focusBorderColor="blue700"
                        value={phoneNumber}
                        placeholder="e.g +260 968"
                        keyboardType="phone-pad"
                    />
                </View>
                <View>
                    <Text style={styles.inputText}>Amount</Text>
                    <Input
                        placeholder="11000"
                        onChangeText={setAmount}
                        p={10}
                        focusBorderColor="blue700"
                        style={styles.input}
                        value={amount}
                        keyboardType="numeric"
                    />
                </View>
            </View>

            <View>
                <Text style={styles.inputText}>Mobile Provider</Text>
                <Input
                    placeholder={mobileProvider}
                    onPress={() => setDropdownVisible(!dropdownVisible)}
                    p={10}
                    focusBorderColor="blue700"
                    style={styles.input}
                    value={mobileProvider}
                    editable={false}
                />
                <Dropdown
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
                </Dropdown>
            </View>
        </View>
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

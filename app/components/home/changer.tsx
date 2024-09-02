import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
// import { Input, Dropdown } from 'react-native-magnus';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons'; // Importing the icon library

const Changer = () => {
    const [currentLocation, setCurrentLocation] = useState('');
    const [busesData, setBusesData] = useState([]);
    const [searchParams, setSearchParams] = useState({ from: '', to: '' });
    const [selectedLocation, setSelectedLocation] = useState('Where are you going?');
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [loading, setLoading] = useState(false);  
    const fetchBusData = async () => {
        setLoading(true); // Start loading
        try {
          const accessToken = await AsyncStorage.getItem('access_token');
          if (accessToken) {
            const response = await axios.get('https://tiji-dev.herokuapp.com/api/v1/buses/', {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
              },
              params: {
                from: searchParams.from,
                to: searchParams.to,
              },
            });
    
            console.log('API Response:', response.data.results);
            setBusesData(response.data.results);
          } else {
            console.error('Access token not found');
          }
        } catch (error) {
          console.error('Error fetching bus data:', error);
        } finally {
          setLoading(false); // Stop loading
        }
      };
    const [locations, setLocations] = useState([
        { label: 'Lusaka', value: 'Lusaka' },
        { label: 'London', value: 'London' },
        { label: 'New York', value: 'New York' },
        { label: 'Tokyo', value: 'Tokyo' },
        { label: 'Sydney', value: 'Sydney' }
    ]);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
            setCurrentLocation('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            const { coords } = location;
            const reverseGeocode = await Location.reverseGeocodeAsync({
                latitude: coords.latitude,
                longitude: coords.longitude
            });

            if (reverseGeocode.length > 0) {
                const { city, country } = reverseGeocode[0];
                setCurrentLocation(`${city}, ${country}`);
            } else {
                setCurrentLocation(`Latitude: ${coords.latitude}, Longitude: ${coords.longitude}`);
            }
        })();
    }, []);

    const handleDropdownSelect = (value) => {
        setSelectedLocation(value);
        setDropdownVisible(false);
    };

    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    placeholder={currentLocation}
                    p={10}
                    onPress={() => setDropdownVisible(!dropdownVisible)} 
                    onChangeText={(text) => setSearchParams({ ...searchParams, from: text })}
                    focusBorderColor="blue700"
                    style={styles.input}
                    value={currentLocation}
                    editable={false}
                />
            </View>
            <View>
                <TextInput
                    placeholder={selectedLocation}
                    onPress={() => setDropdownVisible(!dropdownVisible)}
                    onChangeText={(text) => setSearchParams({ ...searchParams, to: text })}
                    p={10}
                    focusBorderColor="blue700"
                    style={styles.input}
                    value={selectedLocation}
                    editable={false}// Set text color to white
                    // rightElement={() => <Ionicons name="help-circle-outline" size={24} color={MD3Colors.primary40} />}
                />
                {/* <Dropdown
                    isVisible={dropdownVisible}
                    onClose={() => setDropdownVisible(false)}
                    title={<Text mx="xl" color="gray500" pb="md" style={styles.inputText}>Select a location</Text>}
                    mt="md"
                    pb="2xl"
                    showSwipeIndicator
                    roundedTop="xl"
                >
                    {locations.map((location) => (
                        <Dropdown.Option
                            key={location.value}
                            py="md"
                            px="xl"
                            onPress={() => handleDropdownSelect(location.value)}
                        >
                            {location.label}
                        </Dropdown.Option>
                    ))}
                </Dropdown> */}
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 500,
        top: 25
    },
    input: {
        borderWidth: 1,
        marginLeft: 14,
        marginRight: 14,
        marginTop: 4,
        marginBottom: 4,
        width: 360,
        height: 60,
        backgroundColor: '#2857D3',
        padding: 4,
        borderRadius: 4,
        borderBlockEndColor: '#2857D3',
        borderBlockColor: '#2857D3',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputText: {
        marginLeft: 12,
        marginBottom: 4,
        padding: 4,
        borderRadius: 4,
        fontSize: 24,
        textAlign: 'center'
    },
    dropdown: {
        width: 360,
        backgroundColor: '#2857D3',
        borderRadius: 4,
        borderColor: '#2857D3',
        borderWidth: 1
    },
});

export default Changer;

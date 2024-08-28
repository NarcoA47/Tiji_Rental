import React, { useState } from 'react';
import { View, Text, FlatList, Button, TextInput, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BusListContainer = () => {
  const navigation = useNavigation();
  const [busesData, setBusesData] = useState([]);
  const [ticketCount, setTicketCount] = useState({});
  const [searchParams, setSearchParams] = useState({ from: '', to: '' });
  const [loading, setLoading] = useState(false);  // Loading state

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

  const handleSearch = () => {
    fetchBusData();
  };

  const renderBusItem = ({ item }) => {
    const count = ticketCount[item.id] || 0;
    return (
      <View style={styles.busManager}>
        <View style={styles.busItem}>
          <View style={styles.busItemHeader}>
            <Text style={styles.busName}>{item.company}</Text>
            <Text style={styles.busPriceHeader}>K{item.ticket_price}.00</Text>
          </View>
          <Text style={styles.busDetails}>{item.seats} of {item.total_seats} Seats Available</Text>
          <View style={styles.route}>
            <View style={styles.routeInfo}>
              <Text style={styles.location}>{item.current_location}</Text>
            </View>
            <View style={styles.routeIcon}>
              <View style={styles.routeUse}>
                <View style={styles.dots} />
                <View style={styles.dots} />
                <View style={styles.dots} />
                <View style={styles.dots} />
                <FontAwesome6 name="train" size={24} color="#800080" />
                <View style={styles.dots} />
                <View style={styles.dots} />
                <View style={styles.dots} />
                <View style={styles.dots} />
              </View>
              <Text style={styles.duration}>{item.departure_time}</Text>
            </View>
            <View style={styles.routeInfo}>
              <Text style={styles.location}>{item.where_to}</Text>
            </View>
          </View>
        </View>

        <View style={styles.ticketManager}>
          <TouchableOpacity style={styles.buyButton} onPress={() => navigation.navigate('PassengerDetails')}>
            <Text style={styles.buyButtonText}>BUY</Text>
          </TouchableOpacity>
          <Text style={styles.numberText}>Number Of Tickets</Text>
          <View style={styles.ticketCounter}>
            <TouchableOpacity onPress={() => handleDecrease(item.id)} style={styles.counterButtonLeft}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text>{count}</Text>
            <TouchableOpacity onPress={() => handleIncrease(item.id)} style={styles.counterButtonRight}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Bus Ticket</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="From"
            value={searchParams.from}
            onChangeText={(text) => setSearchParams({ ...searchParams, from: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="To"
            value={searchParams.to}
            onChangeText={(text) => setSearchParams({ ...searchParams, to: text })}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#0056b3" />
        ) : (!searchParams.from && !searchParams.to) ? (
          <Text style={styles.placeholderText}>Please enter 'From' and 'To' locations to search for buses.</Text>
        ) : (busesData.length === 0) ? (
          <Text style={styles.placeholderText}>No buses found for the specified route.</Text>
        ) : (
          <FlatList
            data={busesData}
            renderItem={renderBusItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.flatListContent}
            style={styles.flatList}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default BusListContainer;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#ffffff',
      },

      header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0056b3',
        textAlign: 'center',
      },
      subHeader: {
        fontSize: 20,
        marginVertical: 10,
        textAlign: 'center',
      },

      busManager: {
        flexDirection: 'row'
      },

      busItem: {
        margin: 5,
        width: 220,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 16,
        backgroundColor: '#f9f9f9',
      },

      // busItemHeader: {
      //   flexDirection: 'row',
      //   justifyContent: 'space-between'
      // },

      busPriceHeader: {
        fontSize: 12,
        fontWeight: 'bold',
      },

      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },

      searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
      },

      searchButton: {
        backgroundColor: '#0056b3',
        padding: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
      },

      searchButtonText: {
        color: '#fff',
        fontWeight: 'bold',
      },

      placeholderText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#888',
        marginTop: 20,
      },

      input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 10,
        width: '40%',
      },

      busName: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      busDetails: {
        marginVertical: 4,
        fontWeight: 'bold',
      },
      busTime: {
        marginBottom: 8,
        fontStyle: 'italic',
      },

      ticketManager:{
        margin: 5,
        width: 140,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 8,
        backgroundColor: '#f9f9f9',
        alignItems: 'center'
      },

      ticketCounter: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:5,
        marginTop: 10,
      },
      counterButtonLeft: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginHorizontal: 4,
        borderRadius: 4,
        marginRight: 15,
      },
      counterButtonRight: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginHorizontal: 4,
        borderRadius: 4,
        marginLeft: 15,
      },
      buyButton: {
        backgroundColor: '#28a745',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
        width: 100,
      },
      buyButtonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
      routeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f0f0f0',
        padding: 15,
        borderRadius: 5,
        marginBottom: 20,
      },
      subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      numberText: {
        fontSize: 12,
        fontWeight: 'bold',
      },
      route: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      routeInfo: {
        
        alignItems: 'center',
      },
      location: {
        fontSize: 12,
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 10,
      },
      time: {
        fontSize: 16,
        color: '#800080', // Purple color for the time
        fontWeight: 'bold',
      },
      routeIcon: {
        
        alignItems: 'center',
      },
      routeUse: {
        flexDirection: 'row',
      },
      duration: {
        fontSize: 12,
        color: '#999',
        marginTop: 5,
      },
    
      dots: {
        position: 'relative',
        top: 14,
        width:3,
        height: 1,
        backgroundColor: '#800080',
        borderRadius: 10,
        margin: 2.5,
      },

      routeChangeBtn: {
        backgroundColor: 'White',
        padding: 10,
        borderRadius: 27,
        borderWidth:2,
        borderColor: '#0056b3',
        alignItems: 'center',
        marginBottom: 10,
        width: 100,
        color: '#ffffff'
      },

      routeChangetxt: {
        color: '#0056b3'
      },
      routingText: {
        fontSize: 20,
        fontWeight: 'bold'
      },
      filterInput: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        padding: 8,
        marginBottom: 10,
      },

      flatListContent: {
        paddingBottom: 20,
      },
      flatList: {
        backgroundColor: '#f5f5f5',
      },
});


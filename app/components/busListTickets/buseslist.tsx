import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from 'expo-router';

export default function BusListContainer() {
    const dropdownRef = React.createRef();
    const navigation = useNavigation()

    const busesData = [
        { id: '1', name: 'Euro Bus Services', price: 250, seatsAvailable: 3, time: '08:45 AM' },
        { id: '2', name: 'Power Tools Bus Services', price: 250, seatsAvailable: 3, time: '08:45 AM' },
        { id: '3', name: 'Shalom Bus Services', price: 250, seatsAvailable: 3, time: '08:45 AM' },
        { id: '4', name: 'Euro Bus Services', price: 250, seatsAvailable: 3, time: '08:45 AM' },
        { id: '5', name: 'Euro Bus Services', price: 250, seatsAvailable: 3, time: '08:45 AM' },
    ];
    const [ticketCount, setTicketCount] = React.useState({});
  
    const handleIncrease = (id) => {
      // setTicketCount((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    };
  
    const handleDecrease = (id) => {
      setTicketCount((prev) => {
        if (prev[id] > 0) {
          return { ...prev, [id]: prev[id] - 1 };
        }
        return prev;
      });
    };
  
    const handleBuy = (name, count) => {
      if (count > 0) {
        alert(`Purchased ${count} tickets for ${name}`);
      } else {
        alert('Please select at least one ticket.');
      }
    };
  
    const [route, setRoute] = React.useState({ from: 'Lusaka', to: 'Kabwe', date: '8th July 2024' });
    // const buses = [
    //   { id: '1', name: 'Bus A', time: '08:00 AM', price: 'ZMW 100' },
    //   { id: '2', name: 'Bus B', time: '10:00 AM', price: 'ZMW 120' },
    //   { id: '3', name: 'Bus C', time: '01:00 PM', price: 'ZMW 110' },
    // ];
  
    const changeRoute = () => {
      // Logic to change route (mocked for example)
      setRoute({ from: 'Lusaka', to: 'Kabwe', date: '10th July 2024' });
    };
  
    const renderBusItem = ({ item }) => {
      const count = ticketCount[item.id] || 0;
      return (
        <View style={styles.busItem}>
          <Text style={styles.busName}>{item.name}</Text>
          <Text style={styles.busDetails}>K{item.price}.00 - {item.seatsAvailable} Seats Available</Text>
          <Text style={styles.busTime}>{item.time}</Text>
          <View style={styles.ticketCounter}>
            <TouchableOpacity onPress={() => handleDecrease(item.id)} style={styles.counterButton}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text>{count}</Text>
            <TouchableOpacity onPress={() => handleIncrease(item.id)} style={styles.counterButton}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.buyButton}
          >
            <Text style={styles.buyButtonText} onPress={() => navigation.navigate('TicketDetails')} >BUY</Text>
          </TouchableOpacity>
        </View>
      );
    };
  
  return (
    <ScrollView>
        {/* <View style={styles.subheaderContainer}>
            <View style={styles.grayLine} />
        </View> */}
        <View style={styles.container}>
        <Text style={styles.title}>Bus Ticket</Text>
        <View style={styles.routeContainer}>
          <Text>{`${route.from} → ${route.to}`}</Text>
          <Text>{route.date}</Text>
          <Button title="Change" onPress={changeRoute} />
        </View>
        <Text style={styles.subtitle}>Available Buses</Text>
          <FlatList
            data={busesData}
            renderItem={renderBusItem}
            keyExtractor={(item) => item.id}
          />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
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
      busItem: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#f9f9f9',
      },
      busName: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      busDetails: {
        marginVertical: 4,
      },
      busTime: {
        marginBottom: 8,
        fontStyle: 'italic',
      },
      ticketCounter: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
      },
      counterButton: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginHorizontal: 4,
        borderRadius: 4,
      },
      buyButton: {
        backgroundColor: '#28a745',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
      },
      buyButtonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      routeContainer: {
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
    
});


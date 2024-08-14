import { MainPayNavigation } from '@/components/navigation/topNavigation';
import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, ScrollView } from 'react-native';

const busData = [
  { id: '1', name: 'Euro Bus Services', price: 250, seatsAvailable: 3, time: '08:45 AM' },
  { id: '2', name: 'Power Tools Bus Services', price: 250, seatsAvailable: 3, time: '08:45 AM' },
  { id: '3', name: 'Shalom Bus Services', price: 250, seatsAvailable: 3, time: '08:45 AM' },
  { id: '4', name: 'Euro Bus Services', price: 250, seatsAvailable: 3, time: '08:45 AM' },
  { id: '5', name: 'Euro Bus Services', price: 250, seatsAvailable: 3, time: '08:45 AM' },
];

const ViewBusScreen = () => {
  const [ticketCounts, setTicketCounts] = useState({});

  const handleIncrement = (id) => {
    setTicketCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleDecrement = (id) => {
    setTicketCounts((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 0),
    }));
  };

  const handleBuy = (id) => {
    const count = ticketCounts[id] || 0;
    if (count > 0) {
      alert(`You have purchased ${count} tickets for ${busData.find(bus => bus.id === id).name}.`);
    } else {
      alert('Please select at least one ticket.');
    }
  };

  const renderBusItem = ({ item }) => (
    <View style={styles.busContainer}>
      <Text style={styles.busName}>{item.name}</Text>
      <Text>Price: K{item.price}.00</Text>
      <Text>{item.seatsAvailable} of 38 Seats Available</Text>
      <Text>{item.time}</Text>
      <View style={styles.ticketCounter}>
        <Button title="-" onPress={() => handleDecrement(item.id)} />
        <Text>{ticketCounts[item.id] || 0}</Text>
        <Button title="+" onPress={() => handleIncrement(item.id)} />
      </View>
      <Button title="BUY" onPress={() => handleBuy(item.id)} color="green" />
    </View>
  );

  return (
    <ScrollView>

      <View>
        <MainPayNavigation/>
      </View>
      <View style={styles.container}>
        
        <View style={styles.container}>

          <FlatList
            data={busData}
            renderItem={renderBusItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  subHeader: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  busContainer: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
  },
  busName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ticketCounter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});

export default ViewBusScreen;

import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function BusListContainer() {
    const dropdownRef = React.createRef();
    const navigation = useNavigation()

    const busesData = [
        { id: '1', name: 'Euro Bus Services', price: 250, seatsAvailable: 3, totalNumberofSeats: 10, time: '08:45 AM', from: 'Lusaka', to: 'Kabwe' },
        { id: '2', name: 'Power Tools Bus Services', price: 250, seatsAvailable: 3, totalNumberofSeats: 13, time: '08:45 AM', from: 'Mazabuka', to: 'Lusaka' },
        { id: '3', name: 'Shalom Bus Services', price: 250, seatsAvailable: 3, totalNumberofSeats: 15, time: '08:45 AM', from: 'Ndola', to: 'Kitwe' },
        { id: '4', name: 'Euro Bus Services', price: 250, seatsAvailable: 3, totalNumberofSeats: 20, time: '08:45 AM', from: 'Monze', to: 'Choma' },
        { id: '5', name: 'Euro Bus Services', price: 250, seatsAvailable: 3, totalNumberofSeats: 25, time: '08:45 AM', from: 'Mongu', to: 'Impika' },
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
        <View style={styles.busManager}>
          <View style={styles.busItem}>
            <View style={styles.busItemHeader}>
              <Text style={styles.busName}>{item.name}</Text>
              <Text style={styles.busPriceHeader}>K{item.price}.00</Text>
            </View>
            <Text style={styles.busDetails}>{item.seatsAvailable} of {item.totalNumberofSeats} Seats Available</Text>
            <View>
          <View style={styles.route}>
            <View style={styles.routeInfo}>
            <Text style={styles.location}>{item.from}</Text>
              {/* <Text style={styles.time}>3:00 PM</Text> */}
            </View>
            <View style={styles.routeIcon}>
              <View style={styles.routeUse}>
              <View style={styles.dots}/>
              <View style={styles.dots}/>
              <View style={styles.dots}/>
              <View style={styles.dots}/>
              <FontAwesome6 name="train" size={24} color="#800080" />
              <View style={styles.dots}/>
              <View style={styles.dots}/>
              <View style={styles.dots}/>
              <View style={styles.dots}/>
              </View>
              <Text style={styles.duration}>{item.time}</Text>
            </View>
            <View style={styles.routeInfo}>
              <Text style={styles.location}>{item.to}</Text>
              {/* <Text style={styles.time}>12:00 AM</Text> */}
            </View>
            </View>

            </View>
          </View>

          <View style={styles.ticketManager}>
          <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText} onPress={() => navigation.navigate('TicketDetails')} >BUY</Text>
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
    <ScrollView>
        {/* <View style={styles.subheaderContainer}>
            <View style={styles.grayLine} />
        </View> */}
        <View style={styles.container}>
        <Text style={styles.title}>Bus Ticket</Text>
        <View style={styles.routeContainer}>
          <View>
            <Text style={styles.routingText}>{`${route.from} → ${route.to}`}</Text>
            <Text>{route.date}</Text>
          </View>
          <TouchableOpacity style={styles.routeChangeBtn} onPress={changeRoute}>
            <Text style={styles.routeChangetxt}>Change Route</Text>
          </TouchableOpacity>
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
        fontSize: 18,
        fontWeight: 'bold',
      },

      busName: {
        fontSize: 18,
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
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
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
        fontSize: 16,
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
        backgroundColor: '#0056b3',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
        width: 100,
        color: '#ffffff'
      },

      routeChangetxt: {
        color: '#ffffff'
      },
      routingText: {
        fontSize: 20,
        fontWeight: 'bold'
      },
});


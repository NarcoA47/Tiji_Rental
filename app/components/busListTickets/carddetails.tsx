import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Barcode from '@kichiyaki/react-native-barcode-generator';
import { MD3Colors } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

interface CardDetailsContainerProps {
  busDetails: {
    current_location: string;
    where_to: string;
    departure_time: string;
    company: string;
    ticket_price: number;
  };
  ticketCount: number;
  passengerDetails: {
    firstName: string;
    lastName: string;
    phone: string;
    departureTime: string;
    tickets: number;
    from: string;
    to: string;
  };
  onClose: () => void;
}

const CardDetailsContainer: React.FC<CardDetailsContainerProps> = ({ busDetails, ticketCount, passengerDetails, onClose }) => {
  const [barcodeValue, setBarcodeValue] = useState('');

  useEffect(() => {
    generateRandomBarcode();
  }, []);

  const generateRandomBarcode = () => {
    const randomBarcode = Math.random().toString(36).substring(2, 15);
    setBarcodeValue(randomBarcode);
  };

  const totalAmount = busDetails.ticket_price * ticketCount;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ticket Details</Text>
      <View style={styles.journeyDetails}>
        <View style={styles.journeyItem}>
          <Text style={styles.journeyLabel}>From</Text>
          <Text style={styles.route}>{busDetails.current_location}</Text>
          <Text style={styles.journeySubValue}>InterCity</Text>
        </View>
        <View style={styles.dots} />
        <View style={styles.dots} />
        <View style={styles.dots} />
        <View style={styles.journeyItem}>
          <Text style={styles.departureTime}>{busDetails.departure_time}</Text>
          <Ionicons name="bus-outline" size={24} color="#000" />
          <Text style={styles.journeyValue}>{busDetails.company}</Text>
        </View>
        <View style={styles.dots} />
        <View style={styles.dots} />
        <View style={styles.dots} />
        <Ionicons name="chevron-forward-outline" style={styles.icon} size={24} color="#000" />
        <View style={styles.journeyItem}>
          <Text style={styles.journeyLabel}>To:</Text>
          <Text style={styles.route}>{busDetails.where_to}</Text>
          <Text style={styles.journeySubValue}>Euro</Text>
        </View>
      </View>

      <View style={styles.passengerInfo}>
        <View style={styles.columnContainer}>
          <View style={styles.row}>
            <Text style={styles.label}>Passenger:</Text>
            <Text style={styles.label}>Seats:</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.value}>{passengerDetails.firstName} {passengerDetails.lastName}</Text>
            <Text style={styles.value}>{ticketCount}</Text>
          </View>
        </View>
        <View style={styles.columnContainer}>
          <View style={styles.row}>
            <Text style={styles.label}>Phone Number:</Text>
            <Text style={styles.label}>Arrival Station:</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.value}>{passengerDetails.phone}</Text>
            <Text style={styles.value}>Euro Bus Station</Text>
          </View>
        </View>
        <View style={styles.columnContainer}>
          <View style={styles.row}>
            <Text style={styles.label}>Total Amount:</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.value}>K{totalAmount}.00</Text>
          </View>
        </View>
      </View>

      <View style={styles.barcodeContainer}>
        <Barcode
          format="CODE128B"
          value={barcodeValue}
          text={barcodeValue}
          style={styles.barcode}
          maxWidth={Dimensions.get('window').width / 2}
        />
        <TouchableOpacity style={styles.downloadButton} onPress={generateRandomBarcode}>
          <Ionicons name="download-outline" size={39} color={MD3Colors.primary20} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CardDetailsContainer;

const styles = StyleSheet.create({
  journeyDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 200,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 40,
  },
  journeyItem: {
    alignItems: 'center',
    padding: 13,
  },
  journeyLabel: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  journeyValue: {
    fontWeight: 'bold',
    marginBottom: 2,
    fontSize: 20,
    color: '#007BFF',
  },
  journeySubValue: {
    fontSize: 12,
    color: '#777',
  },
  columnContainer: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  icon: {
    top: 4,
  },
  dots: {
    position: 'relative',
    top: 4,
    width: 3,
    height: 3,
    backgroundColor: '#000',
    borderRadius: 10,
    margin: 2.5,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  ticketInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  route: {
    fontSize: 18,
    fontWeight: '600',
  },
  departureTime: {
    fontSize: 16,
    color: '#888',
  },
  passengerInfo: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
  },
  barcodeContainer: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    bottom: 14,
    marginBottom: 20,
  },
  barcode: {
    width: 200,
    height: 80,
    top: 20,
  },
  downloadButton: {
    backgroundColor: '#F4F4F4',
    padding: 15,
    borderRadius: 35,
    alignItems: 'center',
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: '#FF5722',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
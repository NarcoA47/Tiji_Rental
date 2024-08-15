import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity, ScrollView, ViewComponent } from 'react-native';
import Barcode from '@kichiyaki/react-native-barcode-generator';
import { MD3Colors } from 'react-native-paper';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; //

export default function CardDetailsContainer() {
    const ticketInfo = {
        from: "Lusaka",
        to: "Kitwe",
        departureTime: "08h00m",
        busCompany: "Euro Bus",
        passengerName: "Tiza Mpata",
        seats: "Any",
        phoneNumber: "+260 961780810",
        qrCode: "QR CODE",
        arrivalStation: "Euro Bus Station",
    };

  
  return (
    <ScrollView contentContainerStyle={styles.container}>
        {/* <View style={styles.subheaderContainer}>
            <View style={styles.grayLine} />
        </View> */}
      <Text style={styles.title}>Ticket Details</Text>
      <View style={styles.journeyDetails}>
        <View style={styles.journeyItem}>
          <Text style={styles.journeyLabel}>From</Text>
          <Text style={styles.route}>{ `${ticketInfo.from}` }</Text>
          <Text style={styles.journeySubValue}>InterCity</Text>
        </View>
        <View style={styles.journeyItem}>
          <Text style={styles.departureTime}>{ticketInfo.departureTime}</Text>
          <Ionicons name="bus-outline" size={24} color="#000" />
          <Text style={styles.journeyValue}>{ticketInfo.busCompany}</Text>
        </View>
        <View style={styles.journeyItem}>
          <Text style={styles.journeyLabel}>To:</Text>
          <Text style={styles.route}>{`${ticketInfo.to}`}</Text>
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
            <Text style={styles.value}>{ticketInfo.passengerName}</Text>
            <Text style={styles.value}>{ticketInfo.seats}</Text>
          </View>
        </View>
        <View style={styles.columnContainer}>
          <View style={styles.row}>
            
          <Text style={styles.label}>Phone Number:</Text>
          <Text style={styles.label}>Arrival Station:</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.value}>{ticketInfo.phoneNumber}</Text>
            <Text style={styles.value}>{ticketInfo.arrivalStation}</Text>
          </View>
        </View>
        {/* <Text style={styles.label}>QR Code:</Text>
        <Text style={styles.value}>{ticketInfo.qrCode}</Text> */}
      </View>

      <View style={styles.barcodeContainer}>
          <Barcode
            format="CODE128B"
            value="0000002021954Q"
            text="0000002021954Q"
            style={styles.barcode}
            // style={{ marginBottom: 40 }}
            maxWidth={Dimensions.get('window').width / 2}
          />
        <Image 
          // source={require('./path/to/barcode.png')} // Replace with actual barcode image
          style={styles.barcode}
        />
        <TouchableOpacity style={styles.downloadButton}>
          <Ionicons name="download-outline" size={39} color={MD3Colors.primary20} />
        </TouchableOpacity>
      </View>


      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.buttonText}>Back To Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

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
        flexDirection: 'column', // Align items vertically
      },
      row: {
        flexDirection: 'row', // Align items horizontally
        justifyContent: 'space-between', // Space between label and value
        marginBottom: 10, // Space between rows
      },
      label: {
        fontWeight: 'bold',
        fontSize: 16,
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
      busCompany: {
        fontSize: 20,
        color: '#007BFF',
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
      backButton: {
        backgroundColor: '#FF5722',
        padding: 15,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
      },
      buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
      },
    
});


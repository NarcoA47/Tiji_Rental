// import React from 'react';
// import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
// import QRCode from 'react-native-qrcode-svg';
// import { Share } from 'react-native';

// const ShowTicketScreen = () => {
//   const ticketInfo = {
//     from: 'Lusaka InterCity',
//     to: 'Kitwe Euro',
//     departureTime: '08h00m',
//     passengerName: 'Tiza Mpata',
//     phoneNumber: '+260 961780810',
//     arrivalStation: 'Euro Bus Station',
//   };

//   const handleDownload = () => {
//     // Logic to download the ticket as an image or PDF
//     console.log('Download ticket functionality to be implemented');
//   };

//   const handleShare = () => {
//     Share.share({
//       message: `Ticket Details:\nFrom: ${ticketInfo.from}\nTo: ${ticketInfo.to}\nPassenger: ${ticketInfo.passengerName}\nPhone: ${ticketInfo.phoneNumber}`,
//     });
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Ticket Details</Text>
//       <View style={styles.detailsContainer}>
//         <Text style={styles.routeText}>
//           {ticketInfo.departureTime} {'\n'}
//           From {ticketInfo.from} {'\n'}
//           To {ticketInfo.to}
//         </Text>
//         <Text style={styles.busCompany}>Euro Bus</Text>
//       </View>

//       <View style={styles.infoContainer}>
//         <Text style={styles.infoLabel}>Passenger:</Text>
//         <Text style={styles.infoText}>{ticketInfo.passengerName}</Text>

//         <Text style={styles.infoLabel}>Seats:</Text>
//         <Text style={styles.infoText}>Any</Text>

//         <Text style={styles.infoLabel}>Phone Number:</Text>
//         <Text style={styles.infoText}>{ticketInfo.phoneNumber}</Text>

//         <Text style={styles.infoLabel}>Arrival Station:</Text>
//         <Text style={styles.infoText}>{ticketInfo.arrivalStation}</Text>
//       </View>

//       <View style={styles.qrContainer}>
//         <QRCode value={ticketInfo.phoneNumber} size={100} />
//         <Text style={styles.qrLabel}>QR CODE</Text>
//       </View>

//       <View style={styles.barcodeContainer}>
//         <Text style={styles.barcode}>| | | | | | | | | | | | | | | |</Text>
//       </View>

//       <Button title="Download" onPress={handleDownload} color="#007BFF" />
//       <Button title="Share Ticket" onPress={handleShare} color="#007BFF" />

//       <Button title="Back To Home" onPress={() => console.log('Navigate to Home')} color="#007BFF" />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: '#F5F5F5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   detailsContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   routeText: {
//     fontSize: 18,
//     textAlign: 'center',
//   },
//   busCompany: {
//     fontSize: 20,
//     color: '#007BFF',
//     marginTop: 10,
//   },
//   infoContainer: {
//     marginBottom: 20,
//   },
//   infoLabel: {
//     fontWeight: 'bold',
//   },
//   infoText: {
//     marginBottom: 10,
//   },
//   qrContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   qrLabel: {
//     marginTop: 5,
//   },
//   barcodeContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   barcode: {
//     fontSize: 18,
//   },
// });

// export default ShowTicketScreen;

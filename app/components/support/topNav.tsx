import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Image } from 'react-native-magnus';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; //// Use the icon component from react-native-magnus
import { useNavigation } from '@react-navigation/native';

export default function SupportTopBar() {
    const navigation = useNavigation()
    return (
      // Create a function the give async back function based on the screen presented
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <View style={styles.conatiner}>
          <View style={styles.row}>
            <Ionicons style={styles.icon} name="chevron-back-circle" size={50} color="#FFFFFF" />
            <Text style={styles.title}>ABOUT US</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
}

export function SupportTopBarNavigation() {
    return (
      <View style={styles.SettingConatiner}>
        
        <SupportTopBar/>
        <View style={styles.adjucentContainer}>
        </View>
      </View>
    )
  }

const styles = StyleSheet.create({
    parentContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',  // Align children to the right
        alignItems: 'center',  
        margin: 12,      // Align children vertically centered
      },
      
      conatiner:{
        flexDirection: 'row',
        justifyContent: 'space-between',  
        alignItems: 'center',
        margin: 12,
      },
      Closeconatiner:{
        flexDirection: 'row',
        justifyContent: 'flex-end',  
        alignItems: 'center',
      },
      icon: {
        marginTop: 12,
        paddingTop: 50,
      },
      closeicon: {
        
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 18,
        top: 56, 
        textAlign: 'center',
        paddingLeft: 75,
        color: 'white'
      },
      mainContainer: { 
        // marginTop: 40,
        paddingBottom: 10,
        paddingTop: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#0034BF',
        height: 380,
      },
      payContainer: { 
        marginTop: 40,
        // top: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#0034BF',
        height: 160,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        top: 35,
      },
      BusContainer: { 
        marginTop: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#0034BF',
        height: 417,
      },
    
      adjucentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',  
        margin: 9,
      },
    
      text: {
        fontSize: 24,
        color: '#ffffff',
        fontWeight: 'bold',
        margin: 10,
      },
    
      subText: {
        color: '#ffffff',
        fontWeight: 'bold',
        marginLeft: 6,
      },
    
      productConatiner: {
        marginTop: 20,
        paddingBottom: 110,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#0034BF',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
        height: 488,
      },
      profileConatiner: {
        paddingBottom: 110,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#0034BF',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
        height: 488,
      },
      SettingConatiner: {
        paddingBottom: 90,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#0034BF',
        height: 240,
      },
});

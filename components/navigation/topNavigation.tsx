import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Slider from '@/app/components/home/slider';
import Container from '@/app/components/productview/container';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Changer from '@/app/components/home/changer';
import { Search } from '../button';
import DatePicker from '@/app/components/home/datepicker';
import { useNavigation } from 'expo-router';


export default function Naviagtion() {
  return (
    // Create a function the give async back function based on the screen presented
    <TouchableOpacity>
      <View style={styles.conatiner}>
          <Ionicons style={styles.icon} name="chevron-back-circle" size={50} color="#0034BF" />
      </View>
    </TouchableOpacity>
  )
}

export function Close({onClose}){
  return(
    <TouchableOpacity  onPress={onClose}>
      <View style={styles.Closeconatiner}>
          <Ionicons style={styles.closeicon} name="close" size={40} color="#0034BF" />
      </View>
    </TouchableOpacity>
  )
}

export function PayNaviagtion() {
  return (
    // Create a function the give async back function based on the screen presented
    <TouchableOpacity>
      
      <View style={styles.parentContainer}>
          <Ionicons style={styles.icon} name="chevron-back-circle" size={50} color="#0034BF" />
      </View>
    </TouchableOpacity>
  )
}

export function MainNavigation() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.adjucentContainer}>
        <View>
          <Text style={styles.text}>TIJI</Text>
          <Text style={styles.subText}>Chintu RD, 6039</Text>
        </View>
        <View>
        <EvilIcons name="user" size={40} color="white" />
        <Text style={styles.subText}>Login</Text>
        </View>
      </View>
      <Slider/>
    </View>
  )
}

export function MainBusHomeNavigation() {
  return (
    <View style={styles.BusContainer}>
      <View style={styles.adjucentContainer}>
        <View>
          <Text style={styles.text}>TIJI</Text>
          <Text style={styles.subText}>Chintu RD, 6039</Text>
        </View>
        <View>
        <EvilIcons name="user" size={40} color="white" />
        <Text style={styles.subText}>Login</Text>
        </View>
      </View>
      <Changer/>
      <DatePicker/>
      <Search/>
    </View>
  )
}
export function MainPayNavigation() {
  return (
    <View style={styles.payContainer}>
      <View style={styles.adjucentContainer}>
        <View>
          <Text style={styles.text}>TIJI</Text>
          <Text style={styles.subText}>Chintu RD, 6039</Text>
        </View>
        <View>
        <EvilIcons name="user" size={40} color="white" />
        <Text style={styles.subText}>Login</Text>
        </View>
      </View>
    </View>
  )
}


export function HeaderMainNavigation() {
  return (
    <View style={styles.productConatiner}>
      <View style={styles.adjucentContainer}>
        <View>
          <Text style={styles.text}>TIJI</Text>
          <Text style={styles.subText}>Chintu RD, 6039</Text>
        </View>
        <View>
        <EvilIcons name="user" size={40} color="white" />
        <Text style={styles.subText}>Login</Text>
        </View>
      </View>
      <Container/>
    </View>
  )
}

export function ReturnNavigation() {

  const navigation = useNavigation()

  return (
    // Create a function the give async back function based on the screen presented
    <TouchableOpacity onPress={() => navigation.navigate('ProductView')}>
      <View style={styles.conatiner}>
          <Ionicons style={styles.icon} name="chevron-back-circle" size={50} color="#0034BF" />
      </View>
    </TouchableOpacity>
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

  mainContainer: { 
    marginTop: 40,
    // paddingTop: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#0034BF',
    height: 380,
  },
  payContainer: { 
    marginTop: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#0034BF',
    height: 160,
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

})

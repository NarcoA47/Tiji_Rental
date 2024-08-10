import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Slider from '@/app/components/home/slider';


export default function Naviagtion() {
  return (
    <View style={styles.conatiner}>
        <Ionicons style={styles.icon} name="chevron-back-circle" size={50} color="#0034BF" />
    </View>
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


export function ProductCardNavigation() {
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
  </View>
}

const styles = StyleSheet.create({
  conatiner:{
    flexDirection: 'row',
    justifyContent: 'space-between',  
    alignItems: 'center',
    margin: 12,
  },
  icon: {
    marginTop: 12,
    paddingTop: 50,
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
    marginTop: 40,
    // paddingTop: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#0034BF',
    height: 380,
  },

})

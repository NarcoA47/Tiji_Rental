import { Tabs } from 'expo-router';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/BusHomeScreen';
import ProductScreen from '../screens/productScreen';
import BusTicketApp from '../screens/ViewBusScreen';
import LoginScreen from '../screens/loginScreen';
import SignupScreen from '../screens/signupScreen';

const Stack = createNativeStackNavigator();

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    // <Stack.Navigator
    //   screenOptions={{
    //     // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    //     headerShown: false,
    //   }}>
    //     <Stack.Screen
    //     name="home"
    //     options={{
    //       title: 'Home',
         
    //     }}
    //     component={LoginScreen}
    //   />

    //   <Stack.Screen
    //     name="index"
    //     options={{
    //       title: 'Home',
          
    //     }}
    //     component={HomeScreen}
    //   />
    //   {/* <Tabs.Screen
    //     name="explore"
    //     options={{
    //       title: 'Explore',
    //       tabBarIcon: ({ color, focused }) => (
    //         <FontAwesome5 name="home" size={24} color="black" />
    //       ),
    //     }}
    //   /> */}
    // </Stack.Navigator>
    <Stack.Navigator
      screenOptions={{
      headerShown: false,
      }}
      >
        <Stack.Screen name="Start" component={LoginScreen}/>
        <Stack.Screen name="Product" component={ProductScreen}/>
        <Stack.Screen name="Ticket" component={BusTicketApp}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Register" component={SignupScreen}/>
      </Stack.Navigator>
  );
}

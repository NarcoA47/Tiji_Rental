import 'react-native-gesture-handler'; // Ensure this is at the top
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Tabs } from 'expo-router';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreenMain from '../screens/homeScreen';
import ProductScreen from '../screens/productScreen';
import BusTicketApp from '../screens/ViewBusScreen';
import LoginScreen from '../screens/loginScreen';
import SignupScreen from '../screens/signupScreen';
import ProductView from '../screens/productView';
import ForgetPasswordScreen from '../screens/forgetPassword';
import ResetPasswordScreen from '../screens/resetPasswordScreen';
import BusHomeScreen from '../screens/BusHomeScreen';
import Checkout from '../screens/checkout';
import PassengerDetailsScreen from '../screens/PassengerDetailsScreen';
import ViewBusScreen from '../screens/ViewBusScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AuthOptionScreen from '../screens/AuthScreen';
import PaymentScreen from '../screens/PaymentScreen';
import OTP from '../screens/otpScreen';
import Success from '../screens/successfulScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import TicketDetails from '../screens/TicketDetailsScreen';
import OnBoardingScreen from '../screens/onboardingScreen';
import AddCardScreen from '../screens/AddCardScreen';
import HistoryScreen from '../screens/History';
import SupportScreen from '../screens/SupportScreen';
import TiJiAnimateOpenningScreen from '../screens/TiJiAnimatedScreen';


const Stack = createNativeStackNavigator();

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView>
       <Stack.Navigator
      screenOptions={{
      headerShown: false,
      }}
      >
      <Stack.Screen name="TiJi" component={TiJiAnimateOpenningScreen}/>
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen}/>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Product" component={ProductScreen}/>
      <Stack.Screen name="Ticket" component={BusTicketApp}/>
      <Stack.Screen name="Home" component={HomeScreenMain}/>
      <Stack.Screen name="BusHome" component={BusHomeScreen}/>
      <Stack.Screen name="Register" component={SignupScreen}/>
      <Stack.Screen name="AuthOption" component={AuthOptionScreen}/>
      <Stack.Screen name="ViewBuses" component={ViewBusScreen}/>
      <Stack.Screen name="TicketDetails" component={TicketDetails}/>
      <Stack.Screen name="Success" component={Success}/>
      <Stack.Screen name="OTP" component={OTP}/>
      <Stack.Screen name="PassengerDetails" component={PassengerDetailsScreen}/>
      <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen}/>
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen}/>
      <Stack.Screen name="Payment" component={PaymentScreen}/>
      <Stack.Screen name="ProductView" component={ProductView}/>
      <Stack.Screen name="Checkout" component={Checkout}/>
      <Stack.Screen name="Profile" component={ProfileScreen}/>
      <Stack.Screen name="EditProfile" component={EditProfileScreen}/>
      <Stack.Screen name="AddCardSetting" component={AddCardScreen}/>
      <Stack.Screen name="History" component={HistoryScreen}/>
      <Stack.Screen name="Support" component={SupportScreen}/>

      </Stack.Navigator>
    </GestureHandlerRootView>
   
  );
}

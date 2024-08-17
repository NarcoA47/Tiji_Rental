import React from 'react'
import { Text, View } from 'react-native'
import OnBoardingScreenOne from './splashScreens/onboardingOne'
import OnBoardingScreenTwo from './splashScreens/onboardingTwo'
import OnBoardingScreenThree from './splashScreens/onboardingThree'

export default function OnBoardingScreen() {
  return (
    
    <View>
       <OnBoardingScreenOne/>
       <OnBoardingScreenTwo/>
       <OnBoardingScreenThree/>


    </View>
  )
}

import Naviagtion from '@/components/navigation/topNavigation'
import React from 'react'
import { Text, View } from 'react-native'
import LoginText from '../components/login/signupText'
import CarSigninForms from '../components/login/forms1'


function CarLoginScreen() {
  return (
    <View>
        <Naviagtion/>
        <CarSigninForms/>
        <LoginText/>
    </View>
  )
}

export default CarLoginScreen

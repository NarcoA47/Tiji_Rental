import Naviagtion from '@/components/navigation/topNavigation'
import React from 'react'
import { Text, View } from 'react-native'
import LoginText from '../components/login/signupText'
import SigninForms from '../components/login/forms'

function LoginScreen() {
  return (
    <View>
        <Naviagtion/>
        <SigninForms/>
        <LoginText/>
    </View>
  )
}

export default LoginScreen

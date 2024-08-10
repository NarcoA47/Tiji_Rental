import React from 'react'
import { Text, View } from 'react-native'
import SigninForms from '../components/signin/forms';
import Naviagtion from '@/components/navigation/topNavigation';
import RegisterButton from '@/components/button';
import LoginText from '../components/signin/loginText';


function SignupScreen() {
  return (
    <View>
      <Naviagtion/>
      <SigninForms/>
      <RegisterButton/>
      <LoginText/>
    </View>
  )
}

export default SignupScreen

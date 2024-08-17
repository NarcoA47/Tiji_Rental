import React from 'react'
import { Text, View } from 'react-native'
import SigninForms from '../components/signin/forms';
import Naviagtion from '@/components/navigation/topNavigation';
import RegisterButton from '@/components/button';
import LoginText from '../components/signin/loginText';
import { ScrollView } from 'react-native-gesture-handler';


function SignupScreen() {
  return (
    <ScrollView>
      <View>
        <Naviagtion/>
        <SigninForms/>
        <LoginText/>
      </View>
    </ScrollView>
  )
}

export default SignupScreen

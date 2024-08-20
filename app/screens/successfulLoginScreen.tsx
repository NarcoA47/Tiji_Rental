import React from 'react'
import { Text, View } from 'react-native'
import ImageBanner from '../components/successful/imageBanner'
import SuccessfullTextMessage from '../components/successful/textManager'
import { HomeContinue } from '@/components/button'
import LoginSuccessfullTextMessage from '../components/successful/LogintextManager '


function LoginSuccess() {
  return (
    <View>
        <ImageBanner/>
        <LoginSuccessfullTextMessage/>
        <HomeContinue/>
    </View>
  )
}

export default LoginSuccess

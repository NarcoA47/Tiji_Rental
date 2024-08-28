import React from 'react'
import { Text, View } from 'react-native'
import ImageBanner from '../components/successful/imageBanner'
import { BusHomeContinue, Continue } from '@/components/button'
import LoginSuccessfullTextMessage from '../components/successful/LogintextManager '


function LoginSuccess() {
  return (
    <View>
        <ImageBanner/>
        <LoginSuccessfullTextMessage/>
        <Continue/>
    </View>
  )
}

export default LoginSuccess

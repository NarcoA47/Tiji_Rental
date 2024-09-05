import React from 'react'
import { Text, View } from 'react-native'
import ImageBanner from '../components/successful/imageBanner'
import { CarContinue } from '@/components/button'
import LoginSuccessfullTextMessage from '../components/successful/LogintextManager '


function CarLoginSuccess() {
  return (
    <View>
        <ImageBanner/>
        <LoginSuccessfullTextMessage/>
        <CarContinue/>
    </View>
  )
}

export default CarLoginSuccess

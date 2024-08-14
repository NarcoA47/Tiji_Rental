import React from 'react'
import { Text, View } from 'react-native'
import ImageBanner from '../components/successful/imageBanner'
import SuccessfullTextMessage from '../components/successful/textManager'
import { HomeContinue } from '@/components/button'


function Success() {
  return (
    <View>
        <ImageBanner/>
        <SuccessfullTextMessage/>
        <HomeContinue/>
    </View>
  )
}

export default Success

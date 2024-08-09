import React from 'react'
import { Text, View } from 'react-native'
import ImageBanner from '../components/successful/imageBanner'
import SuccessfullTextMessage from '../components/successful/textManager'
import { Continue } from '@/components/button'

function Success() {
  return (
    <View>
        <ImageBanner/>
        <SuccessfullTextMessage/>
        <Continue/>
    </View>
  )
}

export default Success

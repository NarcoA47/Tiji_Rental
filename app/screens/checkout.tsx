import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HeadTextManager from '../components/checkout/headTextManager'
import PickerSection from '../components/checkout/pickerSection'
import ImageManager from '../components/checkout/imageManager'
import FooterManager from '../components/checkout/footerManager'
import { MainPayNavigation } from '@/components/navigation/topNavigation'

export default function Checkout() {
  return (
    <View>
        <MainPayNavigation/>
        <HeadTextManager/>
        <PickerSection/>
        <ImageManager/>
        <FooterManager/>
    </View>
  )
}

const styles = StyleSheet.create({

})
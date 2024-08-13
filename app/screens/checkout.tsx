import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import HeadTextManager from '../components/checkout/headTextManager'
import PickerSection from '../components/checkout/pickerSection'
import ImageManager from '../components/checkout/imageManager'
import FooterManager from '../components/checkout/footerManager'
import { MainPayNavigation, ReturnNavigation } from '@/components/navigation/topNavigation'

export default function Checkout() {

  return (
    <ScrollView>
      <View>
        <MainPayNavigation/>
        <HeadTextManager/>
        <PickerSection/>
        <ImageManager/>
        <ReturnNavigation/>
        <FooterManager/>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

})
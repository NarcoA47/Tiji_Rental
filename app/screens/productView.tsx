import ProductCardNavigation from '@/components/navigation/topNavigation'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import More from '../components/productview/more'
import MoreCards from '../components/productview/moreCards'

export default function ProductView() {
  return (
   <ScrollView>
        <View>
            <ProductCardNavigation/>
            <More/>
            <MoreCards/>
        </View>
   </ScrollView>
  )
}

const styles = StyleSheet.create({

})
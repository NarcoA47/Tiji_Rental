import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function FooterManager() {
  return (
    <View style={styles.container}>
        <View>
          <View>
            <Text>Merceded AMG</Text>
            <Text>Price</Text>
          </View>
          <View>
              <Text>Rating</Text>
          </View>
        </View>
        <View>
          <Text>Description</Text>
          <Text>Wanna ride the coolesr sports car in the world</Text>
        </View>
        <View>
          <Text>Company Info</Text>
          <Text>About, Contact Info, Location</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
})
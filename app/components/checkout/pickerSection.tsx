import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function PickerSection() {
  return (
    <View>
        <Text>Pick A Date</Text>
        <View>
            <TouchableOpacity>
                <Text>Today</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Tomorrow</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Select Date</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Touchable, View, TouchableOpacity, StyleSheet, Text } from 'react-native'

export default function RegisterButton() {
  return (
    <View>
        <TouchableOpacity style={styles.buttonManager}>
            <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
    </View>
  )
}

export function LoginButton() {

  const navigation = useNavigation()

    return (
      <View>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.buttonManager}>
              <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
      </View>
    )
  }

  export function Confirm() {
    return (
      <View>
          <TouchableOpacity style={styles.buttonManager}>
              <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
      </View>
    )
  }

  export function Continue() {
    return (
      <View>
          <TouchableOpacity style={styles.buttonManager}>
              <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
      </View>
    )
  }


const styles = StyleSheet.create({
    buttonManager: {
        backgroundColor: '#0034BF',
        margin: 28,
        height: 50,
        textAlign: 'center',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
         
    },
})
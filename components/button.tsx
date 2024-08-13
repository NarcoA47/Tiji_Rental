import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Touchable, View, TouchableOpacity, StyleSheet, Text } from 'react-native'

export default function RegisterButton() {

  const navigation = useNavigation()

  return (
    <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.buttonManager}>
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
  export function Search() {
    return (
      <View>
          <TouchableOpacity style={styles.searchbuttonManager}>
              <Text style={styles.searchbuttonText}>Search For A bus</Text>
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

  export function PasswordButton() {

    const navigation = useNavigation()
  
    return (
      <View>
          <TouchableOpacity onPress={() => navigation.navigate('Successful')} style={styles.buttonManager}>
              <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>
      </View>
    )
  }
  export function PayButton() {

    const navigation = useNavigation()
  
    return (
      <View>
          <TouchableOpacity onPress={() => navigation.navigate('Successful')} style={styles.buttonManager}>
              <Text style={styles.buttonText}>Pay</Text>
          </TouchableOpacity>
      </View>
    )
  }

  export function ResetPasswordButton() {

    const navigation = useNavigation()
  
    return (
      <View>
          <TouchableOpacity onPress={() => navigation.navigate('Successful')} style={styles.buttonManager}>
              <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>
      </View>
    )
  }

  export function BookNowButton() {
    const navigation = useNavigation()
  
    return (
      <View>
          <TouchableOpacity onPress={() => navigation.navigate('Successful')} style={styles.buttonAltManager}>
              <Text style={styles.buttonAltText}>Book Now</Text>
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
    searchbuttonManager: {
        backgroundColor: '#FFFFFF',
        margin: 28,
        height: 50,
        textAlign: 'center',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonAltManager: {
        backgroundColor: '#FFFFFF',
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 20,
        height: 50,
        textAlign: 'center',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonAltText: {
      fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        color: '#000000',
    },

    buttonText: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
         
    },
    searchbuttonText: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        color: '#0034BF',
         
    },
})
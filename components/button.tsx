import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Touchable, View, Button, TouchableOpacity, StyleSheet, Text } from 'react-native';
import ConfirmDetailsModal from '@/app/Modal/ConfirmDetailsModal';

export default function RegisterButton() {

  const navigation = useNavigation()

  return (
    <View>
        <TouchableOpacity onPress={() => navigation.navigate('OTP')} style={styles.buttonManager}>
            <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
    </View>
  )
}

export function LoginButton() {

  const navigation = useNavigation()

    return (
      <View>
          <TouchableOpacity onPress={() => navigation.navigate('OTP')} style={styles.buttonManager}>
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

    const navigation = useNavigation()

    return (
      <View>
          <TouchableOpacity onPress={() => navigation.navigate('ViewBuses')} style={styles.searchbuttonManager}>
              <Text style={styles.searchbuttonText}>Search For A bus</Text>
          </TouchableOpacity>
      </View>
    )
  }

  export function EditProfile() {

    const navigation = useNavigation()

    return (
      <View>
          <TouchableOpacity onPress={() => navigation.navigate('ViewBuses')} style={styles.EditButton}>
              <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
      </View>
    )
  }

  export function Continue() {
    const navigation = useNavigation()
    return (
      <View>
          <TouchableOpacity style={styles.buttonManager} onPress={() => navigation.navigate('Success')}>
              <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
      </View>
    )
  }
  export function HomeContinue() {
    const navigation = useNavigation()
    return (
      <View>
          <TouchableOpacity style={styles.buttonManager} onPress={() => navigation.navigate('Home')}>
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
  export function NextButton() {

    const [modalVisible, setModalVisible] = React.useState(false);
    
    const passengerDetails = {
      name: 'Tiza Mpata',
      phone: '+260 961780810',
      departureTime: '09:00hrs',
      tickets: 1,
      from: 'Lusaka',
      to: 'Kabwe',
    };
    
    const navigation = useNavigation()
    
    return (
      <View>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.buttonManager}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            <ConfirmDetailsModal 
              visible={modalVisible} 
              onClose={() => setModalVisible(false)} 
              passengerDetails={passengerDetails} 
            />
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
    EditButton: {
        backgroundColor: '#0034BF',
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
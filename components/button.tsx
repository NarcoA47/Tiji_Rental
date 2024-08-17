import { useNavigation,  } from '@react-navigation/native'
import React from 'react'
import { Touchable, View, Button, TouchableOpacity, StyleSheet, Text, GestureResponderEvent } from 'react-native';
import ConfirmDetailsModal from '@/app/Modal/ConfirmDetailsModal';
import ConfirmedBookingTicketModal from '@/app/Modal/ConfirmedBookingTicket';
import SuccessCarHireModal from '@/app/Modal/SuccessCarHireModal';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

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

type LoginButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
};

export const LoginButton: React.FC<LoginButtonProps> = ({ onPress }) => {


  return (
    <View>
      <TouchableOpacity style={styles.buttonManager}  onPress={onPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
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
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')} style={styles.EditButton}>
              <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
      </View>
    )
  }
  export function SaveProfileButton() {
    // Should Give a pop up notification
    const navigation = useNavigation()

    return (
      <View>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.EditButton}>
              <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
      </View>
    )
  }

  export function Continue() {
    const navigation = useNavigation()
    // const [code, setCode] = React.useState('');
    // const { phoneNumber } = route.params;

    // const handleVerify = async () => {
    //   try {
    //     const response = await axios.post('http://your-django-backend-url/api/verify_code/', {
    //       phone_number: phoneNumber,
    //       code: code,
    //     });
    //     if (response.status === 200) {
    //       // Verification successful, navigate to the next screen
    //       navigation.navigate('Success'); // replace with your target screen
    //     } else {
    //       console.error('Invalid code');
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
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
    const [modalVisible, setModalVisible] = React.useState(false);
    const navigation = useNavigation()
  
    return (
      <View>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.buttonManager}>
              <Text style={styles.buttonText}>Pay</Text>
          </TouchableOpacity>
          <ConfirmedBookingTicketModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}         />
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
  export function BackToHomeButton() {

    const navigation = useNavigation()
  
    return (
      <View>
          <TouchableOpacity onPress={() => navigation.navigate('home')} style={styles.back2homebuttonManager}>
              <Text style={styles.buttonText}>Back To Home</Text>
          </TouchableOpacity>
      </View>
    )
  }
  export function CardBackToHomeButton() {

    const navigation = useNavigation()
  
    return (
      <View>
          <TouchableOpacity onPress={() => navigation.navigate('home')} style={styles.Cardback2homebuttonManager}>
              {/* <Ionicons name="chevron-back-circle" size={24} color="#0034BF" /> */}
              <Text 
              style={styles.CardbuttonText}
              >Back To Home

              </Text>
          </TouchableOpacity>
      </View>
    )
  }

  export function BookNowButton() {
    const [modalVisible, setModalVisible] = React.useState(false);
    const navigation = useNavigation()
  
    return (
      <View>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.buttonAltManager}>
              <Text style={styles.buttonAltText}>Book Now</Text>
          </TouchableOpacity>
          <SuccessCarHireModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)} 
          />
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
    back2homebuttonManager: {
        backgroundColor: '#0034BF',
        marginTop: 20,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    Cardback2homebuttonManager: {
        backgroundColor: '#0034BF',
        margin: 20,
        padding: 15,
        height: 50,
        width: 330,
        borderRadius: 5,
        // alignItems: 'left',
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
    icon: {
      marginTop: 12,
      paddingTop: 50,
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
    CardbuttonText: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'left',
        color: 'white',
         
    },
    searchbuttonText: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        color: '#0034BF',
         
    },
})
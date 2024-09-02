import { useNavigation,  } from '@react-navigation/native'
import React from 'react'
import { Touchable, View, Button, TouchableOpacity, StyleSheet, Text, GestureResponderEvent } from 'react-native';
import ConfirmDetailsModal from '@/app/Modal/ConfirmDetailsModal';
import ConfirmedBookingTicketModal from '@/app/Modal/ConfirmedBookingTicket';
import SuccessCarHireModal from '@/app/Modal/SuccessCarHireModal';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';


// Register Button 

type RegisterButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
};

const RegisterButton: React.FC<RegisterButtonProps> = ({ onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.buttonManager}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterButton;

// ** Register Button End ** //

// Login Button 
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
// ** Login Button End ** //

type PasswordButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
};
export const PasswordButton: React.FC<PasswordButtonProps> = ({ onPress }) => {

  return (
    <View>
        <TouchableOpacity onPress={onPress} style={styles.buttonManager}>
            <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
    </View>
  )
}
type ResetPasswordButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
};
export const ResetPasswordButton: React.FC<ResetPasswordButtonProps> = ({ onPress }) => {


  const navigation = useNavigation()

  return (
    <View>
        <TouchableOpacity onPress={onPress} style={styles.buttonManager}>
            <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
    </View>
  )
}

// Confirm Button 
  export function Confirm() {
    return (
      <View>
          <TouchableOpacity style={styles.buttonManager}>
              <Text style={styles.buttonText}>Confirm</Text>
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

    return (
      <View>
          <TouchableOpacity style={styles.buttonManager} onPress={() => navigation.navigate('ResetPassword')}>
              <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
      </View>
    )
  }
  
  export function BusHomeContinue() {
    const navigation = useNavigation()
    return (
      <View>
          <TouchableOpacity style={styles.buttonManager} onPress={() => navigation.navigate('BusHome')}>
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

  export function SaveButton() {
    const navigation = useNavigation()
    return (
      <View>
          <TouchableOpacity style={styles.buttonManager} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
      </View>
    )
  }


  
  type PayButtonProps = {
    onPress: (event: GestureResponderEvent) => void;
  };
  export const PayButton: React.FC<PayButtonProps> = ({ onPress }) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const navigation = useNavigation()
  
    return (
      <View>
          <TouchableOpacity onPress={onPress} style={styles.buttonManager}>
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
            <View style={styles.iconTextContainer}>
                <Text style={styles.CardbuttonText}>Back To Home</Text>
                <Ionicons 
                name="chevron-forward-outline" 
                style={styles.icon}
                size={24} color="#fff" />
            </View>
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
      padding: 10,
      height: 50,
      width: 330,
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
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
        top: 10
    },
    EditButton: {
        backgroundColor: '#0034BF',
        margin: 28,
        height: 50,
        textAlign: 'center',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
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
      paddingLeft: 137,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
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
    
  iconTextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  CardbuttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 8, // Add space between icon and text
  },
    searchbuttonText: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        color: '#0034BF',
         
    },
})
import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from 'expo-router';
import { contactDetails} from './../../services/contactResource'
export default function SupportListContainer() {
  const dropdownRef = React.createRef();
  const navigation = useNavigation()
  
  return (
    <ScrollView>
        <View>
            <Text style={{ margin: 15, flex: 1 }}>
              {contactDetails.about}
            </Text>
            <Text  style={{ margin: 15, flex: 1 }}>With the coming of COVID-19 ,we believe in diconjesting bus stations and only allowing passengers who have reserved and booked tickets to their destination to freely move in those premises. This is in view to curb the spread of COVID-19.</Text>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 40,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  subheaderContainer: {
    marginVertical: 10,
    alignItems: 'flex-start', // Center the line horizontally
  },
  grayLine: {
    borderBottomColor: '#d3d3d3', // Gray color
    borderBottomWidth: 2,
    width: 700, // Fixed width (e.g., 200 pixels)
  },
});

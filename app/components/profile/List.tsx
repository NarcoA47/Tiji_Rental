import React from 'react';
import { ScrollView, StyleSheet, Text, View, Modal, FlatList, TouchableOpacity, Share, Alert, Linking } from 'react-native';
import { List, MD3Colors, Divider } from 'react-native-paper';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { logout } from '@/app/services/auth';

export default function ListContainer() {
  const dropdownRef = React.createRef();
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(null);

  const options = [
    { label: 'Phone Number: +260 979298948', url: 'tel:+260979298948' },
    { label: 'Email: info@tijiapp.com', url: 'mailto:info@tijiapp.com' },
    { label: 'Facebook: TiJi App', url: 'https://www.facebook.com/TijiTicket?mibextid=LQQJ4d' },
    { label: 'Instagram: TiJi App', url: 'https://instagram.com/tiji_ticket?igshid=OGQ5ZDc2ODk2ZA==' },
    { label: 'X: TiJi App', url: 'https://twitter.com/tijiapp?s=21&t=Ux8gJwzLjiHlmvL4v1G6OA' }, // Assuming 'X' refers to Twitter
  ];

  const closeModal = () => {
    setIsVisible(false);
  };

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  const selectOption = async (option) => {
    setSelectedOption(option);
    setIsVisible(false);
    try {
      const canOpen = await Linking.canOpenURL(option.url);
      if (canOpen) {
        await Linking.openURL(option.url);
      } else {
        Alert.alert('Cannot open URL', `Sorry, we can't open this URL: ${option.url}`);
      }
    } catch (error) {
      Alert.alert('Error', `Failed to open URL: ${error.message}`);
    }
  };

  const AppLink = 'https://www.yourappwebsite.com'; // Replace with your actual app link

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `Check out this amazing app: ${AppLink}`,
        url: AppLink,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared with activity type of result.activityType
        } else {
          // Shared successfully
          Alert.alert('Shared successfully!');
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed the share dialog
      }
    } catch (error) {
      Alert.alert('Error sharing', error.message);
    }
  };

  return (
    <ScrollView>
      <View style={styles.subheaderContainer}>
        <View style={styles.grayLine} />
      </View>
      <View>
        <List.Section>
          <List.Item
            style={styles.container}
            title="Settings"
            onPress={() => navigation.navigate('Settings')}
            left={() => <Ionicons name="settings-outline" size={24} color={MD3Colors.primary100} />}
          />
          <Divider />
          <List.Item
            style={styles.container}
            title="History"
            onPress={() => navigation.navigate('History')}
            left={() => <Ionicons name="time-outline" size={24} color={MD3Colors.primary100} />}
          />
          <Divider />
          <List.Item
            style={styles.container}
            title="Add Card"
            onPress={() => navigation.navigate('AddCardSetting')}
            left={() => <MaterialIcons name="credit-card" size={24} color={MD3Colors.primary100} />}
          />
          <Divider />
          <List.Item
            style={styles.container}
            title="Share"
            onPress={handleShare} // Trigger the share function
            left={() => <Ionicons name="share-social-outline" size={24} color={MD3Colors.primary100} />}
          />
          <Divider />
          <View>
            <List.Item
              style={styles.container}
              title="About Us"
              onPress={() => navigation.navigate('Support')}
              left={() => <Ionicons name="information-circle-outline" size={24} color={MD3Colors.primary100} />}
            />
          </View>
          <Divider />
          <View>
            <List.Item
              style={styles.container}
              title="Support"
              onPress={toggleDropdown}
              left={() => <Ionicons name="help-circle-outline" size={24} color={MD3Colors.primary100} />}
            />
            {isVisible && (
              <Modal transparent animationType="fade" visible={isVisible}>
                <View style={styles.modalOverlay}>
                  <View style={styles.dropdown}>
                    {/* Close Button */}
                    <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                      <Ionicons name="close-circle-outline" size={28} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Get In Touch</Text>
                    <FlatList
                      data={options}
                      keyExtractor={(item) => item.label}
                      renderItem={({ item }) => (
                        <TouchableOpacity style={styles.option} onPress={() => selectOption(item)}>
                          <Text style={styles.optionText}>{item.label}</Text>
                        </TouchableOpacity>
                      )}
                    />
                  </View>
                </View>
              </Modal>
            )}
          </View>
          <Divider />
          <View>
            <List.Item
              style={styles.container}
              title="Log Out"
              onPress={() => logout(navigation)}
              left={() => <MaterialIcons name="logout" size={24} color={MD3Colors.primary100} />} // Set the logout icon
            />
          </View>
        </List.Section>
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
    alignItems: 'flex-start',
  },
  grayLine: {
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 2,
    width: 700,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dropdown: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 28,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 10,
    zIndex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    paddingLeft: 12,
  },
  option: {
    padding: 10,
  },
  optionText: {
    fontSize: 16,
  },
});

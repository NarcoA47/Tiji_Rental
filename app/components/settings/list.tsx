import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Switch, Alert, Modal, useColorScheme, TextInput } from 'react-native';
import { List, Divider, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

export default function SettingsContainer() {
  const navigation = useNavigation();
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const deviceTheme = useColorScheme();

  const toggleTheme = () => {
    setIsLightTheme((previousState) => !previousState);
  };

  const toggleNotifications = () => {
    setNotificationsEnabled((previousState) => !previousState);
  };

  const handleAddEmail = () => {
    setIsModalVisible(true);
  };

  const saveEmail = () => {
    Alert.alert('Email Saved', `Email: ${email}`);
    setIsModalVisible(false);
    setEmail('');
  };

  return (
    <ScrollView>
        <View style={{ backgroundColor: '#FFFF', flex: 1 }}>

            {/* Modal for Adding Email */}
            <Modal
                transparent
                animationType="slide"
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Add Email</Text>
                        <TextInput
                        style={styles.input}
                        placeholder="Enter email"
                        value={email}
                        onChangeText={setEmail}
                        />
                        <View style={styles.buttonRow}>
                        <Button mode="contained" onPress={saveEmail} style={styles.saveButton} >
                            <Text style={styles.saveButtonContent} >

                                Save
                            </Text>
                        </Button>
                        <Button onPress={() => setIsModalVisible(false)} style={styles.cancelButton}>
                            <Text style={styles.cancelButtonContent} >
                                Cancel
                            </Text>
                        </Button>
                        </View>
                    </View>
                </View>
            </Modal>

            <View style={styles.header}>
                <Text style={styles.title}>General</Text>
                <List.Section>
                <List.Item
                    title="Wane Austin Mbale"
                    description="Name"
                    right={() => <Ionicons name="chevron-forward" size={24} />}
                    onPress={() => navigation.navigate('EditProfile')}
                />
                <Divider />
                {/* Disable the Phone List.Item but keep the number visible */}
                <List.Item
                    title="+260 968 324065"
                    right={() => <Ionicons name="chevron-forward" size={24} />}
                    disabled
                    style={styles.disabledItem} // Add style for the disabled item
                />
                <Divider />
                <List.Item
                    title="Add Email"
                    right={() => <Ionicons name="chevron-forward" size={24} />}
                    onPress={handleAddEmail}
                />
                </List.Section>
            </View>

            {/* Theme Section */}
            <View style={styles.themeContainer}>
                <Text style={styles.title}>Theme</Text>
                <List.Section>
                <List.Item
                    title="Dark Theme"
                    right={() => (
                    <Switch
                        value={!isLightTheme}
                        onValueChange={toggleTheme}
                    />
                    )}
                />
                <Divider />
                <List.Item
                    title="Light Theme"
                    right={() => (
                    <Switch
                        value={isLightTheme}
                        onValueChange={toggleTheme}
                    />
                    )}
                />
                <Divider />
                <List.Item
                    title="System Preferences"
                    right={() => (
                    <Switch
                        value={deviceTheme === 'light' ? isLightTheme : !isLightTheme}
                        onValueChange={toggleTheme}
                    />
                    )}
                />
                </List.Section>
            </View>

            {/* Notifications Section */}
            <View style={styles.notificationsContainer}>
                <Text style={styles.title}>Notifications</Text>
                <List.Section>
                <List.Item
                    title="Don't Call"
                    right={() => (
                    <Switch
                        value={!notificationsEnabled}
                        onValueChange={toggleNotifications}
                    />
                    )}
                />
                </List.Section>
            </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  themeContainer: {
    padding: 16,
  },
  notificationsContainer: {
    padding: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonRow: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    width: '100%',
  },
  saveButton: {
    flex: 1,
    marginRight: 5, 
    borderRadius: 5,
    backgroundColor: '#0034BF', 
  },
  saveButtonContent: {
    backgroundColor: '#0034BF',
    color: '#FFFFFF', 
  },
  
  cancelButton: {
    flex: 1,
    marginLeft: 5, 
    borderRadius: 5,
    borderColor: '#0034BF',
    borderWidth: 1,
  },
  cancelButtonContent: {
    color: '#0034BF', 
  },
  disabledItem: {
    backgroundColor: '#f0f0f0', 
  },
});

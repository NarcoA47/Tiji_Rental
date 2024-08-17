import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { List, MD3Colors, Divider } from 'react-native-paper';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; //
import { Dropdown, Button } from "react-native-magnus";
import { useNavigation } from 'expo-router';

export default function ListContainer() {
  const dropdownRef = React.createRef();
  const navigation = useNavigation()
  
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
                    onPress={() => navigation.navigate('ProductView')}
                    left={() => <Ionicons name="settings-outline" size={24} color={MD3Colors.primary100} />}
                />
                <Divider />
                <List.Item
                    style={styles.container}
                    title="History"
                    onPress={() => navigation.navigate('')}
                    left={() => <Ionicons name="time-outline" size={24} color={MD3Colors.primary100} />}
                />
                <Divider />
                <List.Item
                    style={styles.container}
                    title="Add Card"
                    onPress={() => navigation.navigate('')}
                    left={() => <MaterialIcons name="credit-card" size={24} color={MD3Colors.primary100} />}
                />
                <Divider />
                <List.Item
                    style={styles.container}
                    title="Support"
                    onPress={() => navigation.navigate('')}
                    left={() => <Ionicons name="help-circle-outline" size={24} color={MD3Colors.primary100} />}
                />
                <Divider />
                <List.Item
                    style={styles.container}
                    title="Share"
                    onPress={() => navigation.navigate('')}
                    left={() => <Ionicons name="share-social-outline" size={24} color={MD3Colors.primary100} />}
                />
                <Divider />
                <View>
                  <List.Item
                      style={styles.container}
                      title="About Us"
                      onPress={() => navigation.navigate('')}
                      left={() => <Ionicons name="information-circle-outline" size={24} color={MD3Colors.primary100} 
                      
                      />}
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
    alignItems: 'flex-start', // Center the line horizontally
  },
  grayLine: {
    borderBottomColor: '#d3d3d3', // Gray color
    borderBottomWidth: 2,
    width: 700, // Fixed width (e.g., 200 pixels)
  },
});

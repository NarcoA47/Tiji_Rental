import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { List, MD3Colors } from 'react-native-paper';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; //

export default function ListContainer() {
  return (
    <ScrollView>
        <View style={styles.subheaderContainer}>
            <View style={styles.grayLine} />
        </View>
        <View style={styles.container}>
            <List.Section>
                <List.Item
                    title="Settings"
                    left={() => <Ionicons name="settings-outline" size={24} color={MD3Colors.tertiary70} />}
                />
                <List.Item
                    title="History"
                    left={() => <Ionicons name="time-outline" size={24} color={MD3Colors.tertiary70} />}
                />
                <List.Item
                    title="Add Card"
                    left={() => <MaterialIcons name="credit-card" size={24} color={MD3Colors.tertiary70} />}
                />
                <List.Item
                    title="Support"
                    left={() => <Ionicons name="help-circle-outline" size={24} color={MD3Colors.tertiary70} />}
                />
                <List.Item
                    title="About Us"
                    left={() => <Ionicons name="information-circle-outline" size={24} color={MD3Colors.tertiary70} />}
                />
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
    marginBottom: 50,
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

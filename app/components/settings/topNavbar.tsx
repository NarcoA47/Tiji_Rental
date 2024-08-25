import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

export function SettingNavigation() {
  const navigation = useNavigation();

  const handleGoBack = async () => {
    // Add any async operations here if needed before going back
    await navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handleGoBack}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Ionicons style={styles.icon} name="chevron-back-circle" size={50} color="#0034BF" />
          <Text style={styles.title}>SETTINGS</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',  
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    top: 30,
  },
  icon: {
    right: 25,
    alignItems: "flex-start"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    justifyContent: "center",
    color: '#080800',
    top: 13,
    paddingLeft: 60,
  },
});

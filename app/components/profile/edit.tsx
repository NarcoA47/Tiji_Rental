import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Image } from 'react-native-magnus';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; //// Use the icon component from react-native-magnus

export default function EditProfileContainer() {
  
  const handleImageUpload = () => {
    // Implement image upload functionality here
    Alert.alert('Upload Image', 'Image upload functionality goes here.');
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardTwo}>
        <View style={styles.contentOne}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.ImageControllerCardTwo}
              h={241}
              w={241}
              m={14}
              rounded="circle"
              source={{
                uri: "https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
              }}
            />
            <TouchableOpacity style={styles.cameraButton} onPress={handleImageUpload}>
              <Ionicons name="camera-outline" size={30} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageControllerCardTwo: {
    alignSelf: 'center',
  },
  contentOne: {
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
    top: 30,
  },
  cameraButton: {
    position: 'absolute',
    bottom: 20, // Adjust based on your design
    right: 38,
    backgroundColor: '#cbd5e0',
    borderRadius: 100,
    padding: 10,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  leadText: {
    color: '#FFFFFF',
    marginTop: 4,
    marginBottom: 6,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  descriptionText: {
    color: '#808080',
    marginBottom: 2,
    fontWeight: 'bold',
    fontSize: 14,
  },
  cardTwo: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

import React, { useEffect, useState } from 'react'
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function ProfileContainer() {

  const [username, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        // Retrieve the token from AsyncStorage
        const accessToken = await AsyncStorage.getItem('access_token');

        if (accessToken) {
          // Decode the token to get the user_id
          const decodedToken = jwtDecode(accessToken);
          // const userId = decodedToken.accessToken; // Adjust based on token structure

          if (decodedToken) {
            // Fetch user details from your backend
            const response = await axios.get(`https://tiji-dev.herokuapp.com/api/v1/users/login/`, {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
              }
            });

            // Extract the username from the response
            const decodedToken = response.data;
            if (decodedToken && decodedToken.username) {
              setUserName(decodedToken.username);
            } else {
              console.error('Username not found in user data');
            }
          } else {
            console.error('User ID not found in token');
          }
        } else {
          console.error('No token found');
        }
      } catch (error) {
        console.error('Failed to fetch username', error);
      }
    };

    fetchUserName();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.cardTwo}>
        <View style={styles.contentOne}>
          <Image
            style={styles.ImageControllerCardTwo}
            source={{
              uri: "https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.leadText}>{username}</Text>
            <Text style={styles.descriptionText}>@GhostCypher</Text>
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
    margin: 40,
    alignSelf: 'center',
    top: 37,
  },
  contentOne: {
    margin: 80,
    alignItems: 'center',
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
    //width: 240,
    //height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#ffffff',
    borderRadius: 5,
    //margin: 20,
  },
});

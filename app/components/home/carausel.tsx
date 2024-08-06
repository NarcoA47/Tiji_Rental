import React from 'react';
import { StyleSheet, Text, View, Dimensions,  } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width: screenWidth } = Dimensions.get('window');

const data = [
    { title: 'Item 1' },
    { title: 'Item 2' },
    { title: 'Item 3' },
  ];

export default function Carausel() {

    // const carouselRef = useRef(null);

    const renderItem = ({ item }) => (
      <View style={styles.itemContainer}>
        <Text style={styles.itemLabel}>{item.title}</Text>
      </View>
    );

    return (
        <View style={styles.container}>
           <Carousel
            width={screenWidth}
            height={250}
            data={data}
            renderItem={renderItem}
            mode="horizontal"
          />
        </View>
      );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 250,
        padding: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    itemLabel: {
        color: 'black',
        fontSize: 24,
    },
})
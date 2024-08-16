import React from 'react'
import { Image, StyleSheet, Text, Dimensions, View } from 'react-native'
import Carousel from 'react-native-reanimated-carousel';

const { width: screenWidth } = Dimensions.get('window');

export default function Popular() {

    const imageMap = {
        'victoria_fall': require('../../../assets/images/homeScreen/Car-hire.png'),
        'livingstone': require('../../../assets/images/homeScreen/Car-hire.png'),
        'national_park': require('../../../assets/images/homeScreen/Car-hire.png'),
        'south_luangwa': require('../../../assets/images/homeScreen/Car-hire.png'),
    };

    const places = [
        { name: 'Victoria Fall', description: 'A stunning waterfall on the Zambezi River.' },
        { name: 'Livingstone', description: 'A historic city known for adventure activities.' },
        { name: 'National Park', description: 'A vast area of protected natural beauty.' },
        { name: 'South Luangwa', description: 'A wildlife-rich national park in Zambia.' },
    ];

  return (
    <View style={styles.container}>
            <Carousel
                width={screenWidth - 70}
                height={250}
                data={places}
                renderItem={({ item, index }) => {
                    const imageKey = item.name.replace(' ', '_').toLowerCase();
                    return (
                        <View key={index} style={styles.cardContainer}>
                            <Image source={imageMap[imageKey]} style={styles.imageContainer} />
                            <View style={styles.overlay}>
                                <Text style={styles.placeText}>{item.name}</Text>
                                <Text style={styles.descriptionText}>{item.description}</Text>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
  )
}


const styles = StyleSheet.create({
    container: {
        margin: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        // padding:10,
        marginBottom: 20,
        elevation: 3,
        overflow: 'hidden',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        
        overflow: 'hidden',
        height: 250,
        width: screenWidth - 70,
    },
    imageContainer: {
        height: '100%',
        width: '100%',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Faint darkening effect
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    placeText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 5,
    },
    descriptionText: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
    },
})
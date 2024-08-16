import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
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
        { title: 'Victoria Fall', description: 'Visit the Victoria Fall and travel with TiJi.', name: 'Livingstone' },
        { title: 'National Park', description: 'Travel at the tip of your finger.', name: 'South Luangwa' },
        // Add more items as needed
    ];

    const renderItem = ({ item, index }) => {
        const imageKey = item.title.replace(' ', '_').toLowerCase();
        return (
            <View style={styles.card}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardItem}>
                        <Image source={imageMap[imageKey]} style={styles.imageContainer} />
                        <View style={styles.overlay}>
                            <Text style={styles.placeTitle}>{item.title}</Text>
                            <Text style={styles.descriptionText}>{item.description}</Text>
                            <Text style={styles.placeText}>{item.name}</Text>
                        </View>
                    </View>
                    {places[index + 1] && (
                        <View style={styles.cardItem}>
                            <Image source={imageMap[imageKey]} style={styles.imageContainer} />
                            <View style={styles.overlay}>
                                <Text style={styles.placeTitle}>{places[index + 1].title}</Text>
                                <Text style={styles.descriptionText}>{places[index + 1].description}</Text>
                                <Text style={styles.placeText}>{places[index + 1].name}</Text>
                            </View>
                        </View>
                    )}
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Popular Places</Text>
            <Carousel
                width={screenWidth}
                height={270}
                data={places}
                renderItem={renderItem}
                loop={false}
                style={styles.carousel}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    carousel: {
        marginLeft: -20,  // Optional: Adjust to align with the screen
    },
    card: {
        margin: 20,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 10,
        elevation: 3, // Adds a shadow effect (Android)
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
        shadowOpacity: 0.3, // Shadow opacity for iOS
        shadowRadius: 4, // Shadow radius for iOS
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: screenWidth * 0.85, // Adjust width as needed
    },
    cardItem: {
        width: screenWidth * 0.4,
        borderRadius: 10,
        overflow: 'hidden',
    },
    imageContainer: {
        height: 200,
        width: '100%',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'flex-end',
        padding: 10,
    },
    placeTitle: {
        position: 'relative',
        bottom: 105,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    descriptionText: {
        position: 'relative',
        bottom: 100,
        fontSize: 12,
        color: 'white',
        marginBottom: 15,
    },
    placeText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
});

import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

export default function Popular() {
    const imageMap = {
        'victoria_fall': require('../../../assets/images/background/victoria-falls.png'),
        'livingstone': require('../../../assets/images/background/southlwangwa.png'),
        'national_park': require('../../../assets/images/background/southlwangwa.png'),
        'south_luangwa': require('../../../assets/images/background/southlwangwa.png'),
    };

    const places = [
        { title: 'Victoria Fall', description: 'Visit the Victoria Fall and travel with TiJi.', name: 'Livingstone', image: 'victoria_fall' },
        { title: 'National Park', description: 'Travel at the tip of your finger.', name: 'South Luangwa', image: 'national_park' },
    ];

    return (
        <View style={styles.container}>
            {/* <Text style={styles.header}>Popular Places</Text> */}
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false} 
                contentContainerStyle={styles.scrollContainer}
            >
                {places.map((item, index) => {
                    const imageKey = item.image;
                    return (
                        <View key={index} style={styles.card}>
                            <View style={styles.cardContainer}>
                            <View style={styles.cardItem}>
                                <Image source={imageMap[imageKey]} style={styles.imageContainer} />
                                <View style={styles.overlay}>
                                    <Text style={styles.placeTitle}>{item.title}</Text>
                                    <Text style={styles.descriptionText}>{item.description}</Text>
                                    <Text style={styles.placeText}>{item.name}</Text>
                                </View>
                            </View>
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    scrollContainer: {
        flexDirection: 'row',
        alignItems: 'center', // Uncomment if you want to align items vertically center
    },
    card: {
        width: screenWidth * 0.44,
        marginRight: 20, // Space between cards
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
        height: 235,
        width: screenWidth * 0.40,
        borderRadius: 10,
        justifyContent: 'flex-end',
        padding: 10,
        
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'flex-end',
        padding: 10,
    },
    placeTitle: {
        position: 'relative',
        bottom: 127,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    descriptionText: {
        fontSize: 12,
        bottom: 110,
        color: 'white',
        marginBottom: 15,
    },
    placeText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
});

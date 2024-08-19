import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SupportTopBarNavigation } from '../components/support/topNav';
import SupportListContainer from '../components/support/list';



function SupportScreen() {

    return (

        <View>
            <SupportTopBarNavigation/>
            <SupportListContainer></SupportListContainer>
            
            {/* <SaveButton/> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    segmentedControlTab: {
        marginVertical: 16,
    },
});

export default SupportScreen;

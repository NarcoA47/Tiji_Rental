import { SaveButton } from '@/components/button';
import { HistorySettingMainNavigation } from '@/components/navigation/topNavigation';
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';



function HistoryScreen() {

    return (

        <View>
            <HistorySettingMainNavigation/>
            
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

export default HistoryScreen;

import { SaveButton } from '@/components/button';
import { HistorySettingMainNavigation } from '@/components/navigation/topNavigation';
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TicketingContainer from '../components/history/list';



function HistoryScreen() {

    return (

        <View style={{ backgroundColor: '#FFFF', flex: 1 }}>
            <HistorySettingMainNavigation/>
            <TicketingContainer/>
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

import { SaveButton } from '@/components/button';
import { HeaderSettingMainNavigation } from '@/components/navigation/topNavigation';
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SettingCardForm from '../components/addcard/settingcardform';


function AddCardScreen() {

    return (

        <View>
            <HeaderSettingMainNavigation/>
            <SettingCardForm/>
            <SaveButton/>
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

export default AddCardScreen;

import React from 'react';
import { View } from 'react-native';
import SettingsContainer from '../components/settings/list';
import { SettingNavigation } from '../components/settings/topNavbar';



function SettingScreen() {

    return (

        <View style={{ backgroundColor: '#FFFF', flex: 1 }}>
            <SettingNavigation/>
            <SettingsContainer/>
        </View>
    );
}


export default SettingScreen;

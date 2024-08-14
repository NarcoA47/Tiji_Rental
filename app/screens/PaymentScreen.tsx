import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MobilePayForm from '../components/mobilepay/form';
import { PayButton } from '@/components/button';
import { MainPayNavigation, PayNaviagtion } from '@/components/navigation/topNavigation';
import SegmentedControlTab from "react-native-segmented-control-tab";
import CardForm from '../components/addcard/forms';

function PaymentScreen() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleIndexChange = (index) => {
        setSelectedIndex(index);
    };

    return (

        <View>
            <MainPayNavigation />

            <SegmentedControlTab
                values={["Mobile Pay", "Add Card"]}
                selectedIndex={selectedIndex}
                onTabPress={handleIndexChange}
                tabsContainerStyle={styles.segmentedControlTab}
            />

            {selectedIndex === 0 && <MobilePayForm />}
            {selectedIndex === 1 && <CardForm/> }

            <PayButton />
            <PayNaviagtion />
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

export default PaymentScreen;

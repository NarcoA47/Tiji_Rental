import React from 'react'
import { StyleSheet, View,  } from 'react-native'
import { TextInput } from 'react-native-paper';
import { TextInput as RNTextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import { Searchbar } from 'react-native-paper';
import LocationSearch from '../busHomeContainer/location';
// import { routes } from 'routes/routes';

export default function Changer() {

    const [text, setText] = React.useState("");
    
    // const { search } = route.params;

    const handleSetLocation = () => {
        // if (search === 'to') {
        // navigation.navigate(routes.home, {
        //     ...route.params,
        //     to: data,
        // });
        // } else {
        // navigation.navigate(routes.home, {
        //     ...route.params,
        //     from: data,
        // });
        // }
    };
  return (
    <ScrollView>

        
        <View style={{ flex: 1 }}>
            <LocationSearch
                onPress={handleSetLocation}
                // placeholder={search === 'from' ? 'Current Location' : 'Destination'}

            />
        </View>
        <View style={styles.container}>
            
            <View>
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                    ]}
                />
            </View>
        </View>
    </ScrollView>

        
    
    
  )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        elevation: 3,
    },

    textTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
    },
})

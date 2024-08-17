import React from 'react'
import { StyleSheet, View,  } from 'react-native'
import { TextInput } from 'react-native-paper';
import { TextInput as RNTextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import { Searchbar } from 'react-native-paper';

const Changer = ({navigation, route}) => {
    // const { search } = route.params;
    const [text, setText] = React.useState("");
    
    const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <ScrollView>

        
        <View style={styles.container}>
            <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
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

export default Changer;
import React from 'react'
import { StyleSheet, View,  } from 'react-native'
import { TextInput } from 'react-native-paper';
import { TextInput as RNTextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import { Searchbar } from 'react-native-paper';

export default function Changer() {

    const [text, setText] = React.useState("");
    const sportItems = [
        { label: 'Football', value: 'football' },
        { label: 'Baseball', value: 'baseball' },
        { label: 'Hockey', value: 'hockey' },
      ];
    
    const teamItems = [
    { label: 'Team A', value: 'teamA' },
    { label: 'Team B', value: 'teamB' },
    { label: 'Team C', value: 'teamC' },
    ];
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

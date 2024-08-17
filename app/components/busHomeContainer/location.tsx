import React, { useState, useEffect } from 'react';
import {
  FlatList,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';
// import { requestLocations } from 'store/reducers/locationReducer';
import { useDispatch, useSelector } from 'react-redux';
// import { GRAY, BLACK } from 'theme/styles/colors';

const LocationSearch = props => {
  const { onSelectLocation, placeholder, onPress } = props;
  const [searchText, setSearchText] = useState('');
  const [locations, setLocations] = useState([]);
//   const destinations = useSelector(state => state.location.locations);

  const dispatch = useDispatch();

  const fetchLocations = () => {
    // let whereToLocations = destinations.results.filter(item =>
    //   item.where_to.toLowerCase().includes(searchText.toLowerCase()),
    // );
    // return setLocations(whereToLocations);
  };

  useEffect(() => {
    fetchLocations();
    // console.log("These are the destination s",  destinations)
  }, [searchText]);

  const getUniqueResults = results => {
    // if (results) {
    //   const uniqueResults = Array.from(
    //     new Set(results.map(a => a.where_to)),
    //   ).map(where_to => {
    //     return results.find(a => a.where_to === where_to);
    //   });
    //   return uniqueResults;
    // }
    // return [];
  };

  return (
    <>
      <TextInput
        style={[styles.input, styles.text]}
        value={searchText}
        onChangeText={setSearchText}
        placeholder={placeholder}
      />

      <FlatList
        data={locations}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text style={styles.container}>No results</Text>}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity onPress={() => onPress()}>
              <Text style={styles.container}>where_to</Text>
            </TouchableOpacity>
          </>
        )}
      />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // borderBottomColor: GRAY,
    borderBottomWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    // borderColor: GRAY,
    width: '100%',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginVertical: 10,
  },
  text: {
    // color: BLACK,
  },
  item: {
    marginVertical: 10,
  },
});

export default LocationSearch;

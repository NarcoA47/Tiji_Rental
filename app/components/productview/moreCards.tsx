import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image, ActivityIndicator, FlatList } from 'react-native';

export default function MoreCards() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://your-api-url.com/endpoint');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.conatiner}>
        <View style={styles.cardLeadManager}>
          <FlatList data={data} keyExtractor={(item, index) => index.toString()} 
            renderItem={({ item }) => (
          <View style={styles.cardManager}>
            <Text>Porsche Cayman </Text>
            <View>
            <Image source={require('../../../assets/images/homeScreen/Car-hire.png')} style={styles.imageContainer}/>
            </View>
            <View  style={styles.footerContainer}>
              <View>
                <Text style={styles.time}>Daily</Text>
                <Text style={styles.price}>K250</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Checkout')} style={styles.buttonContainer}>
                <Text style={styles.textColor}>Rent Now</Text>
              </TouchableOpacity>
            </View>
          </View>)}
          />
          {/* <View style={styles.cardManager}>
            <Text>Porsche Cayman </Text>
            <View>
            <Image source={require('../../../assets/images/homeScreen/Car-hire.png')} style={styles.imageContainer}/>
            </View>
            <View  style={styles.footerContainer}>
              <View>
                <Text style={styles.time}>Daily</Text>
                <Text style={styles.price}>K250</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Checkout')} style={styles.buttonContainer}>
                <Text style={styles.textColor}>Rent Now</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.cardManager}>
            <Text>Porsche Cayman </Text>
            <View>
            <Image source={require('../../../assets/images/homeScreen/Car-hire.png')} style={styles.imageContainer}/>
            </View>
            <View  style={styles.footerContainer}>
              <View>
                <Text style={styles.time}>Daily</Text>
                <Text style={styles.price}>K250</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Checkout')} style={styles.buttonContainer}>
                <Text style={styles.textColor}>Rent Now</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.cardManager}>
            <Text>Porsche Cayman </Text>
            <View>
            <Image source={require('../../../assets/images/homeScreen/Car-hire.png')} style={styles.imageContainer}/>
            </View>
            <View  style={styles.footerContainer}>
              <View>
                <Text style={styles.time}>Daily</Text>
                <Text style={styles.price}>K250</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Checkout')} style={styles.buttonContainer}>
                <Text style={styles.textColor}>Rent Now</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.cardManager}>
            <Text>Porsche Cayman </Text>
            <View>
            <Image source={require('../../../assets/images/homeScreen/Car-hire.png')} style={styles.imageContainer}/>
            </View>
            <View  style={styles.footerContainer}>
              <View>
                <Text style={styles.time}>Daily</Text>
                <Text style={styles.price}>K250</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Checkout')} style={styles.buttonContainer}>
                <Text style={styles.textColor}>Rent Now</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.cardManager}>
            <Text>Porsche Cayman </Text>
            <View>
            <Image source={require('../../../assets/images/homeScreen/Car-hire.png')} style={styles.imageContainer}/>
            </View>
            <View  style={styles.footerContainer}>
              <View>
                <Text style={styles.time}>Daily</Text>
                <Text style={styles.price}>K250</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Checkout')} style={styles.buttonContainer}>
                <Text style={styles.textColor}>Rent Now</Text>
              </TouchableOpacity>
            </View>
          </View> */}
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: '#f5f5f5',
    margin: 10,
  },

  cardLeadManager: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  cardManager: {
    flexBasis: '42%',
    backgroundColor: '#CCC9C9',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },

  imageContainer: {
    width: 150,
    height: 120,
    
  },

  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  buttonContainer: {
    backgroundColor: '#0034BF',
    margin: 4,
    height: 25,
    textAlign: 'center',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
  },

  textColor: {
    color: '#ffffff'
  },

  time: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  price: {
    fontSize: 14,
    fontWeight: 'bold'
  },
})
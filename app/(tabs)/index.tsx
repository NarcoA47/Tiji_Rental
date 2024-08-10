import Naviagtion, { MainNavigation } from '@/components/navigation/topNavigation';
import { StyleSheet, Platform, View, Text, SafeAreaView } from 'react-native';
import Carausel from '../components/home/popular';
import Login from '../screens/loginScreen';

export default function HomeScreen() {
  return (
      <SafeAreaView>
        <View>
          <Login/>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

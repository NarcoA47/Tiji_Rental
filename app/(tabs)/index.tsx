import Naviagtion, { MainNavigation } from '@/components/navigation/topNavigation';
import { StyleSheet, Platform, View, Text, SafeAreaView } from 'react-native';




export default function HomeScreen() {
  return (
      <SafeAreaView>
        <View>
          <MainNavigation/>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

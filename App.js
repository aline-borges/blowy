import * as React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';  
import { LinearGradient } from 'expo-linear-gradient';

import Search from './src/screens/search/index';

const App = () => {
  return (
   <View style={ styles.container }>
     <Search />
   </View>
  );
}

const styles = StyleSheet.create({
  container:  {
    flex: 1,
    width: '100%',
  }
});


export default App


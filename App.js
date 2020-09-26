import * as React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';  
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';

import Search from './src/screens/search/index';
import Location from './src/screens/location/index';
import LocationList from './src/screens/locationsList/index';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LocationList">
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="LocationList" component={LocationList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

import * as React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';  
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Search from './src/screens/search/index';
import Location from './src/screens/location/index';
import LocationList from './src/screens/locationsList/index';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Search':
                iconName = 'search';
                break;
              case 'LocationList':
                iconName = 'list';
                break;
              case 'Location':
                iconName = 'map-pin';
                break;
            }

            return <Feather name={iconName} size={size} color={color} />;
          },
        })}
          tabBarOptions={{
            activeTintColor: '#fefefe',
            inactiveTintColor: '#fefefe88',
            showLabel: false,
            style: {
              backgroundColor:'transparent',
              borderTopWidth: 0,
              position: 'absolute',
              elevation: 0
            }
        }}
      >
        <Tab.Screen name="Search" component={Search} />
				<Tab.Screen name="Location" component={Location} />
				<Tab.Screen name="LocationList" component={LocationList} />
      </Tab.Navigator> 
    </NavigationContainer>
  );
}

export default App

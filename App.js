import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Search from './src/screens/Search';
import Location from './src/screens/Location';
import Locations from './src/screens/Locations';

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    'Montserrat-Thin': require('./assets/fonts/montserrat/Montserrat-Thin.ttf'),
    'Montserrat-ExtraLight': require('./assets/fonts/montserrat/Montserrat-ExtraLight.ttf'),
    'Montserrat-Regular': require('./assets/fonts/montserrat/Montserrat-Regular.ttf'),
    'Montserrat-Medium': require('./assets/fonts/montserrat/Montserrat-Medium.ttf'),
    'Montserrat-Bold': require('./assets/fonts/montserrat/Montserrat-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Locations">
          <Stack.Screen
            name="Locations"
            component={Locations}
            options={{
              header: () => null 
            }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#2EA6CD',
                height: 70,
              },
              headerTintColor: '#FFF'
            }}
          />
          <Stack.Screen
            name="Location"
            component={Location}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: 'transparent',
                height: 70,
              },
              headerTintColor: '#FFFFFF'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
};

export default App;

import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import { Feather } from '@expo/vector-icons';

const LocationList = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    'Montserrat-Thin': require('../../../assets/fonts/montserrat/Montserrat-Thin.ttf'),
    'Montserrat-ExtraLight': require('../../../assets/fonts/montserrat/Montserrat-ExtraLight.ttf'),
    'Montserrat-Regular': require('../../../assets/fonts/montserrat/Montserrat-Regular.ttf'),
    'Montserrat-Medium': require('../../../assets/fonts/montserrat/Montserrat-Medium.ttf'),
    'Montserrat-Bold': require('../../../assets/fonts/montserrat/Montserrat-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } 
  else {
    return (
      <LinearGradient 
      colors={['#2EA6CD', '#285292']}
      style={ styles.container }
      >
        <View style={ styles.containerGeneral }>
          <View style={ styles.containerRow }>
            <View style={ styles.container }>
              <Text style={ styles.city }>Rio de Janeiro</Text>
              <Text style={ styles.time }>04:42</Text>
            </View>
            <Text style={ styles.temperature }>19°</Text>
          </View>
          <View style={ styles.containerRow }>
            <View style={ styles.container }>
              <Text style={ styles.city }>Tóquio</Text>
              <Text style={ styles.time }>16:42</Text>
            </View>
            <Text style={ styles.temperature }>22°</Text>
          </View>
          <View style={ styles.containerRow }>
            <View style={ styles.container }>
              <Text style={ styles.city }>Vancouver</Text>
              <Text style={ styles.time }>00:42</Text>
            </View>
            <Text style={ styles.temperature }>16°</Text>
          </View>
          <TouchableOpacity
          onPress={ () => navigation.navigate('Search')}
          >
            <Feather name="plus-circle" style={ styles.icon } />
          </TouchableOpacity>
        </View>      
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container:  {
    flex: 1,
  },
  containerGeneral:  {
    flex: 1,
    paddingTop: 25
  },
  containerRow: {
    flexDirection: 'row',
    paddingTop: 25,
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderColor: '#fefefe',
    marginLeft: 15,
    marginRight: 15
  },
  city: {
    color: '#fefefe',
    fontSize: 28,
    fontFamily: "Montserrat-Bold"
  },
  time: {
    color: '#fefefe',
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    letterSpacing: 10,
    marginTop: 10
  },
  temperature: {
    color: '#fefefe',
    fontSize: 48,
    fontFamily: "Montserrat-Regular",
  },
  icon: {
    fontSize: 36,
    color: '#fefefe',
    textAlign: 'center',
    marginTop: 20
  }
});

export default LocationList 

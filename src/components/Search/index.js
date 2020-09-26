import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import { Feather } from '@expo/vector-icons';

import OpenWeather from '../../services/apis/openWeather/index';

const Search = ({ navigation }) => {
  const [value, onChangeText] = useState('');

  const handleSubmit = () => {
    OpenWeather(value)
  }

  const handleButtonPress = () => {
    OpenWeather(value)
    return  navigation.navigate('Location')
  }

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
        <View style={ styles.container }>
          <Image 
          source={require('../../../assets/icons/research/map.png')}
          style={ styles.mapIcon }
          />
          <Text style={ styles.title }>Digite a cidade, o CEP ou o aeroporto</Text>
          <View style={ styles.containerRow }>
            <Feather name="search" style={ styles.searchIcon } />
            <TextInput 
            style={ styles.input }
            autoCompleteType ='street-address'
            placeholder="Digite o local"
            placeholderTextColor="#fefefe77"
            onChangeText={text => onChangeText(text)}
            onSubmitEditing={handleSubmit}
            value={value}
             />
          </View>
          <TouchableOpacity 
          style={ styles.button }
          onPress={handleButtonPress}
          >
            <Text style={ styles.textButton}>Buscar</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container:  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerRow: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderColor: '#fefefe', 
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  title: {
    color: '#fefefe',
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
    marginBottom: 5
  },
  input: {
    height: 40,
    width: 280,
    color: '#fefefe',
    fontSize: 18,
    fontFamily: 'Montserrat-Regular'
  },
  searchIcon: {
    fontSize: 18,
    marginTop: 10,
    marginRight: 20,
    color: '#fefefe'
  },
  mapIcon: {
    marginBottom: 20,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#E01972',
    width: 180,
    padding: 10,
    marginTop: 10
  },
  textButton: {
    fontFamily: 'Montserrat-Regular',
    color: '#fefefe',
    textAlign: 'center',
    fontSize: 16,
  }
});

export default Search 

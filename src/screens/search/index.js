import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OpenWeather from '../../services/apis/openWeather/index';

const Search = ({ navegation }) => {
  const [place, setPlace] = useState("");

  const handleSubmit = () => OpenWeather(place)

  return (
    <LinearGradient 
        colors={['#2EA6CD', '#285292']}
        style={ styles.container }
        >      
      <View style={ styles.container }>
        <Image 
        source={require("../../../assets/icons/research/map.png")} 
        style={ styles.logo }
        />
        <Text style={ styles.title }>Digite a cidade, o CEP ou o aeroporto</Text>
        <View style={ styles.containerRow }>
          <Image 
          source={require("../../../assets/icons/research/search.png")}
          style={ styles.searchLogo }
          />
          <TextInput 
          style={ styles.input }
          autoCompleteType ='street-address'
          placeholder="Digite o local"
          placeholderTextColor="#fefefe77"
          onChangeText={place => setPlace(place)}
          onSubmitEditing={handleSubmit}
           />
        </View>
        <TouchableOpacity 
        style={ styles.button }
        onPress={handleSubmit}
        onPress={() => navigation.navigate('Location')}
        >
          <Text style={ styles.textButton}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
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
    marginBottom: 10
  },
  logo: {
    resizeMode: "cover",
    height: 50,
    width: 50,
    marginBottom: 10
  },
  title: {
    color: '#fefefe',
    fontSize: 20
  },
  input: {
    height: 40,
    width: 250,
    color: '#fefefe',
    borderColor: '#fefefe', 
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    fontSize: 20
  },
  searchLogo: {
    resizeMode: "cover",
    height: 20,
    width: 20,
    marginTop: 10,
    marginRight: 10
  },
  button: {
    backgroundColor: '#E01972',
    width: 180,
    padding: 10,
    marginTop: 10
  },
  textButton: {
    color: '#fefefe',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600'
  }
});

export default Search 

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-community/async-storage';

import OpenWeather, { getOneCall } from '../../services/apis/openWeather';

const Search = ({ navigation }) => {
  const [query, setQuery] = useState('');

  const saveData = async (name) => {
    const cities = JSON.parse(await AsyncStorage.getItem("locationData")) || [];
    const cityName = name.toLowerCase()
    if (cities.includes(cityName)) return;
    const locations = [...cities, cityName];
    AsyncStorage.setItem("locationData", JSON.stringify(locations));
  }

  const handleSubmit = async () => {
    const data = await OpenWeather(query);
    if (data.cod === 200) {
      const data2 = await getOneCall(data.coord.lat, data.coord.lon);
      const datas = {data: data, data2: data2}
      saveData(data.name);
      navigation.navigate('Locations', { cityData: datas });
    }
  };

  return (
    <LinearGradient colors={['#2EA6CD', '#285292']} style={styles.container}>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/icons/research/map.png')}
            style={styles.mapIcon}
          />
          <Text style={styles.title}>
            Digite a cidade, o CEP ou o aeroporto
          </Text>
          <View style={styles.containerRow}>
            <Feather name="search" style={styles.searchIcon} />
            <TextInput
              style={styles.input}
              autoCompleteType="street-address"
              placeholder="Digite o local"
              placeholderTextColor="#fefefe77"
              onChangeText={(text) => setQuery(text)}
              onSubmitEditing={handleSubmit}
              value={query}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.textButton}>Buscar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
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
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: 280,
    color: '#fefefe',
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
  },
  searchIcon: {
    fontSize: 18,
    marginTop: 10,
    marginRight: 20,
    color: '#fefefe',
  },
  mapIcon: {
    marginBottom: 20,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#E01972',
    width: 180,
    padding: 10,
    marginTop: 10,
  },
  textButton: {
    fontFamily: 'Montserrat-Regular',
    color: '#fefefe',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Search;

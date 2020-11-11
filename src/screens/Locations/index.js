import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Localization } from 'expo';

import OpenWeather, { getOneCall } from '../../services/apis/openWeather';

const Locations = ({ navigation }) => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    getCities();
  }, []);
  
  const getCities = async () => {
    setLoading(true);
    
    const cities = JSON.parse(await AsyncStorage.getItem("locationData")) || [];
    
    const locations = [];

    for (let city of cities) {
      const response = await OpenWeather(city)
      const response2 = await getOneCall(response.coord.lat, response.coord.lon);
      const timezone = response2.timezone;
      const time = new Date().toLocaleTimeString("pt-BR", {timeZone: timezone}).split(':');
      const hour = `${time[0]}:${time[1]}`;
      const datas = {data: response, data2: response2}
      const location = {
        data: response,
        data2: response2,
        hour: hour
      }
      locations.push(location);
    }

    setLocations(locations);
    console.log(locations)
    setLoading(false)
  };

  const removeItem = async (item) => {
    const cities = JSON.parse(await AsyncStorage.getItem("locationData"));

    const city = item.toLowerCase();
    
    const newCities = cities.filter(city => city.toLowerCase() !== item.toLowerCase());
      
    const locations = [...newCities];
    AsyncStorage.setItem("locationData", JSON.stringify(locations));
  }

  const renderLocation = location => {
    return (
      <TouchableOpacity  
      key={location.data.id}
      onPress={() => goToLocation(location)}>
        <View style={styles.containerRow}>
          <View style={styles.container}>
            <Text style={styles.city}>{location.data.name}</Text>
            <Text style={styles.time}>{location.hour}</Text>
          </View>
          <Text style={styles.temperature}>
            {parseInt(location.data.main.temp)}°
            <TouchableOpacity
            onPress={() => removeItem(location.data.name)}
            >
              <Feather name="trash-2" style={styles.trash} />
            </TouchableOpacity>
          </Text>
        </View>
      </TouchableOpacity>
  );
  };

  const goToLocation = (data) => {
    navigation.navigate('Location', { cityData: data })
  };

  return (
    <LinearGradient colors={['#2EA6CD', '#285292']} style={styles.container}>
      <ScrollView style={styles.containerGeneral}>
        <SafeAreaView>
          {locations.map(location => renderLocation(location))}
          {loading && (
            <Text style={styles.loading}>Carregando..</Text>
          )}
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Feather name="plus-circle" style={styles.icon} />
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerGeneral: {
    flex: 1,
    paddingTop: 25,
  },
  rightActions: {
    backgroundColor: '#FF3B30',
    justifyContent: 'center',
  },
  actionText: {
    fontSize: 16,
    color: '#FEFEFE',
    padding: 20
  },
  containerRow: {
    flexDirection: 'row',
    paddingTop: 25,
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderColor: '#fefefe',
    marginLeft: 15,
    marginRight: 15,
  },
  city: {
    color: '#fefefe',
    fontSize: 28,
    fontFamily: 'Montserrat-Bold',
  },
  time: {
    color: '#fefefe',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    letterSpacing: 10,
    marginTop: 10,
  },
  loading: {
    color: '#fefefe',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    letterSpacing: 10,
    textAlign: 'center',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  temperature: {
    color: '#fefefe',
    fontSize: 48,
    fontFamily: 'Montserrat-Regular',
  },
  icon: {
    fontSize: 36,
    color: '#fefefe',
    textAlign: 'center',
    marginTop: 20,
  },
  trash: {
    fontSize: 18,
    color: '#fefefe',
    marginLeft: 5,
  }
});

export default Locations;

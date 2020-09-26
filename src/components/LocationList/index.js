import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LocationList = () => {
  return (
    <LinearGradient 
        colors={['#2EA6CD', '#285292']}
        style={ styles.container }
        >      
      <View style={ styles.container }>
        <Text style={ styles.title }>Rio de Janeiro</Text>
        <Text style={ styles.title }>Santiago</Text>
        <Text style={ styles.title }>Vancouver</Text>
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
  title: {
    color: '#fefefe',
    fontSize: 20
  }
});

export default LocationList 

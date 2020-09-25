import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, SafeAreaView, FlatList, ActivityIndicator, ImageBackground } from 'react-native';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';  
import { LinearGradient } from 'expo-linear-gradient';

const Location = () => {  
  return (   
    <LinearGradient 
    colors={['#2EA6CD', '#285292']}
    style={ styles.container }
    >      
    <View style={ styles.container } han>
      <StatusBar style="light-content" /> 
        <Text style={ styles.city } >Rio de Janeiro</Text>
        <Text style={ styles.temperature }>20°</Text>
        <Text style={ styles.minMaxTemperature }>19°/22°</Text>
        <Text style={ styles.dayOfWeek }>Sexta-Feira</Text>
    </View>
  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:  {
    flex: 1,
    alignItems: 'center',
    paddingTop: 80,
  },
  city: {
    color: '#fefefe',
    fontSize: 36,
    fontWeight: '700'
  },
  temperature: {
    color: '#fefefe',
    fontSize: 36,
    fontWeight: '200'
  },
  minMaxTemperature: {
    color: '#fefefe',
    fontSize: 16,
  },
  dayOfWeek: {
    color: '#fefefe77',
    fontSize: 24,
    letterSpacing: 15
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
});

export default Location 

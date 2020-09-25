import * as React from 'react';
import { StyleSheet, Text, TextInput, View, Image, SafeAreaView, FlatList, ActivityIndicator, } from 'react-native';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';  
import { LinearGradient } from 'expo-linear-gradient';

const Search = () => {
  return (
    <LinearGradient 
        colors={['#2EA6CD', '#285292']}
        style={ styles.container }
        >      
      <View style={ styles.container } onSubmit={(e) => handleSubmit(e)}>
      <StatusBar style="light-content" />  
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
          placeholder="Buscar"
          placeholderTextColor="#fefefe77"
           />
        </View>
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
    marginTop: 10
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
  }
});

export default Search 

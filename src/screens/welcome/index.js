import * as React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';  
import { LinearGradient } from 'expo-linear-gradient';

const Welcome = () => {
  return (
    <LinearGradient 
        colors={['#2EA6CD', '#285292']}
        style={ styles.container }
        >      
      <SafeAreaView style={ styles.container }> 
        <View>
        <StatusBar style="light" />  
          <Image
          style={ styles.image }
              source={require("./assets/logo.png")}
            />
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: "cover",
    height: 132,
    width: 182,
    margin: 'auto',
  }
});

export default Welcome 

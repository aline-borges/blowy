import * as React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';  
import { LinearGradient } from 'expo-linear-gradient';

import Welcome from './src/screens/welcome/index';

export default function App() {
  return (
   <View>
     <Welcome />
   </View>
  );
}
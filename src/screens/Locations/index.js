import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Locations = ({ navigation }) => {
  return (
    <LinearGradient colors={['#2EA6CD', '#285292']} style={styles.container}>
      <ScrollView style={styles.containerGeneral}>
        <SafeAreaView>
          <View style={styles.containerRow}>
            <View style={styles.container}>
              <Text style={styles.city}>Rio de Janeiro</Text>
              <Text style={styles.time}>04:42</Text>
            </View>
            <Text style={styles.temperature}>19°</Text>
          </View>
          <View style={styles.containerRow}>
            <View style={styles.container}>
              <Text style={styles.city}>Tóquio</Text>
              <Text style={styles.time}>16:42</Text>
            </View>
            <Text style={styles.temperature}>22°</Text>
          </View>
          <View style={styles.containerRow}>
            <View style={styles.container}>
              <Text style={styles.city}>Vancouver</Text>
              <Text style={styles.time}>00:42</Text>
            </View>
            <Text style={styles.temperature}>16°</Text>
          </View>
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
});

export default Locations;

import * as React from 'react';
import { StyleSheet, Text, TextInput, View, Image, ActivityIndicator, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

const Location = () => {  
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
      <ImageBackground source={ require('../../../assets/images/weather/background/night/rain.png')} style={styles.image}>
        <View style={ styles.container }>
          <Text style={ styles.city } >Rio de Janeiro</Text>
          <Text style={ styles.temperature }>20°</Text>
          <View style={ styles.containerRow }>
            <Text style={ styles.minTemperature }>19°/</Text>
            <Text style={ styles.maxTemperature }>22°</Text>
          </View>
          <Text style={ styles.dayOfWeek }>Sexta-Feira</Text>
          <View style={ styles.containerTemperaturesRow }>
            <View style={ styles.containerTemperature }>
              <Text style={ styles.temperatureNowTitle}>Agora</Text>
              <View style={ styles.containerTemperatureRow }>
                <Image 
                source={require("../../../assets/icons/weather/day/rain.png")} 
                style={ styles.weatherIcon }
                />
                <Text style={ styles.temperatureNow}>22°</Text>
              </View>
            </View>
            <View style={ styles.containerTemperature }>
              <Text style={ styles.temperatureRestOfTheDayTitle}>05h</Text>
              <View style={ styles.containerTemperatureRow }>
                <Image 
                source={require("../../../assets/icons/weather/day/rain.png")} 
                style={ styles.weatherIcon }
                />
                <Text style={ styles.temperatureRestOfTheDay}>22°</Text>
              </View>
            </View>
            <View style={ styles.containerTemperature }>
              <Text style={ styles.temperatureRestOfTheDayTitle}>06h</Text>
              <View style={ styles.containerTemperatureRow }>
                <Image 
                source={require("../../../assets/icons/weather/day/rain.png")} 
                style={ styles.weatherIcon }
                />
                <Text style={ styles.temperatureRestOfTheDay}>22°</Text>
              </View>
            </View>
            <View style={ styles.containerTemperature }>
              <Text style={ styles.temperatureRestOfTheDayTitle}>07h</Text>
              <View style={ styles.containerTemperatureRow }>
                <Image 
                source={require("../../../assets/icons/weather/day/rain.png")} 
                style={ styles.weatherIcon }
                />
                <Text style={ styles.temperatureRestOfTheDay}>22°</Text>
              </View>
            </View>
          </View>
          <View style={ styles.containerDaysOfWeek}>
            <View style={ styles.containerDaysOfWeekRow}>
              <Text style={ styles.dayOfWeekName}>Sábado</Text>
              <Image 
                source={require("../../../assets/icons/weather/day/sun.png")} 
                style={ styles.weatherIconDayOfWeek }
                />
                <View style={ styles.containerMinMaxRow }>
                  <Text style={ styles.minTemperature }>19°/</Text>
                  <Text style={ styles.maxTemperature }>22°</Text>
                </View>
            </View>
            <View style={ styles.containerDaysOfWeekRow}>
              <Text style={ styles.dayOfWeekName}>Domingo</Text>
              <Image 
                source={require("../../../assets/icons/weather/day/sun.png")} 
                style={ styles.weatherIconDayOfWeek }
                />
                <View style={ styles.containerMinMaxRow }>
                  <Text style={ styles.minTemperature }>19°/</Text>
                  <Text style={ styles.maxTemperature }>22°</Text>
                </View>
            </View>
            <View style={ styles.containerDaysOfWeekRow}>
              <Text style={ styles.dayOfWeekName}>Segunda-Feira</Text>
              <Image 
                source={require("../../../assets/icons/weather/day/sun.png")} 
                style={ styles.weatherIconDayOfWeek }
                />
                <View style={ styles.containerMinMaxRow }>
                  <Text style={ styles.minTemperature }>19°/</Text>
                  <Text style={ styles.maxTemperature }>22°</Text>
                </View>
            </View>
            <View style={ styles.containerDaysOfWeekRow}>
              <Text style={ styles.dayOfWeekName}>Terça-Feira</Text>
              <Image 
                source={require("../../../assets/icons/weather/day/sun.png")} 
                style={ styles.weatherIconDayOfWeek }
                />
                <View style={ styles.containerMinMaxRow }>
                  <Text style={ styles.minTemperature }>19°/</Text>
                  <Text style={ styles.maxTemperature }>22°</Text>
                </View>
            </View>
            <View style={ styles.containerDaysOfWeekRow}>
              <Text style={ styles.dayOfWeekName}>Quarta-feira</Text>
              <Image 
                source={require("../../../assets/icons/weather/day/sun.png")} 
                style={ styles.weatherIconDayOfWeek }
                />
                <View style={ styles.containerMinMaxRow }>
                  <Text style={ styles.minTemperature }>19°/</Text>
                  <Text style={ styles.maxTemperature }>22°</Text>
                </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container:  {
    flex: 1,
    alignItems: 'center',
    paddingTop: 35,
  },
  containerDaysOfWeek:  {
    flex: 1,
    width: 350,
  },
  containerTemperature:  {
    flex: 1,
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#fefefe'
  },
  containerTemperatureRow: {
    flexDirection: 'row'
  },
  containerTemperaturesRow: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 30
  },
  containerDaysOfWeekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  containerMinMaxRow: {
    flexDirection: 'row'
  },
  containerRow: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  city: {
    color: '#fefefe',
    fontSize: 36,
    fontFamily: 'Montserrat-Bold'
  },
  temperature: {
    color: '#fefefe',
    fontSize: 64,
    fontFamily: 'Montserrat-Thin',
    marginLeft: 20
  },
  minTemperature: {
    color: '#fefefe',
    fontSize: 20,
    fontFamily: 'Montserrat-Medium'
  },
  maxTemperature: {
    color: '#fefefe',
    fontSize: 20,
    fontFamily: 'Montserrat-Bold'
  },
  dayOfWeek: {
    color: '#fefefe77',
    fontSize: 24,
    letterSpacing: 20,
    fontFamily: 'Montserrat-Medium'
  },
  weatherIcon: {
    width: 30,
    height: 30,
  },
  weatherIconDayOfWeek: {
    width: 30,
    height: 30,
  },
  temperatureNowTitle: {
    color: '#fefefe',
    fontSize: 14,
    fontFamily: 'Montserrat-Bold'
  },
  dayOfWeekName: {
    color: '#fefefe',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    width: 140
  },
  temperatureNow: {
    color: '#fefefe',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    marginLeft: 5
  },
  temperatureRestOfTheDayTitle: {
    color: '#fefefe',
    fontSize: 14,
    fontFamily: 'Montserrat-Bold'
  },
  temperatureRestOfTheDay: {
    color: '#fefefe',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    marginLeft: 5
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default Location 
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Location = ({ route }) => {
  const { cityData } = route.params;
  const week = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
  const date = new Date();

  const timestampHourNow = new Date(cityData.data2.hourly[0].dt * 1000);
  const timestampOneHourLater = new Date(cityData.data2.hourly[1].dt * 1000);
  const timestampTwoHoursLater = new Date(cityData.data2.hourly[2].dt * 1000);
  const timestampThreeHoursLater = new Date(cityData.data2.hourly[3].dt * 1000);

  const convertUTCDateToLocalDate = (hour) => {
    const gmt3 = hour.getHours();

    return gmt3;
  }

  const hourNow = convertUTCDateToLocalDate(timestampHourNow)
  const oneHourLater = convertUTCDateToLocalDate(timestampOneHourLater);
  const twoHoursLater = convertUTCDateToLocalDate(timestampTwoHoursLater);
  const threeHoursLater = convertUTCDateToLocalDate(timestampThreeHoursLater);

  const backgroundRandom = () => {
    const weather = cityData.data.weather[0].main,
    time = hourNow;
    let background = ''
  
    if((time >= 7) && (time < 16)){
      if(weather === 'Clear') {return background = require('../../../assets/images/weather/background/day/default.png')}
      if(weather === 'Clouds') { return background = require('../../../assets/images/weather/background/day/cloudy.png')}
      if(weather === 'Rain') {return background = require('../../../assets/images/weather/background/day/rain.png')}
      if(weather === 'Thunderstorm') {return background = require('../../../assets/images/weather/background/day/thunder.png')}
      if(weather === 'Snow') {return background = require('../../../assets/images/weather/background/day/snowfall.png')}
    }

    if((time === 6)) {
      return background = require('../../../assets/images/weather/background/sunrise.png');
    }

    if((time === 17)) {
      return background = require('../../../assets/images/weather/background/sunset.png')
    }
  
    if((time >= 18) || (time < 4)){
      if(weather === 'Clear') {return background = require('../../../assets/images/weather/background/night/default.png')}
      if(weather === 'Clouds') {return background = require('../../../assets/images/weather/background/night/cloudy.png')}
      if(weather === 'Rain') {return background = require('../../../assets/images/weather/background/night/rain.png')}
      if(weather === 'Thunderstorm') {return background = require('../../../assets/images/weather/background/night/thunder.png')}
      if(weather === 'Snow') {return background = require('../../../assets/images/weather/background/night/snowfall.png')}

    }
  }

  const temperatures = {
    now: Math.round(cityData.data.main.temp),
    min: Math.round(cityData.data.main.temp_min),
    max: Math.round(cityData.data.main.temp_max)
  }

  const iconCodeNow = cityData.data2.hourly[0].weather[0].icon;
  const iconCodeOneHourLater = cityData.data2.hourly[1].weather[0].icon;
  const iconCodeTwoHoursLater = cityData.data2.hourly[2].weather[0].icon;
  const iconCodeThreeHoursLater = cityData.data2.hourly[3].weather[0].icon;

  const temperatureListDay = {
    now: {
      temperature: Math.round(cityData.data2.hourly[0].temp),
      icon: `https://openweathermap.org/img/wn/${iconCodeNow}@2x.png`
    },
    OneHourLater: {
      temperature: Math.round(cityData.data2.hourly[1].temp),
      icon: `https://openweathermap.org/img/wn/${iconCodeOneHourLater}@2x.png` 
    },
    TwoHoursLater:{
      temperature: Math.round(cityData.data2.hourly[2].temp),
      icon: `https://openweathermap.org/img/wn/${iconCodeTwoHoursLater}@2x.png` 
    }, 
    ThreeHoursLater: {
      temperature: Math.round(cityData.data2.hourly[3].temp),
      icon: `https://openweathermap.org/img/wn/${iconCodeThreeHoursLater}@2x.png` 
    }
  }

  const hourList = {
    OneHourLater: oneHourLater,
    TwoHoursLater: twoHoursLater,
    ThreeHoursLater: threeHoursLater
  }

  const iconCodeToday = cityData.data2.daily[0].weather[0].icon;
  const iconCodeOneMoreDay = cityData.data2.daily[1].weather[0].icon;
  const iconCodeTwoMoreDays = cityData.data2.daily[2].weather[0].icon;
  const iconCodeThreeMoreDays = cityData.data2.daily[3].weather[0].icon;
  const iconCodeFourMoreDays = cityData.data2.daily[4].weather[0].icon;
  const iconCodeFiveMoreDays = cityData.data2.daily[5].weather[0].icon;

  const minMaxTemperatureListOfWeek = {
    today: {
      min: Math.round(cityData.data2.daily[0].temp.min),
      max: Math.round(cityData.data2.daily[0].temp.max),
      icon: `https://openweathermap.org/img/wn/${iconCodeToday}@2x.png`
    },
    oneMoreDay: {
      min: Math.round(cityData.data2.daily[1].temp.min),
      max: Math.round(cityData.data2.daily[1].temp.max),
      icon: `https://openweathermap.org/img/wn/${iconCodeOneMoreDay}@2x.png`
    },
    twoMoreDays: {
      min: Math.round(cityData.data2.daily[2].temp.min),
      max: Math.round(cityData.data2.daily[2].temp.max),
      icon: `https://openweathermap.org/img/wn/${iconCodeTwoMoreDays}@2x.png`
    },
    threeMoreDays: {
      min: Math.round(cityData.data2.daily[3].temp.min),
      max: Math.round(cityData.data2.daily[3].temp.max),
      icon: `https://openweathermap.org/img/wn/${iconCodeThreeMoreDays}@2x.png`
    },
    fourMoreDays: {
      min: Math.round(cityData.data2.daily[4].temp.min),
      max: Math.round(cityData.data2.daily[4].temp.max),
      icon: `https://openweathermap.org/img/wn/${iconCodeFourMoreDays}@2x.png`
    },
    fiveMoreDays: {
      min: Math.round(cityData.data2.daily[5].temp.min),
      max: Math.round(cityData.data2.daily[5].temp.max),
      icon: `https://openweathermap.org/img/wn/${iconCodeFiveMoreDays}@2x.png`
    }
  }

  return (
    <ImageBackground
      source={backgroundRandom()}
      style={styles.image}>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <SafeAreaView>
          <Text style={styles.city}>{cityData.data.name}</Text>
          <Text style={styles.temperature}>{temperatures.now}°</Text>
          <View style={styles.containerRow}>
            <Text style={styles.minTemperature}>{minMaxTemperatureListOfWeek.today.min}°/</Text>
            <Text style={styles.maxTemperature}>{minMaxTemperatureListOfWeek.today.max}°</Text>
          </View>
          <Text style={styles.dayOfWeek}>{week[date.getDay()]}</Text>
          <View style={styles.containerTemperaturesRow}>
            <View style={styles.containerTemperature}>
              <Text style={styles.temperatureNowTitle}>Agora</Text>
              <View style={styles.containerTemperatureRow}>
                <Image
                  source={{
                    uri: temperatureListDay.now.icon,
                  }}
                  style={styles.weatherIcon}
                />
                <Text style={styles.temperatureNow}>{temperatureListDay.now.temperature}°</Text>
              </View>
            </View>
            <View style={styles.containerTemperature}>
              <Text style={styles.temperatureRestOfTheDayTitle}>{hourList.OneHourLater}h</Text>
              <View style={styles.containerTemperatureRow}>
                <Image
                  source={{
                    uri: temperatureListDay.OneHourLater.icon,
                  }}
                  style={styles.weatherIcon}
                />
                <Text style={styles.temperatureRestOfTheDay}>{temperatureListDay.OneHourLater.temperature}°</Text>
              </View>
            </View>
            <View style={styles.containerTemperature}>
              <Text style={styles.temperatureRestOfTheDayTitle}>{hourList.TwoHoursLater}h</Text>
              <View style={styles.containerTemperatureRow}>
                <Image
                  source={{
                    uri: temperatureListDay.TwoHoursLater.icon,
                  }}
                  style={styles.weatherIcon}
                />
                <Text style={styles.temperatureRestOfTheDay}>{temperatureListDay.TwoHoursLater.temperature}°</Text>
              </View>
            </View>
            <View style={styles.containerTemperature}>
              <Text style={styles.temperatureRestOfTheDayTitle}>{hourList.ThreeHoursLater}h</Text>
              <View style={styles.containerTemperatureRow}>
                <Image
                  source={{
                    uri: temperatureListDay.ThreeHoursLater.icon,
                  }}
                  style={styles.weatherIcon}
                />
                <Text style={styles.temperatureRestOfTheDay}>{temperatureListDay.ThreeHoursLater.temperature}°</Text>
              </View>
            </View>
          </View>
          <View style={styles.containerDaysOfWeek}>
            <View style={styles.containerDaysOfWeekRow}>
              <Text style={styles.dayOfWeekName}>{week[date.getDay()+1]}</Text>
              <Image
                source={{
                  uri: minMaxTemperatureListOfWeek.oneMoreDay.icon,
                }}
                style={styles.weatherIconDayOfWeek}
              />
              <View style={styles.containerMinMaxRow}>
                <Text style={styles.minTemperature}>{minMaxTemperatureListOfWeek.oneMoreDay.min}°/</Text>
                <Text style={styles.maxTemperature}>{minMaxTemperatureListOfWeek.oneMoreDay.max}°</Text>
              </View>
            </View>
            <View style={styles.containerDaysOfWeekRow}>
              <Text style={styles.dayOfWeekName}>{week[date.getDay()+2]}</Text>
              <Image
                source={{
                  uri: minMaxTemperatureListOfWeek.twoMoreDays.icon,
                }}
                style={styles.weatherIconDayOfWeek}
              />
              <View style={styles.containerMinMaxRow}>
                <Text style={styles.minTemperature}>{minMaxTemperatureListOfWeek.twoMoreDays.min}°/</Text>
                <Text style={styles.maxTemperature}>{minMaxTemperatureListOfWeek.twoMoreDays.max}°</Text>
              </View>
            </View>
            <View style={styles.containerDaysOfWeekRow}>
              <Text style={styles.dayOfWeekName}>{week[date.getDay()+3]}</Text>
              <Image
                source={{
                  uri: minMaxTemperatureListOfWeek.threeMoreDays.icon,
                }}
                style={styles.weatherIconDayOfWeek}
              />
              <View style={styles.containerMinMaxRow}>
                <Text style={styles.minTemperature}>{minMaxTemperatureListOfWeek.threeMoreDays.min}°/</Text>
                <Text style={styles.maxTemperature}>{minMaxTemperatureListOfWeek.threeMoreDays.max}°</Text>
              </View>
            </View>
            <View style={styles.containerDaysOfWeekRow}>
              <Text style={styles.dayOfWeekName}>{week[date.getDay()+4]}</Text>
              <Image
                source={{
                  uri: minMaxTemperatureListOfWeek.fourMoreDays.icon,
                }}
                style={styles.weatherIconDayOfWeek}
              />
              <View style={styles.containerMinMaxRow}>
              <Text style={styles.minTemperature}>{minMaxTemperatureListOfWeek.fourMoreDays.min}°/</Text>
                <Text style={styles.maxTemperature}>{minMaxTemperatureListOfWeek.fourMoreDays.max}°</Text>
              </View>
            </View>
            <View style={styles.containerDaysOfWeekRow}>
              <Text style={styles.dayOfWeekName}>{week[date.getDay()+5]}</Text>
              <Image
                source={{
                  uri: minMaxTemperatureListOfWeek.fiveMoreDays.icon,
                }}
                style={styles.weatherIconDayOfWeek}
              />
              <View style={styles.containerMinMaxRow}>
                <Text style={styles.minTemperature}>{minMaxTemperatureListOfWeek.fiveMoreDays.min}°/</Text>
                <Text style={styles.maxTemperature}>{minMaxTemperatureListOfWeek.fiveMoreDays.max}°</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55,
  },
  content: {
    alignItems: 'center',
  },
  containerDaysOfWeek: {
    flex: 1,
  },
  containerTemperature: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#fefefe',
  },
  containerTemperatureRow: {
    flexDirection: 'row',
  },
  containerTemperaturesRow: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 30,
  },
  containerDaysOfWeekRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 12,
    paddingBottom: 12,
  },
  containerMinMaxRow: {
    flexDirection: 'row',
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10
  },
  city: {
    color: '#fefefe',
    fontSize: 36,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center'
  },
  temperature: {
    color: '#fefefe',
    fontSize: 64,
    fontFamily: 'Montserrat-Thin',
    marginLeft: 20,
    textAlign: 'center'
  },
  minTemperature: {
    color: '#fefefe',
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center'
  },
  maxTemperature: {
    color: '#fefefe',
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center'
  },
  dayOfWeek: {
    color: '#fefefe77',
    fontSize: 18,
    letterSpacing: 20,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center'
  },
  weatherIcon: {
    width: 30
  },
  weatherIconDayOfWeek: {
    width: 35
  },
  temperatureNowTitle: {
    color: '#fefefe',
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
  },
  dayOfWeekName: {
    color: '#fefefe',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    width: 140,
  },
  temperatureNow: {
    color: '#fefefe',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    marginLeft: 5,
  },
  temperatureRestOfTheDayTitle: {
    color: '#fefefe',
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
  },
  temperatureRestOfTheDay: {
    color: '#fefefe',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    marginLeft: 5,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    position: 'absolute',
    top: -70,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Location;

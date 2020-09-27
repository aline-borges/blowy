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
    const newDate = new Date(hour.getTime() - hour.getTimezoneOffset()*60*1000);
    const gmt3 = newDate.getHours() - 3

    if(gmt3 < 10){return `0${gmt3}h`}else{return `${gmt3}h`} 
  }

  const hourNow = convertUTCDateToLocalDate(timestampHourNow)
  const oneHourLater = convertUTCDateToLocalDate(timestampOneHourLater);
  const twoHoursLater = convertUTCDateToLocalDate(timestampTwoHoursLater);
  const threeHoursLater = convertUTCDateToLocalDate(timestampThreeHoursLater);

  const backgroundRandom = () => {
    const daySunny = '../../../assets/images/weather/background/day/default.png',
    dayCloudy = '../../../assets/images/weather/background/day/cloudy.png',
    dayRain = '../../../assets/images/weather/background/day/rain.png',
    dayThunder = '../../../assets/images/weather/background/day/thunder.png',
    daySnow = '../../../assets/images/weather/background/day/snowfall.png',
    nightSunny = '../../../assets/images/weather/background/night/default.png',
    nightCloudy = '../../../assets/images/weather/background/night/cloudy.png',
    nightRain = '../../../assets/images/weather/background/night/rain.png',
    nightThunder = '../../../assets/images/weather/background/night/thunder.png',
    nightSnow = '../../../assets/images/weather/background/night/snowfall.png',
    sunset = '../../../assets/images/weather/background/sunset.png',
    sunrise = '../../../assets/images/weather/background/sunrise.png',
    weather = cityData.data2.daily[0].weather[0].main,
    time = hourNow;
    let background = ''
  
    if((time >= 5) && (time < 18)){
      if(weather === 'Clear') {return background = daySunny}
      if(weather === 'Clouds') {return background = dayCloudy}
      if(weather === 'Rain') {return background = dayRain}
      if(weather === 'Thunderstorm') {return background = dayThunder}
      if(weather === 'Snow') {return background = daySnow}
    }
  
    if((time >= 18) && (time < 4)){
      if(weather === 'Clear') {return background = nightSunny}
      if(weather === 'Clouds') {return background = nightCloudy}
      if(weather === 'Rain') {return background = nightRain}
      if(weather === 'Thunderstorm') {return background = nightThunder}
      if(weather === 'Snow') {return background = nightSnow}
    }
  }

  const temperatures = {
    now: Math.round(cityData.data.main.temp),
    min: Math.round(cityData.data.main.temp_min),
    max: Math.round(cityData.data.main.temp_max)
  }

  const temperatureListDay = {
    now: Math.round(cityData.data2.hourly[0].temp),
    OneHourLater: Math.round(cityData.data2.hourly[1].temp),
    TwoHoursLater: Math.round(cityData.data2.hourly[2].temp),
    ThreeHoursLater: Math.round(cityData.data2.hourly[3].temp)
  }

  const hourList = {
    OneHourLater: oneHourLater,
    TwoHoursLater: twoHoursLater,
    ThreeHoursLater: threeHoursLater
  }

  const minMaxTemperatureListOfWeek = {
    today: {
      min: Math.round(cityData.data2.daily[0].temp.min),
      max: Math.round(cityData.data2.daily[0].temp.max),
    },
    oneMoreDay: {
      min: Math.round(cityData.data2.daily[1].temp.min),
      max: Math.round(cityData.data2.daily[1].temp.max),
    },
    twoMoreDays: {
      min: Math.round(cityData.data2.daily[2].temp.min),
      max: Math.round(cityData.data2.daily[2].temp.max),
    },
    threeMoreDays: {
      min: Math.round(cityData.data2.daily[3].temp.min),
      max: Math.round(cityData.data2.daily[3].temp.max),
    },
    fourMoreDays: {
      min: Math.round(cityData.data2.daily[4].temp.min),
      max: Math.round(cityData.data2.daily[4].temp.max),
    },
    fiveMoreDays: {
      min: Math.round(cityData.data2.daily[5].temp.min),
      max: Math.round(cityData.data2.daily[5].temp.max),
    }
  }

  const iconsList = {
    sun: 'http://openweathermap.org/img/wn/01d@2x.png',
  }

  return (
    <ImageBackground
      source={require(`../../../assets/images/weather/background/day/default.png`)}
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
                  source={require('../../../assets/icons/weather/day/rain.png')}
                  style={styles.weatherIcon}
                />
                <Text style={styles.temperatureNow}>{temperatureListDay.now}°</Text>
              </View>
            </View>
            <View style={styles.containerTemperature}>
              <Text style={styles.temperatureRestOfTheDayTitle}>{hourList.OneHourLater}</Text>
              <View style={styles.containerTemperatureRow}>
                <Image
                  source={require('../../../assets/icons/weather/day/rain.png')}
                  style={styles.weatherIcon}
                />
                <Text style={styles.temperatureRestOfTheDay}>{temperatureListDay.OneHourLater}°</Text>
              </View>
            </View>
            <View style={styles.containerTemperature}>
              <Text style={styles.temperatureRestOfTheDayTitle}>{hourList.TwoHoursLater}</Text>
              <View style={styles.containerTemperatureRow}>
                <Image
                  source={require('../../../assets/icons/weather/day/rain.png')}
                  style={styles.weatherIcon}
                />
                <Text style={styles.temperatureRestOfTheDay}>{temperatureListDay.TwoHoursLater}°</Text>
              </View>
            </View>
            <View style={styles.containerTemperature}>
              <Text style={styles.temperatureRestOfTheDayTitle}>{hourList.ThreeHoursLater}</Text>
              <View style={styles.containerTemperatureRow}>
                <Image
                  source={require('../../../assets/icons/weather/day/rain.png')}
                  style={styles.weatherIcon}
                />
                <Text style={styles.temperatureRestOfTheDay}>{temperatureListDay.ThreeHoursLater}°</Text>
              </View>
            </View>
          </View>
          <View style={styles.containerDaysOfWeek}>
            <View style={styles.containerDaysOfWeekRow}>
              <Text style={styles.dayOfWeekName}>{week[date.getDay()+1]}</Text>
              <Image
                source={require('../../../assets/icons/weather/day/sun.png')}
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
                source={require('../../../assets/icons/weather/day/sun.png')}
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
                source={require('../../../assets/icons/weather/day/sun.png')}
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
                source={require('../../../assets/icons/weather/day/sun.png')}
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
                source={require('../../../assets/icons/weather/day/sun.png')}
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
    width: 350,
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
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  containerMinMaxRow: {
    flexDirection: 'row',
  },
  containerRow: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 140,
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
    fontSize: 24,
    letterSpacing: 20,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center'
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

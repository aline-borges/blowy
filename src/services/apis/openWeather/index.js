const OpenWeather = async (city) => {
  const key = '994f22749f1064b04949e89019eb50d8';

  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
  const data = await response.json();

  return data;
}

export default OpenWeather

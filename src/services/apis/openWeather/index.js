export const getOneCall = async (lat, lon) => {
  const key = '439d4b804bc8187953eb36d2a8c26a02';
  const response = await fetch(`https://openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
  const data = await response.json()

  return data;
  console.log(data);
}

const OpenWeather = async (city) => {
  const key = '994f22749f1064b04949e89019eb50d8';

  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
  const data = await response.json();

  return data
  console.log(data);
}

export default OpenWeather

import React, { useState } from 'react';

const OpenWeather = async () => {
  const [city, setCity] = useState("");
  const key = '994f22749f1064b04949e89019eb50d8';

  const getAPI = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    const data = await response.json();
  }
}

export default OpenWeather

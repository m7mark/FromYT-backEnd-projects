import axios from 'axios'
import { CONSTANTS_KEY, getKeyValue } from './storage.service.js'

const getIcon = (icon) => {
  switch (icon.slice(0, -1)) {
    case '01':
      return '☀️'
    case '02':
      return '🌤️'
    case '03':
      return '☁️'
    case '04':
      return '☁️'
    case '09':
      return '🌧️'
    case '10':
      return '🌦️'
    case '11':
      return '🌩️'
    case '13':
      return '❄️'
    case '50':
      return '🌫️'
  }
}

const getWeather = async () => {
  const token = await getKeyValue(CONSTANTS_KEY.token)
  if (!token) {
    throw new Error('Empty token, you can add this by flag -t [token]')
  }
  const city = await getKeyValue(CONSTANTS_KEY.city)
  if (!city) {
    throw new Error('Empty city, you can add this by flag -s [city]')
  }
  const { data } = await axios.get(
    'https://api.openweathermap.org/data/2.5/weather',
    {
      params: {
        appid: token,
        q: city,
        units: 'metric',
      },
    }
  )
  return data
}

export { getWeather, getIcon }

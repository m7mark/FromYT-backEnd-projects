#!usr/bin/env node

import { getArgs } from './app/helpers/args.js'
import { getIcon, getWeather } from './app/services/api.service.js'
import {
  printError,
  printHelp,
  printSuccess,
  printWeather,
} from './app/services/log.service.js'
import { CONSTANTS_KEY, saveKeyValue } from './app/services/storage.service.js'

const saveToken = async (token) => {
  if (!token.length) {
    // printError('Input: Empty token')
    return
  }
  try {
    await saveKeyValue(CONSTANTS_KEY.token, token)
    printSuccess('Token saved')
  } catch (e) {
    printError(e.message)
  }
}
const saveCity = async (city) => {
  if (!city.length) {
    // printError('Input: Empty city')
    return
  }
  try {
    await saveKeyValue(CONSTANTS_KEY.city, city)
    printSuccess('City saved')
  } catch (e) {
    printError(e.message)
  }
}

const getForecast = async () => {
  try {
    const weather = await getWeather()
    printWeather(weather, getIcon(weather.weather[0].icon))
  } catch (e) {
    if (e?.response?.status === 404) {
      printError('Server: Invalid city name')
    } else if (e?.response?.status === 401) {
      printError('Server: Invalid token')
    } else {
      printError(e.message)
    }
  }
}

const initCli = async () => {
  const args = getArgs(process.argv)
  if (args.h) {
    return printHelp()
  }
  if (args.t) {
    return saveToken(args.t)
  }
  if (args.s) {
    saveCity(args.s)
  }
  return getForecast()
}

initCli()

import chalk from 'chalk'
import dedent from 'dedent-js'

const printError = (error) => {
  console.log(chalk.bgRed('ERROR') + ' ' + error)
}

const printSuccess = (msg) => {
  console.log(chalk.bgGreen('SUCCESS') + ' ' + msg)
}

const printHelp = () => {
  console.log(
    dedent`

    ${chalk.bgCyan('Help')}
    Whithout params - get weather
    -h: Get help
    -s: [City] set city
    -t: [Token] set token

  `
  )
}

const printWeather = (api, icon) => {
  console.log(
    dedent`

    ${chalk.bgYellow('Weather')} in ${api.name}
    ${icon}  ${api.weather[0].description}
    Temperature: ${api.main.temp} (feels like ${api.main.feels_like})
    Humidity: ${api.main.humidity}%
    Wind speed: ${api.wind.speed} m/s

  `
  )
}

export { printError, printHelp, printSuccess, printWeather }

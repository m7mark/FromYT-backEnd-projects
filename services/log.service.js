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

export { printError, printHelp, printSuccess }

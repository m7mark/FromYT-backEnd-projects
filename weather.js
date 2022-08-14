#!usr/bin/env node

import { getArgs } from './helpers/args.js'
import { printHelp } from './services/log.service.js'

const initCli = () => {
  const args = getArgs(process.argv)
  if (args.h) {
    printHelp()
  }
}

initCli()

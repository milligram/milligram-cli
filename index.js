#!/usr/bin/env node
'use strict'

const fs = require('fs')
const argv = require('rasper')(process.argv.slice(2))
const shelljs = require('shelljs')
const pkg = require('./package.json')

if (argv.v || argv.version) {
  console.log(pkg.version)
  process.exit(0)
}

if (argv.h || argv.help) {
  console.log(`
$ milligram --help

  Usage:

    $ milligram [<directory>] [<options>]

  Options:

    -h, --help              Display help information
    -v, --version           Output version

  Examples:

    $ milligram my_milligram_app # default: milligram_app
`)
  process.exit(0)
}

const directory = argv._[0] || 'milligram_app'

if (fs.existsSync(directory)) {
  console.warn('[warning] This directory already exists.')
  process.exit(1)
}

if (!shelljs.which('git')) {
  console.error('[error] Sorry, this script requires git')
  process.exit(1)
}

shelljs
  .exec(
    `git clone https://github.com/milligram/milligram-starter.git ${directory}`,
  )
  .exec(`rm -rf ${directory}/.* 2> /dev/null`)

process.exit(0)

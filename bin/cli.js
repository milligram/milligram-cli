#!/usr/bin/env node
'use strict'
const cli = require('../src/index')
const help = require('../src/help')
const version = require('../src/version')
const argv = process.argv.slice(2)

if (argv.indexOf('--version') !== -1 || argv.indexOf('-v') !== -1) version.init()
if (argv.indexOf('--help') !== -1 || argv.indexOf('-h') !== -1) help.init()
if (argv.indexOf('init') !== -1 || argv.indexOf('i') !== -1) cli.init(argv)
else help.init()

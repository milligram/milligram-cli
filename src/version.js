'use strict';
const pkg = require('../package.json');

function init () {
	console.log(pkg.version);
	process.exit(1);
}

exports.init = init;

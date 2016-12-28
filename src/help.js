'use strict';

const help = `
$ milligram --help

	Usage:

		$ milligram <command> <directory> [<options>]

	Commands:

		i, init              Initialize a Milligram project

	Options:

		-h, --help              Display help information
		-v, --version           Output version

	Examples:

		$ milligram init new_app
`

function init () {
	console.log(help);
	process.exit(1);
};

exports.init = init;

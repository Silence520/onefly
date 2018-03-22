'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _ = _interopDefault(require('lodash'));
var path = _interopDefault(require('path'));

let config={
	env:"production",
	viewdir: path.join(__dirname, '..','views'),
	staticDir: path.join(__dirname, '..','assets')
};
console.log("production");
{
	let configer={
		port:3000,
	};
	config=_.extend(config,configer);
}


var config$1 = config;

module.exports = config$1;

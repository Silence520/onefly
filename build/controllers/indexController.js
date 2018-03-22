'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _IndexModel = require('../models/IndexModel');

var _IndexModel2 = _interopRequireDefault(_IndexModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const indexController = {
	getindex() {
		return async (ctx, next) => {
			// ctx.body='hello indexController';
			var indexmodel = new _IndexModel2.default();
			var result = await indexmodel.getDate();
			ctx.body = await ctx.render('index', { data: result });
		};
	},
	getjson() {
		return async (ctx, next) => {
			ctx.body = { data: 123 };
		};
	}
};
exports.default = indexController;
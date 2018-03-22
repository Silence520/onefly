'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _indexController = require('./indexController');

var _indexController2 = _interopRequireDefault(_indexController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const controllerInit = {
	getAllRiuters(app, router) {
		app.use(router(_ => {
			_.get('/index', _indexController2.default.getindex());
			_.get('/index/json', _indexController2.default.getjson());
		}));
	}
};
exports.default = controllerInit;
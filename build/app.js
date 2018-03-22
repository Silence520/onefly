'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _log4js = require('log4js');

var _log4js2 = _interopRequireDefault(_log4js);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _errorHandler = require('./middlewares/errorHandler');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

var _controllerInit = require('./controllers/controllerInit');

var _controllerInit2 = _interopRequireDefault(_controllerInit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa2.default();

//swig 配置
app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
  root: _config2.default.viewdir,
  autoescape: true,
  cache: 'memory', // disable, set to false 
  ext: 'html',
  writeBody: false
}));

app.use((0, _koaStatic2.default)(_config2.default.staticDir));
//log 错误处理配置
_log4js2.default.configure({
  appenders: { cheese: { type: 'file', filename: 'logs/yodeng.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});
//log处理
const logger = _log4js2.default.getLogger('cheese');
_errorHandler2.default.error(app, logger);
//router
_controllerInit2.default.getAllRiuters(app, _koaSimpleRouter2.default);

app.listen(_config2.default.port, () => {
  console.log('server is runing...');
});

module.exports = app;
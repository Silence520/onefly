import Koa from'koa';
import log4js from'log4js';
import config from'./config';
import router from'koa-simple-router';
import render from'koa-swig';
import co from'co';
import serve from'koa-static';

import errorHandler from'./middlewares/errorHandler';

import controllerInit from'./controllers/controllerInit';
const app = new Koa();

//swig 配置
app.context.render = co.wrap(render({
  	root: config.viewdir,
	autoescape: true,
  	cache: 'memory', // disable, set to false 
  	ext: 'html',
  	writeBody: false
}));
//配置静态资源文件夹
app.use(serve(config.staticDir));
//log 错误处理配置
log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'logs/yodeng.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});
//log处理
const logger = log4js.getLogger('cheese');
errorHandler.error(app,logger);
//router
controllerInit.getAllRiuters(app,router);



app.listen(config.port,()=>{
	console.log('server is runing...')
});


module.exports= app;
import indexController from './indexController'
const controllerInit={
	getAllRiuters(app,router){
		app.use(router(_ => {
			  _.get('/index',indexController.getindex());
			   _.get('/index/json', indexController.getjson());
		}));
	}
}
export default controllerInit;
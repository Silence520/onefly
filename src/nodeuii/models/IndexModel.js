/**
*@fileOverview 实现index 数据
*@author lihaibo
*@version 1.0
*/
class IndexModel{

	/**
	*IndexModel  类，生成一段异步数据
	*@class 
	*/
	constructor(app){}
	/**
	* 获取具体的API接口数据
	*@returns {Promise} 返回异步数据
	*@example
	*return new Promise
	*getDate()
	*/
	getDate(){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve('hello Actioin ')
			},1000)
		})
	}
}
export default IndexModel;

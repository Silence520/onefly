import IndexModel from '../models/IndexModel'
const indexController ={
	getindex(){
		return async(ctx,next)=>{
			// ctx.body='hello indexController';
			var indexmodel=new IndexModel();
			var result=await indexmodel.getDate();
			ctx.body = await ctx.render('index',{data:result});
		}
	},
	getjson(){
		return async(ctx,next)=>{
			ctx.body={data:123};
		}
	}
}
export default indexController;
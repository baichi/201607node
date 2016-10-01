// 数据库>集合>文档
//加载mongoose模块
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/201607node');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    age: Number
});

//连接上数据库之后可以定义一个模型
//有二个参数 第一个参数是模型的名称 第二个是Schema实例
//模型拥有了操作数据库的能力
var userModel = mongoose.model('User', userSchema);
/**
 * 如果字段多传了会被忽略掉
 * 如果类型不对，会尝试转换成对应的类型，如果转换不成功则报错，保存不进去
 */

/**
 * err 错误对象，如果保存成功则为null,如果保存失败里面存放着失败的原因
 */

/*userModel.create({username:'admin',password:'admin'},function(err,doc){
 if(err){
 console.error(err);
 }else{
 console.log(doc);
 }
 });*/

/**
 * 在整个集合中查找所有的符合条件的json文档，会组成一个数组
 */
/*var username = 'admin';
 var password = 'admin';
 userModel.findOne({username,password},function(err,docs){
 if(err){
 console.error(err);
 }else{
 console.log(docs);
 }
 })*/
//用户表
/**
 * 1. 操作符 $set: 把指定的字段更新一下，其它字段不变
 * 2. $inc increase 把指定的字段在原来基础上加1
 * $inc:{
        age:1
    }
 如果匹配到多条，则只会更新第一条
 如果希望更新匹配到的多条数据，
 */
/*update(condition,updateObj,options,callback){
    //1. 判断 callback是否是undefined 2.
}*/
userModel.update({}, {age:5},{multi:true}, function (err, doc) {//doc更新后的文档对象
    if (err)
        console.error(err);
    else
        console.log(doc);
});

/**
 *   {username:'zhangsan',password:'zhangsan2',age:16}
 *   update 写一个update语句，passowrd zhangsan22 年龄 增加4岁
 *   {username:'zhangsan',password:'zhangsan22',age:20}
 */

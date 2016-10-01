// 数据库>集合>文档
//加载mongoose模块
var mongoose = require('mongoose');
//连接本机的数据库 端口号如果是27017的话可以省略，数据库的名字可以不存在
mongoose.connect('mongodb://localhost:27017/201607node');
//定义一个人的schema 是针对集合的
//定义了对应的集合中文档的属性名和属性的类型
var personSchema = new mongoose.Schema({
    name:String,//姓名属性 类型是字符串
    age:Number, //年龄属性 类型是数字
});

//连接上数据库之后可以定义一个模型
//有二个参数 第一个参数是模型的名称 第二个是Schema实例
//模型拥有了操作数据库的能力
var personModel = mongoose.model('Person',personSchema);
/**
 * 如果字段多传了会被忽略掉
 * 如果类型不对，会尝试转换成对应的类型，如果转换不成功则报错，保存不进去
 */
var zhangsan = {
    name:'张三',//姓名
    age:18,//年龄
    home:'北京'
}
/**
 * err 错误对象，如果保存成功则为null,如果保存失败里面存放着失败的原因
 */
/*
personModel.create(zhangsan,function(err,doc){
  if(err){
      console.error(err);
  }else{
      console.log(doc);
  }
});
*/
/**
 * 在整个集合中查找所有的符合条件的json文档，会组成一个数组
 */
personModel.find({age:18},function(err,docs){
    if(err){
        console.error(err);
    }else{
        console.log(docs);
    }
})
//用户表



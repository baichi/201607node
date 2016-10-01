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
    birthday:Date //生日属性 类型是日期
});

//连接上数据库之后可以定义一个模型
//有二个参数 第一个参数是模型的名称 第二个是Schema实例
//模型拥有了操作数据库的能力
var personModel = mongoose.model('Person',personSchema);

var zhangsan = {
    name:'张三',//姓名
    age:18,//年龄
    birthday:new Date(Date.now()- 60*60*24*365*18) //生日
}
/**
 * err 错误对象，如果保存成功则为null,如果保存失败里面存放着失败的原因
 */
personModel.create(zhangsan,function(err,doc){
  if(err){
      console.error(err);
  }else{
      console.log(doc);
  }
});






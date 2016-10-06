var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/201607node');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    age: Number
});
var userModel = mongoose.model('User', userSchema);

var users = [];
for(var i=1;i<=10;i++){
    users.push({username:`zfpx${i}`,password:`zfpx${i}`,age:i});
}

/*userModel.create(users,function(err,docs){
    console.log(docs);
})*/
/**
 * 如果要显示某个字段用 字段名:1
 * 不要显示某个字段 字段名:0
 * 1和0不能共存
 */
/*userModel.findOne({},{username:1,password:0},function(err,docs){
    console.log(docs);
});*/
//根据ID进行查询
userModel.findById('57ef37c9cf6d381244d05e3c',function(err,doc){
    console.log(doc);
});

/**
 * 10条数据
 *  按年龄从大到小倒序排列，每页3条，查询第二页的数据
 * 一共有多少条
 **/
var pageNum = 2;
var pageSize = 3;
//查询第二页数据

// 2  (2-1)*3=3
// 3  (3-1)*3=6
userModel.find({},null,{limit:3,skip:(pageNum-1)*pageSize,sort:{age:-1}},function (err, docs) {
    console.log(docs)
});
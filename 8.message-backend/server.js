var express = require('express');
var mongoose = require('mongoose');
// 服务实例 > 数据库 > 集合 >文档
mongoose.connect('mongodb://localhost/messages');
var MessageSchema = new mongoose.Schema({
    name:String,//姓名
    content:String,//内容
    createAt:Date//发表时间
});
//定义可以操作数据库的model
var Message = mongoose.model('Message',MessageSchema);
Message.create([
    {name:'张三',content:'今天天气真好，雨好大!',createAt:new Date()},
    {name:'李四',content:'明天天气更好，下冰雹!',createAt:new Date()}
]);
var app = express();
// messages 增加消息 查看消息 删除消息
app.post('/messages',function(req,res){

});
//获取全部消息
app.get('/messages',function(req,res){
    Message.find({}).then(function(messages){
        res.send(messages);
    },function(error){
        res.send(error);
    });
});
//删除消息
app.delete('/messages/:_id',function(req,res){

});


app.listen(3000);
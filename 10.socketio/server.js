var express = require('express');
var path = require('path');
var app = express();

app.get('/',function(req,res){
    res.sendFile(path.resolve('index.html'));
});

//创建一个http服务器，当请求到来的时候执行回调函数
var server = require('http').createServer(app);
//socket.io依赖于http服务
var io = require('socket.io')(server);
//监听客户端连接事件,连接到来的时候会为每个客户端创建一个socket对象，传入函数内执行
io.on('connection',function(socket){
    //socket.send('客户端你好');
    socket.emit('message','客户端你好');
   //监听客户端发过来的消息
   socket.on('message',function(msg){
       console.log(msg);
       socket.send(msg);
   });
});
server.listen(8080,function(){
    console.log('服务器已经在8080端口监听成功');
});

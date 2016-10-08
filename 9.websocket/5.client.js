var Socket = require('ws');
//mongodb://localhost:8080
//创建socket对象的时候就已经开始准备连接了
var socket = new Socket('ws://localhost:8080');
//当连接成功之后会触发open事件，执行回调
socket.on('open',function(){
    console.log('连接已经建立');
});

//当客户端收到服务器的消息之后执行回调
socket.on('message',function(msg){
    console.log(msg);
    socket.send('服务器你好');
});
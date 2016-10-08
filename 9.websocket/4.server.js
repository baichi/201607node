//引入服务构造函数
var Server = require('ws').Server;
//创建一个websocket服务的实例
var server = new Server({port:8080});
//监听客户端的连接，当连接到来的时候执行回调
server.on('connection',function(socket){
    //通过send方法向对方说话
     socket.send('欢迎光临服务器');
    //监听对方的消息 回调函数中的参数就是对方说的话
    //emit
     socket.on('message',function(msg){
        console.log(msg);
        socket.send(msg);
     });
});
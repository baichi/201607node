var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.sendFile('./ajax.html',{root:__dirname});
});
app.get('/ajax',function(req,res){
    res.send({name:'zfpx',age:8});
});
app.listen(9090);
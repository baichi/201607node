/**
 * fs.readFile 使用异步读取文件API
 */
var fs = require('fs');
function readFile(filename){
    //resolve,reject 两个方法不需要自己实现直接用就可以了
 return new Promise(function(resolve,reject){
     fs.readFile(filename,'utf8',function(err,data){
         if(err){
             reject(err);
         }else{
             resolve(data);
         }
     })
 });
}

readFile('1.txt').then(function(data){
    console.log(data)
},function(err){
    console.error(err);
});
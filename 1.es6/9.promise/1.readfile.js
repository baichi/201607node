/**
 * 1.txt 2.txt
 * 2.txt 3.txt
 * 3.txt 3
 */
// 在全局对象下有一个Promise
//创建一个promise实例,需要传入一个函数作为参数
//有两个形参
//resolve 也是一个函数，调用它则把promise状态从初始态变成成功态
//reject  也是一个函数，调用它则把promise状态从初始态变成失败态
var promise = new Promise(function(resolve,reject){
    resolve('成功');
    reject('失败');
   /* //函数内部开始执行自己的任务 比如说做家具
   setTimeout(function(){
       var num = Math.random();//得到一个随机数
       if(num>0.5){
           //如果大于0.5，则调用resolve方法把这个promise变成成功态
           resolve(num);
       }else{
           //如果小于等于0.5，则调用reject方法把这个promise变成失败态
           reject('小于等于0.5');
       }
   },1000);*/
});
/**
 * 通过then方法可以注册成功和失败的回调函数
 * 当状态变成成功态的时候调用成功的回调,并把成功的结果传给成功回调函数
 * 当状态变成失败态的时候调用失败态的回调,并把失败的原因传给失败回调
 */
promise.then(function(num){
    console.log(num);
},function(reason){
    console.error(reason);
})
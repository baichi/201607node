var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
/**
 * gulp
 * 第一个参数 是任务名
 * 第二个参数是任务的定义
 * gulp 任务名 就可以执行这个任务了
 */
gulp.task('watch',function(){
    // 观察文件的变化 ，当他发生变化之后执行回调函数
    // 增加 修改 删除
    gulp.watch('./src/*.html',function(event){
        console.log(event.type);//变化的类型 changed deleted
        console.log(event.path);//哪个文件发生了变化
    })
});
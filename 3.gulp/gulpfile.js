var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
/**
 * gulp
 * 第一个参数 是任务名
 * 第二个参数是任务的定义
 * gulp 任务名 就可以执行这个任务了
 * * 匹配任意字符，但不能匹配路径分隔符
 * ** 匹配任意字符，包括路径分隔符
 */
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
gulp.task('css', function () {
    //先获取要编译的less文件
    return gulp.src('./src/less/**/*.less')
        .pipe(less())//进行编译
        .pipe(concat('all.css'))//所有的css合并成all.css
        .pipe(gulp.dest('./build/css'))//保存到css目录
        .pipe(cleanCSS({compatibility: 'ie8'}))//压缩all.css
        .pipe(rename(function (path) {//重命名
            path.basename += ".min";
        }))
        .pipe(gulp.dest('./build/css'));//再保存一次
});

//监控less文件的变化，当它发生变化 之后自动执行less任务
gulp.task('watch',function(){
    //当源文件发生改变之后，执行任务数组
    gulp.watch('./src/less/**/*.less',['less']);
});
//把src下的js下的a.js 等全部合并成一个文件放在build/js目录下，叫all.js
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
/**
 * gulp中的流不是普通的流，而是文件对象流
 * 对象里有文件的文件名 文件的内容
 */
gulp.task('scripts', function() {
    var path = './src/js/all.js';
    return gulp.src('./src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./build/js/'))
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.basename += ".min";
        }))
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('inject',function(){

});
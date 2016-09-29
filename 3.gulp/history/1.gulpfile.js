var gulp = require('gulp');
/**
 * gulp
 * 第一个参数 是任务名
 * 第二个参数是任务的定义
 * gulp 任务名 就可以执行这个任务了
 * 负责把src/index.html拷贝到build目录下
 */
gulp.task('copy',function(){
    //获取输入文件，也就是要拷贝的文件
    gulp.src('./src/index.html')
    //指定目标路径 此处一定是一个文件夹
    .pipe(gulp.dest('./build'));
});
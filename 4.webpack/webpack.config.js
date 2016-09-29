module.exports = {
    //指定入口文件
    entry:'./src/index.js',
    //指定出口 打后的文件放在哪个目录下，叫什么名字
    output:{
        path:'./build',//保存的目录
        filename:'bundle.js'//保存的名称
    }
}
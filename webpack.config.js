module.exports = {
    //指定入口文件
    entry:'./src/index.js',
    //指定出口 打后的文件放在哪个目录下，叫什么名字
    output:{
        path:'./build',//保存的目录
        filename:'bundle.js'//保存的名称
    },
    //设置模块加载器
    module:{
        //此处一定是复数 针对不同类型的文件如何加载
       loaders:[
           {
               //文件匹配模板
               test:/\.js$/,
               //针对js结尾的文件使用babel来进行加载
               loader:'babel'
           }
       ]
    }
}
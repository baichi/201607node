module.exports = {
    entry:'./src/index.js',
    output:{
        path:'./build',
        filename:'bundle.js'
    },
    devServer:{
      contentBase:'./build'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel'
            }
        ]
    }
}
## 初始化项目
```
npm init -y
```
> 会生成一个package.json文件

## 编写webpack配置文件
```
module.exports = {
    entry:'./src/index.js',
    output:{
        path:'./build',
        filename:'bundle.js'
    }
}
```
## 创建源文件和目标文件目录
```
mkdir src build
```

## 创建脚本
```
"scripts": {
    "build": "webpack"
  }
```

## 安装模块
```
npm install webpack --save-dev
```

## 模块说明
```
    "babel-core": babel核心模块
    "babel-loader": babel核心加载器
    "babel-preset-react": 转义react的预设
    "babel-preset-es2015": 转义es6的预设
    "babel-preset-stage-0": 转义es7的预设
    "bootstrap": "^3.3.6", 样式类
    "css-loader": "^0.23.1", 加载css
    "style-loader": "^0.13.1",加载css
    "file-loader": "^0.8.5", 加载图片图标的
    "url-loader": "^0.5.7", 加载图片图标的
    "jquery": "^3.0.0", 
    "react": "^15.1.0", react核心模块
    "react-dom": "^15.1.0",
    "react-loader": "^2.4.0",加载react
    "webpack": "^1.13.1", //编译打包webpack
    "webpack-dev-server": "^1.14.1" 起webpack服务
```

## 运行脚本

```
npm run build
```

## 在build目录下新建html文件,并插入打包后的脚本
```
<script src="bundle.js"></script>
```

## 预览html文件

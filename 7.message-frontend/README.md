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
npm run build

## 安装模块
```
npm install webpack --save-dev
```

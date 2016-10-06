/**
 * 引入react.js之后会在window下增加一个React全局变量
 * createClass可以创建封装一个组件
 * 自定义组件如何渲染
 * 1. 基于类创建一个组件的实例
 * 2. 调用实例的render方法得到虚拟DOM
 * 3. 把此虚拟DOM结构转换成真实的DOM结构并插到app div内部
 */
var Message = React.createClass({
    //定义了此组件将要被如何渲染到目标容器中
    //组件能且只能返回一个顶级元素
    //组件首字母要大写
    render(){
        return (
            <div style={{border:'1px solid red',width:100,height:100,color:'red'}}>
                hello world
            </div>
        )
    }
});


class Myform extends React.Component{
    render(){
        return (
            <form className="container form-group">
                <div className="">
                    <label htmlFor="username">用户名</label>
                    <input className="form-control" type="text" id="username" name="username"/>
                </div>
                <div className="">
                    <label htmlFor="password">密码</label>
                    <input className="form-control" type="text" id="password" name="password"/>
                </div>
            </form>
        )
    }
}

ReactDOM.render(<Myform/>, document.getElementById('app'));
ReactDOM.render(<Myform/>, document.getElementById('app1'));
/**
 * 1.为input绑定onChange事件，当事件发生的时候执行处理函数
 * 2. 在处理函数中，先得到input的值，然后调用ajax方法来获取百度返回的数据
 * 3. 修改组件的words状态,等于一个li数组，从而刷新视图
 */
var Suggest = React.createClass({
    getInitialState(){
      return {words:[]}
    },
    componentDidMount(){
        /**
         * 解决success里的this指针
         * 1. 缓存this
         * 2. 箭头函数
         * 3. 指定 context
         */
        $.ajax({
            url:'http://www.baidu.com/su',//接口
            method:'GET',//请求的方法
            jsonp:'cb',//用来传送返回方法名的参数名
            dataType:'jsonp',//指定返回值的类型
            data:{wd:'a'},//要传输的参数
            success:function(result){
                console.log(result);
            }
        })
    },
    render(){
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <input type="text" className="form-control"/>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        {this.state.words}
                    </ul>
                </div>
            </div>
        )
    }
});
ReactDOM.render(<Suggest/>,document.getElementById('app'));
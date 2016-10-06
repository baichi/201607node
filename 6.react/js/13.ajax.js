var Suggest = React.createClass({
    componentDidMount(){
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

                    </ul>
                </div>
            </div>
        )
    }
});
ReactDOM.render(<Suggest/>,document.getElementById('app'));
/*
 * 1. 按钮绑定事件，当事件发生的时候调用回调函数
 * 2. 回调函数中获取input框的值，需要把input框里获得到的字符串转成li并添加到状态对象的messages数组中
 *
 */
var MessageBox = React.createClass({
    getInitialState(){
        return {messages:[]}
    },
    render(){
        return (
            <div className="container">
                <h2>珠峰留言版</h2>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="row">
                            <div className="col-xs-10">
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="col-xs-2">
                                <button className="btn btn-primary">留言</button>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body">
                        <ul className="list-group">
                            {this.state.messages}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
});
ReactDOM.render(<MessageBox></MessageBox>,document.getElementById('app'));
/*
 * 1. 按钮绑定事件，当事件发生的时候调用回调函数
 * 2. 回调函数中获取input框的值，需要把input框里获得到的字符串转成li并添加到状态对象的messages数组中
 * localStorage.setItem(key,value); value值只能是字符串
 * localStorage.getItem(key);
 *
 */
var utils = {
    list(){

    },
    add(){

    },
    save(){

    }
}
var MessageBox = React.createClass({
    //获取初始状态
    getInitialState(){
        //setState方法要在getInitialState方法调用之后就可以使用
        return {messages:[]}
    },
    //组件已经被加载
    componentDidMount(){
        this.loadData();
    },
    //读取localStorage中的数据并修改states
    loadData(){
        var result = localStorage.getItem('messages');
        if(result){
            this.setState({messages:JSON.parse(result)});
        }
    },
    handleClick(){
        var val = this.refs.txtMsg.value;
        this.state.messages.push(val);
        localStorage.setItem('messages',JSON.stringify(this.state.messages));
        this.setState({messages:this.state.messages});
        this.refs.txtMsg.value = '';
    },
    render(){
        return (
            <div className="container">
                <h2>珠峰留言版</h2>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="row">
                            <div className="col-xs-10">
                                <input ref="txtMsg" type="text" className="form-control"/>
                            </div>
                            <div className="col-xs-2">
                                <button onClick={this.handleClick} className="btn btn-primary">留言</button>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body">
                        <ul className="list-group">
                            {
                                this.state.messages.map((item,index)=><li key={index} className="list-group-item">{item}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
});
ReactDOM.render(<MessageBox></MessageBox>,document.getElementById('app'));
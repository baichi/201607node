/**
 * 实现双向数据绑定
 * 1. 定义一个初始状态 {val:''}
 * 2. 绘制页面 input p
 * 3. 给input绑定onChange事件，当事件发生的时候调用对应的方法
 * 4. 在方法里面改变state,然后重新渲染视图
 **/

var Double = React.createClass({
    //初始状态
    getInitialState(){
        return {val:'请输入'}
    },
    handleChange(event){
        var val = event.target.value;
        this.setState({val});
    },
    handleFocus(){
        this.setState({val:''});
    },
    handleKeyup(event){
        var code = event.keyCode;
        if(code == 13){
            alert(event.target.value);
        }
    },
    handleMouseOver(event){
        event.target.style.outline = '3px dotted red';
    },
    handleMouseOut(event){
        event.target.style.outline = '';
    },
    render(){
        return (
            <div style={{margin:20}}>
                <input onMouseOut={this.handleMouseOut}  onMouseOver={this.handleMouseOver} onKeyUp={this.handleKeyup} onFocus={this.handleFocus} type="text" onChange={this.handleChange} value={this.state.val}/>
                <p>{this.state.val}</p>
            </div>
        )
    }
});
ReactDOM.render(<Double/>,document.getElementById('app'));
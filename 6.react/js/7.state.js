/**
 * 在createClass定义了很多的方法，在render的会依次调用
 * 1. 如何定义初始状态
 */
var Counter = React.createClass({
    //定义初始状态对象，key和value随意定义
    getInitialState(){
      console.log('1.getInitialState');
      return {number:10};
    },
    addOne(){
        //设置新的状态对象,修改状态对象要重新渲染页面
      this.setState({number:this.state.number+1});
    },
    render(){
        console.log('2.render');
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.addOne}>加1</button>
                <button disabled>减1</button>
            </div>
        )
    }
});
ReactDOM.render(<Counter/>,document.getElementById('app'));
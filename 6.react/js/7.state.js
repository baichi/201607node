/**
 * 在createClass定义了很多的方法，在render的会依次调用
 * 1. 如何定义初始状态 getInitialState
 * 2. 通过setState方法修改状态，状态修改完成后会触发页面的重新渲染
 * 3. 可以通过onXxx给元素绑定事件，当事件发生的时候会调用对应的函数
 */
var Counter = React.createClass({
    //定义初始状态对象，key和value随意定义
    getInitialState(){
      console.log('1.getInitialState');
      return {number:10};
    },
    change(num){
        //设置新的状态对象,修改状态对象要重新渲染页面
      this.setState({number:this.state.number+num});
    },
    render(){
        console.log('2.render');
        return (
            <div>
                <p>{this.state.number}</p>
                {/*通过bind绑定this和参数*/}
                <button onClick={this.change.bind(this,1)}>加1</button>
                <button onClick={this.change.bind(this,-1)}>减1</button>
            </div>
        )
    }
});
ReactDOM.render(<Counter/>,document.getElementById('app'));
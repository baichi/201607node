var Counter   = React.createClass({
    //获取初始属性
    getDefaultProps(){
        console.log('1. getDefaultProps 获取初始属性');
        return {};
    },
    //定义初始状态 状态可以从属性里取值
    getInitialState(){
        console.log('2. getInitialState 获取初始状态');
        return {count:this.props.count};
    },
    componentWillMount(){
        console.log('3. componentWillMount 组件将要被插入到DOM容器内部');
    },
    add(){
        //每当状态或属性改变的时候 要调用render方法重新渲染页面
        this.setState({count:this.state.count + 1});
    },
    render(){
        console.log('4. render 组件插入到DOM容器内部');

        return (
            <div>
                {this.state.count}
                <button ref="addBtn" onClick={this.add}>加1</button>
            </div>
        )
    },
    componentDidMount(){
        console.log('5.render',this.refs);
        console.log('5. componentDidMount 组件渲染完成后');
    },
    //当属性和状态发生改变的时候会调用此函数，以确定是否要更新组件(render)
    shouldComponentUpdate(nextProps,nextState){
        console.log('6. shouldComponentUpdate 询问组件是否需要更新render');
        if(nextState.count>10)
            return false;
        else
           return true;
    }
});
ReactDOM.render(<Counter count={5}/>,document.getElementById('app'));
/**
 * 在方法内部this 指向当前组件的类的实例
 * props是属性对象 把传入组件的属性封装成一个对象挂在this.props上
 * 在组件内部方法中可以通过this.props对象把属性取出来
 * 属性由外界传入，在组件内部可以读，但不能修改，
 * 有一些属性必须由外界传入，如果不传直接报错
 */
var Person = React.createClass({
    //定义默认属性对象
    getDefaultProps(){
        return {name:'无名',gender:'公'};
    },
    //属性的类型 规定了使用此组件的时候必需要传入哪些属性，类型是什么
    propTypes:{
        //需要外界传入home属性，类型必须是字符串。必须传入，不传报错
        home:React.PropTypes.string.isRequired
    },

    render(){
        return (
            <div>
                {this.props.name},{this.props.gender}
                {this.props.home}
            </div>
        )
    }
});

ReactDOM.render(<Person name="珠峰" gender="男" home="beijing"/>,document.getElementById('app'))
//定义一个长方型的组件，宽和高必须传入而且类型必须是数字
var Rectangle = React.createClass({

});


ReactDOM.render(<Rectangle width={100} height={200}/>,document.getElementById('app'));
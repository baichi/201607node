var Child = React.createClass({
    // this.props.children是一个span数组
    // 希望把span数组转成li数组在ul内部进行渲染
 render(){
     console.log(this.props.children);
   return (
       <ul>
           {
             this.props.children.map((item,index)=><li key={index}>{item}</li>)
           }
       </ul>
   )
 }
});

ReactDOM.render(<Child>
    <span>大王</span>
    <span>小王</span>
    <span>老王</span>
</Child>,document.getElementById('app'));
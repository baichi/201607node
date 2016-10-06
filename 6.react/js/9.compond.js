/**
 * 复合组件
 * success warning danger primary info default
 **/

var Panel = React.createClass({
    render(){
        return (
            <div className="panel panel-success">
                <PanelHead></PanelHead>
                <PanelBody></PanelBody>
                <PanelFooter></PanelFooter>
            </div>
        )
    }
});

var PanelHead = React.createClass({
    render(){
        return (
            <div className="panel-heading">
                头
            </div>
        )
    }
});
var PanelBody = React.createClass({
    render(){
        return (
            <div className="panel-body">
                体
            </div>
        )
    }
});
var PanelFooter = React.createClass({
    render(){
        return (
            <div className="panel-footer">
                尾巴
            </div>
        )
    }
});
var data = {head:'我是头部',body:'我是身体',footer:'我是小尾巴'}
ReactDOM.render(<Panel></Panel>, document.getElementById('app'));

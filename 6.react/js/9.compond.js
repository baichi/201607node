/**
 * 复合组件
 * success warning danger primary info default
 **/

var Panel = React.createClass({
    render(){
        return (
            <div className="panel panel-success">
                <PanelHead data={this.props.head}></PanelHead>
                <PanelBody data={this.props.body}></PanelBody>
                <PanelFooter data={this.props.footer}></PanelFooter>
            </div>
        )
    }
});

var PanelHead = React.createClass({
    render(){
        return (
            <div className="panel-heading">
                {this.props.data}
            </div>
        )
    }
});
var PanelBody = React.createClass({
    render(){
        return (
            <div className="panel-body">
                {this.props.data}
            </div>
        )
    }
});
var PanelFooter = React.createClass({
    render(){
        return (
            <div className="panel-footer">
                {this.props.data}
            </div>
        )
    }
});
var data = {head:'我是头部1',body:'我是身体1',footer:'我是小尾巴1'}
//ReactDOM.render(<Panel head={data.head} body={data.body} footer={data.footer}></Panel>, document.getElementById('app'));
ReactDOM.render(<Panel {...data}></Panel>, document.getElementById('app'));

var Focus = React.createClass({
    getInitialState(){
        console.log(this.refs.username);
    },
    getDefaultProps(){
        console.log(this.refs.username);
    },
    handleClick(){
        this.refs.username.focus();
    },
    render(){
        return (
            <div>
                <label ref="userlabel" onClick={this.handleClick} className="control-label">用户名</label>
                <input ref="username" type="text" className="form-control"/>
            </div>
        )
    }
});
ReactDOM.render(<Focus></Focus>, document.getElementById('app'));
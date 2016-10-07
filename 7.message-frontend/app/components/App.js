import React from 'react';
export default class App extends React.Component{
    render(){
        return (
            <div className="container">
               <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <div className="navbar-brand">珠峰React</div>
                        </div>
                        <div>
                            <ul className="nav navbar-nav">
                                <li>
                                    <a href="#">首页</a>
                                </li>
                                <li>
                                    <a href="#">用户管理</a>
                                </li>
                                <li>
                                    <a href="#">个人设置</a>
                                </li>
                            </ul>
                        </div>
                    </div>
               </nav>
                <div className="row">
                    <div className="col-sm-12">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
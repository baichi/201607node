import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
/**
 * Router代表一个路由容器
 * Route代表一个路由规则
 */
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import Home from './components/Home';
import User from './components/User';
import UserAdd from './components/UserAdd';
import UserList from './components/UserList';
import Profile from './components/Profile';
import UserDetail from './components/UserDetail';
require('bootstrap/dist/css/bootstrap.css');
ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}/>
        <Route path="user" component={User}>
            <IndexRoute component={UserList}/>
            <Route path="add" component={UserAdd}/>
            <Route path="list" component={UserList}/>
            <Route path="detail/:id" component={UserDetail}/>
        </Route>
        <Route path="profile" component={Profile}/>
    </Route>
</Router>,document.getElementById('app'));

<App>
    <Home></Home>
</App>
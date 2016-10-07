import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
/**
 * Router代表一个路由容器
 * Route代表一个路由规则
 */
import {Router,Route,hashHistory} from 'react-router';
import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';
require('bootstrap/dist/css/bootstrap.css');
ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={App}>
        <Route path="home" component={Home}/>
        <Route path="user" component={User}/>
        <Route path="profile" component={Profile}/>
    </Route>
</Router>,document.getElementById('app'));

<App>
    <Home></Home>
</App>
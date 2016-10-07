import React from 'react';
export default class MessageList extends React.Component{
    render(){
        return (
            <ul className="list-group">
                <li className="list-group-item">张三:今天下雨了! 11:57:10</li>
                <li className="list-group-item">李四:明天就不下雨了! 12:57:10</li>
            </ul>
        )
    }
}
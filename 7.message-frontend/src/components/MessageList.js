import React from 'react';
require('moment/locale/zh-cn.js');
import moment from 'moment';
export default class MessageList extends React.Component{
    render(){
        return (
            <ul className="list-group">
                {
                    this.props.data.map((item,index)=><li key={index} className="list-group-item">{item.name}:{item.content} <span className="pull-right">{moment(item.createAt).fromNow()}</span></li>)
                }
            </ul>
        )
    }
}
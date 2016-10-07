/**
 * es 声明组件方法
 */
import React from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
export default class MessageBox extends React.Component {
    render() {
        return (
            <div className="container">
                <h3 style={{textAlign:'center'}}>珠峰留言版</h3>
                <div className="row">
                    <div className="col-xs-12">
                        <MessageList></MessageList>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <MessageForm></MessageForm>
                    </div>
                </div>
            </div>
        )
    }
}
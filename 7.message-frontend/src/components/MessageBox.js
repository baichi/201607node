/**
 * 如何初始化数据
 * 1. 在constructor里调用init
 * 2. init方法里调用后台接口获取消息的数组
 * 3. 修改当前组件状态对象的messages属性 setState()
 * 4. 把状态传递通过属性传递给MessageList组件
 * 5. 在MessageList组件中先得到属性中的messages，然后把这个JSOn数组转成li数组显示即可。
 */
/**
 * 如何添加数据
 * 1. 为form绑定提交事件onSubmit处理函数
 * 2. 在处理函数中收集姓名和内容，封装成一个对象调用增加消息的接口
 * 3. 在接口成功的回调中把保存之后的文档对象添加到messages数组中,添加之后会重新渲染页面
 * 注意：修改状态只能修改MessageBox的状态对象中的messages. 可以把MessageBox的一个方法作为属性传递给MessageForm组件。
 */

/**
 * 如何删除消息
 * 1. 给小叉绑定点击事件，点击事件发生的时候执行回调函数
 * 2. 在回调函数里要获得要删除的消息ID，然后传递给父组件传递给自己组件一个方法
 * 3.在父组件的方法里调用接口把当前消息删除，并修改状态
 */
import React from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import $ from 'jquery';
export default class MessageBox extends React.Component {
    constructor(props) {
        super(props);
        //这是es6里定义初始状态的方法
        this.state = {messages: []};
        this.init();
    }

    //调用ajax接口获取数据,
    init() {
        $.get("http://localhost:3000/messages").then((messages)=> this.setState({messages}))
    }

    addMessage(message) {
        $.post("http://localhost:3000/messages", message).then(doc=> {
            this.state.messages.push(doc);
            this.setState({messages: this.state.messages});
        });
    }

    del(id) {
        $.ajax({
            url: `http://localhost:3000/messages/${id}`,
            method: 'DELETE'
        }).then(result=> {
            var messages = this.state.messages.filter(item=>item._id != id);
            this.setState({messages});
        })
    }

    render() {
        return (
            <div className="container">
                <h3 style={{textAlign:'center'}}>珠峰留言版</h3>
                <div className="row">
                    <div className="col-xs-12">
                        <MessageList del={this.del.bind(this)} data={this.state.messages}></MessageList>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <MessageForm add={this.addMessage.bind(this)}></MessageForm>
                    </div>
                </div>
            </div>
        )
    }
}
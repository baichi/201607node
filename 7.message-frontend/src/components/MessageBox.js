/**
 * 1. 在constructor里调用init
 * 2. init方法里调用后台接口获取消息的数组
 * 3. 修改当前组件状态对象的messages属性 setState()
 * 4. 把状态传递通过属性传递给MessageList组件
 * 5. 在MessageList组件中先得到属性中的messages，然后把这个JSOn数组转成li数组显示即可。
 */
import React from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
export default class MessageBox extends React.Component {
    constructor(props){
        super(props);
        //这是es6里定义初始状态的方法
        this.state = {messages:[]};
        this.init();
    }
    //调用ajax接口获取数据,
    init(){

    }

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
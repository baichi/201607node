import React from 'react';
export default class MessageForm extends React.Component{
    render(){
        return (
           <form className="form-horizontal" role="form">
              <div className="form-group">
                  <label htmlFor="username" className="control-label col-xs-1">姓名</label>
                  <div className="col-xs-11">
                      <input type="text" id="username" className="form-control" name="username"/>
                  </div>
              </div>
               <div className="form-group">
                   <label htmlFor="content" className="control-label col-xs-1">内容</label>
                   <div className="col-xs-11">
                       <input type="text" id="content" className="form-control" name="content"/>
                   </div>
               </div>
               <div className="form-group">
                   <div className="col-sm-offset-1 col-sm-10">
                       <button type="submit" className="btn btn-default">发言</button>
                   </div>
               </div>
           </form>
        )
    }
}
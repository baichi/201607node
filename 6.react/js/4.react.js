var Message = function(){}
Message.prototype = {
    render(){
        return '<h1>hello22</h1>';
    }
}

function render(Message,dom){
  dom.innerHTML = new Message().render();
}
render(Message, document.getElementById('app'));
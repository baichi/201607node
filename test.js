class Events {
    //构造函数定义私有属性
    constructor() {
        this._events = {};
    }

    //注册监听函数
    on(type, fn) {
        this._events[type] = fn;
    }

    //发射事件
    emit(type, ...params) {
        this._events[type].apply(this, params);
    }
}

function Events() {
    //构造函数里定义私有属性
    this._events = {};
}
Events.prototype.on = function (type, fn) {
    this._events[type] = fn;
};
Events.prototype.emit = function (type) {
    var arr = [];
    for (var i = 1; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }
    //var arr =  Array.prototype.slice.call(arguments,1);
    this._events[type].apply(this, arr);
};

var obj = {
    a(){

    },
    b(){

    }
}


var e = new Events();
e.on('message', function (msg, msg2) {
    console.log(1, msg, msg2);
});
e.emit('message', 'hello', 'world');
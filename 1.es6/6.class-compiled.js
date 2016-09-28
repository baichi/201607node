'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//声明一个类
//当一个类实例化的时候，会自动调用contrustor方法
//其它的方法不会自动调用，是公有方法
var Person = function () {
    //构造函数 用来初始化私有属性
    function Person(name) {
        _classCallCheck(this, Person);

        this.name = name;
    }

    _createClass(Person, [{
        key: 'getName',
        value: function getName() {
            console.log(this.name);
        }
    }]);

    return Person;
}();

/*function Person(name){
    //私有属性在构造函数内部初始化，属于每个实例私有
    this.name = name;
}
//公有属性在原型上创建，所有的实例共享
//在原型中的this指向的是实例本身
Person.prototype.getName = function(){
    console.log(this.name);
}
Person.prototype.name = 'zfpx';*/


var p1 = new Person('zfpx1');
var p2 = new Person('zfpx2');
console.log(p1.getName === p2.getName);
p1.getName();
p2.getName();

//# sourceMappingURL=6.class-compiled.js.map
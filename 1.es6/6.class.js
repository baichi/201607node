//声明一个类
//当一个类实例化的时候，会自动调用contrustor方法
//其它的方法不会自动调用，是公有方法
class Person{
    //构造函数 用来初始化私有属性
   constructor(name){
        this.name = name;
   }
   getName(){
        console.log(this.name);
   }
}
class Student extends Person{
    //在子类的构造函数中必须先调用父类的构造函数
    constructor(name,age){
        super(name);
        this.age = age;
    }
    getAge(){
        console.log(this.age);
    }
}

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
/*var p1 = new Person('zfpx1');
var p2 = new Person('zfpx2');
console.log(p1.getName === p2.getName);
p1.getName();
p2.getName();*/
var s1 = new Student('zfpx1',1);
var s2 = new Student('zfpx2',2);
s1.getName();
s2.getAge();

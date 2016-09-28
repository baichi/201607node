//声明一个类
//当一个类实例化的时候，会自动调用contrustor方法
//其它的方法不会自动调用，是公有方法
/*class Person{
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
}*/

function Person(name){
    //私有属性在构造函数内部初始化，属于每个实例私有
    this.name = name;
    this.home = '北京';
}
//公有属性在原型上创建，所有的实例共享
//在原型中的this指向的是实例本身
Person.prototype.getName = function(){
    console.log(this.name);
}
Person.prototype.name = 'zfpx';

function Student(name,age){
    //调用父类的构造函数来初始化一下父类的私有属性
    //this指向子类的新创建的实例
    Person.call(this,name);//this.name = name;
    this.age = age;//初始化自己的私有属性
}
Student.prototype = new Person;
//添加子类的公有方法
Student.prototype.getAge = function(){
    console.log(this.age);
}

var s1 = new Student('zfpx1',1);
s1.getName();
s1.getAge();
console.log(s1.home);
/*var p1 = new Person('zfpx1');
var p2 = new Person('zfpx2');
console.log(p1.getName === p2.getName);
p1.getName();
p2.getName();*/


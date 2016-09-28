/*
/!*function double(v){
    return v*2;
}*!/
//只有一个参数或返回值的时候
var double = v=>v*2;
console.log(double(124));
//没有参数的时候需要加小括号表示零参数
var say = ()=>'hello';
console.log(say());
//如果参数多于一个的话，那么也需要小括号
var add = (a,b)=>a+b;
console.log(add(2,3));
//当函数体不保包括一个返回值的时候，外面要包一个大括号
var world = ()=>{
    console.log('world');
    return 'xxx';
};
console.log(world());
console.log(getPerson);
var getPerson = (name,age) => {return {name,age}};
var person = getPerson('123',2);
console.log(person)


var arr = [6,3,1,5,8];
arr.sort((a,b)=>a-b);
console.log(arr); //输出 1 3 5 6 8


*/
var sum = function(a,b){
    console.log(this);
    return a+b;
};

var sum = (a,b)=>{
    console.log(this);
    return a+b;
};
var person = {
    name:'zfpx',
    getName:function(){
        console.log(this.name);
        setTimeout(()=>{
            console.log(this);
        },1000);
    }
}
person.getName();


function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    // 箭头函数
    setInterval(() => this.s1++, 1000);
    // 普通函数
    setInterval(function () {
        this.s2++;
    }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);//输出多少
setTimeout(() => console.log('s2: ', timer.s2), 3100);//输出多少
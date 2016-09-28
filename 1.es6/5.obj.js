var name = 'zfpx';
var age = 8;
var getName = function(){
    console.log(this.name);
}
//对象的属性名
let person = {
    name,
    age,
    getName
}
console.log(person);
person.getName();
var arr = [1,2];
var [aaa,bbb] = arr;
console.log(aaa,bbb);

var obj = {name:'zfpx1',age:9};
//var name = obj.name;
//var age = obj.age;
var {name:name1,age:age1} = obj;
console.log(name1,age1);

var person = {name:'zfpx',address:{province:'江苏',city:'南京'}};
/*var {name:name1,address:{province:province1,city:city1}} = person;
console.log(name1,province1,city1);*/
var {name,address} = person;
var {province,city} = address;
console.log(name,province,city);


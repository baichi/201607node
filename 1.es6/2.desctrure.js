var arr = [1,2];
var [aaa,bbb] = arr;
console.log(aaa,bbb);

var obj = {name:'zfpx1',age:9};
//var name = obj.name;
//var age = obj.age;
var {name,age:age1} = obj;
console.log(name,age1);

var person = {name:'zfpx',address:{province:'江苏',city:'南京'}};
/*var {name:name1,address:{province:province1,city:city1}} = person;
console.log(name1,province1,city1);*/
var {name,address} = person;
var {province,city} = address;
console.log(name,province,city);

/*function ajax(options){
    // 判断有些参数必须提供
    if(!options.url) throw Error('url参数必须提供');
    //有些参数可以不提供，但需要默认值
    options.method = options.method?options.method:'GET';
}*/

function ajax({url=new Error('url必须提供'),method='GET'}){
    console.log(method);
    console.log(url);

}
ajax({
    //url:'/ajax',
    method:'POST',
    data:{name:'zfpx'}
})


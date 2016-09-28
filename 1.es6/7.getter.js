class Document{
    constructor(){
        this.cookies = [];
    }
    set cookie(cookie) {//name=zfpx2
        let flag = false;//标志原来此cookie是否存在
        //对原来的数组进行映射
        this.cookies = this.cookies.map(function (item) {//name=zfpx
            //如果key没对应上，则返回原来的cookie(item)
            if (item.split("=")[0] != cookie.split("=")[0]) {
                return item;
            }else {//如果当前迭代到的item的key和传进来的key是一样的
                flag = true;//找到了原来匹配的key
                return cookie;//替换成新的cookie
            }
        });
        if (!flag) {
            this.cookies.push(cookie);
        }
    }

    get cookie(){
        return this.cookies.join('; ');
    }
}
var document = new Document();
document.cookie = 'name=zfpx';
document.cookie = 'name=zfpx2';
document.cookie = 'age=6';
console.log(document.cookie);
// name=zfpx2; age=6
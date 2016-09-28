class Document{
    constructor(){
        this.cookies = [];
    }
    set cookie(cookie){
        this.cookies.push(cookie);
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
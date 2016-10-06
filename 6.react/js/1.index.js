/**
 * 引入react-dom之后会在window下多一个ReactDOM属性，即全局变量
 * javascript+html 是一种html和javascript混合的一种写法
 * html一般来表示一个DOM结构，javascript用来处理逻辑
 *
 * render 将一段DOM元素插入到另一个DOM标签内部
 * 此处的DOM是虚拟DOM，结构跟真实DOM类似，但写法有所不同
 * render方法的第一个参数有且只能有一个顶级元素
 * 1 二个参数之间没有逗号
 * 2. 每个元素都需要结束标签
 *
 * 以<开始的都是HTML代码
 * 以{开始的都是JS代码
 * ejs中的<%=%> = jsx {}
 * 如果想在jsx中使用CSS属性，要使用驼峰命名法
 */
var style = {color:'red',backgroundColor:'green'};
ReactDOM.render(
    <form>
        <label style={style} htmlFor="username">姓名</label>
        <input type="text" value="zhangsan" name="username" id="username"/>
        <label htmlFor="password">密码</label>
        <input type="text" name="password" id="password"/>
    </form>,
    document.getElementById('app')
);
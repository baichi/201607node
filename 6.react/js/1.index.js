/**
 * 引入react-dom之后会在window下多一个ReactDOM属性，即全局变量
 * render
 * javascript+html
 */
ReactDOM.render(
    <h1>hello world</h1>,
    document.getElementById('app')
);
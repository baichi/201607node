/**
 * 让当前页对应的分页按钮高亮 class=active
 * 如果是第一页，没有上一页按钮
 * 如果是最后一页，没有下一页按钮
 */
var Nav = React.createClass({
    render(){
        var pages = [];
        for (var i = 1; i <= this.props.total; i++) {
            pages.push(<li key={i}><a href="#">{i}</a></li>);
        }
        return (
            <nav>
                <ul className="pagination">
                    <li><a href="#">&laquo;</a></li>
                    {pages}
                    <li><a href="#">&raquo;</a></li>
                </ul>
            </nav>
        )
    }
});

ReactDOM.render(
    <Nav total={10} pageNum={4}></Nav>,
    document.getElementById('app'));

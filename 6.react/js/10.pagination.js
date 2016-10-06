/**
 * total总页数 pageNum当前页码
 * 让当前页对应的分页按钮高亮 class=active
 * 如果是第一页，没有上一页按钮
 * 如果是最后一页，没有下一页按钮
 */
var Nav = React.createClass({
    render(){
        var pages = [];
        for (var i = 1; i <= this.props.total; i++) {
            pages.push(<li className={this.props.pageNum==i?'active':''} key={i}><a href="#">{i}</a></li>);
        }
        return (
            <nav>
                <ul className="pagination">
                    {
                        this.props.pageNum!=1?<li><a href="#">&laquo;</a></li>:''
                       /* (function(){
                            if(self.props.pageNum!=1)
                                return <li><a href="#">&laquo;</a></li>
                        })()*/
                    }
                    {pages}
                    {
                        this.props.pageNum<this.props.total?<li><a href="#">&raquo;</a></li>:''
                    }

                </ul>
            </nav>
        )
    }
});

ReactDOM.render(
    <Nav total={6} pageNum={6}></Nav>,
    document.getElementById('app'));

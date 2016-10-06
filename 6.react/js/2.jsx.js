var names = ['张三', '张三', '福原爱'];

ReactDOM.render(
    <ul>
        {
            names.map(function (name,index) {
                return <li key={index} >{name}</li>
            })
        }
    </ul>,
    document.getElementById('app')
)
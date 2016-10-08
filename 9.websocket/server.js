var express = require('express');
var app = express();
app.listen(8080);


app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname})
});
app.get('/long', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    setInterval(function () {
        res.write(`<script>
          parent.show('${new Date()}');
        </script>`);
    }, 1000);
});
app.get('/clock', function (req, res) {
    //console.log(req.headers);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(new Date().toLocaleString())
});

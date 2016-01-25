var express = require('express');

var app = express();

app.use(express.static('public'));
//app.use(express.static('src/views'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', {title: 'Hello from render', list: ['a', 'b', 'c']});
});

var port = process.env.PORT || 3000;

app.listen(port, function(err) {
    console.log('Server listening on http://localhost:' + port);
});

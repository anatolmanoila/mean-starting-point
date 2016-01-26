var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

var nav = [{
    Link:'/books', Text:'Book'
},
{
    Link:'/authors', Text:'Author'
}];

var bookRouter = require('./src/routes/bookRoutes.js')(nav);

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/Books', bookRouter);

app.get('/', function(req, res) {
    res.render('index', {
        title: 'Hello ',
        nav: nav
    });
});

app.listen(port, function(err) {
    console.log('Server listening on http://localhost:' + port);
});

var express = require('express');

var app = express();

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(req, res) {
    res.send('Hi Aema');
});

var port = process.env.PORT || 3000;

app.listen(port, function(err) {
    console.log('Server listening on http://localhost:' + port);
});

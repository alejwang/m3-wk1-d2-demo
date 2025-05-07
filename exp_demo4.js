var express = require('express');
var app = express();

app.get('/home', (req, res) => {
    res.send('Home page');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.listen(3000);



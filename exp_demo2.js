var express = require('express');
var app = express();

app.get('/hello', (req, res) => {
    res.send('Hello word in /hello!')
});

app.listen(3000);



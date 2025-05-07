var express = require('express');
var router = express.Router();

router.get('/home', (req, res) => {
    res.send('Hello world!')
});

router.post('/home', (req, res) => {
    res.send('You just called the post method!')
});

module.exports = router
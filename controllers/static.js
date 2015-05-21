var express = require('express');
var router = express.Router();
var path = require('path');

router.use(express.static(__dirname + '/../asserts'));

router.get('/', function(req, res) {
    res.sendFile(path.resolve('layouts/posts.html'));
});


module.exports = router;
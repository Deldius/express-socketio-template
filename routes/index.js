var express = require('express');
var router = express.Router();
var path   = require('path');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/chat', function (req, res) {
  res.sendFile(path.join(__dirname, '../views/chat.html'));
});

module.exports = router;
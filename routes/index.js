var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createzone', function(req, res, next) {
	res.render('createzone', {title: 'Zone Create'});
});

router.get('/createcomment', function(req, res, next) {
	res.render('createcomment', {title: 'Comment Create'});
});

module.exports = router;

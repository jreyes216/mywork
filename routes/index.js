var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'esdk-app' });
});

router.post('/setting', function(req,res){
	res.render('setting', { title: 'esdk-app' });
});

module.exports = router;

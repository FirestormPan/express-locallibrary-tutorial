var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/sad', function(req, res, next) {
  res.send('respond with a resource sad');
});

module.exports = router;

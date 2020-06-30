var express = require('express');
var humps = require('humps');
var router = express.Router();

var connection = require('../dbConnection.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
connection.query('SELECT * from users', function (err, results, fields) {
  if (err) throw err;
  res.send(humps.camelizeKeys(results));
});
});

module.exports = router;

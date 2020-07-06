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

router.patch('/:id', function(req, res) {
  var id = req.params.id;
  var increment = req.body.rating;
  connection.query(`UPDATE users SET score = score + ${increment} WHERE id = ${id}`);
  res.send('Done')
});

router.post('/', function(req, res) {
  var fName = req.body.firstName;
  var lName = req.body.lastName;
  connection.query(`INSERT INTO users (first_name, last_name) VALUES ('${fName}', '${lName}')`);
  res.send('Done')
});

router.delete('/:id', function(req, res) {
  var id = req.params.id;
  connection.query(`DELETE FROM users WHERE id = ${id}`);
  res.send('Done');
});

module.exports = router;

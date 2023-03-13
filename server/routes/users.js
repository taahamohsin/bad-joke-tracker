var express = require('express');
var humps = require('humps');
var router = express.Router();

var connection = require('../dbConnection.js');

var generateCommaSeparatedString = obj => Object.keys(obj).reduce((acc, val, index) => {
    if (index !== Object.keys(obj).length - 1) return acc + humps.decamelize(val) +  '= ' + '\'' + obj[val] + '\'' + ', ';
    else return acc + humps.decamelize(val) + '= ' + '\'' + obj[val] + '\'';
  }, '');

/* GET users listing. */
router.get('/', function(_, res, next) {
  connection.query('SELECT * from users', function (err, results, _) {
    if (err) throw err;
    res.send(humps.camelizeKeys(results));
  });
});

router.patch('/:id', function(req, res) {
  var id = req.params.id;
  var increment = req.body.rating;
  if (increment) {
    connection.query(`UPDATE users SET score = score + ${increment} WHERE id = ${id}`, function() {
      res.send('Done')
      return;
    });
  }
  else {
    connection.query(`UPDATE users SET ${generateCommaSeparatedString(req.body)} WHERE id = ${id}`, function () {
    res.send('Done');
    return;
  });
}
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

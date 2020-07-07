var express = require('express');
var humps = require('humps');
var router = express.Router();

var connection = require('../dbConnection.js');

/* GET jokes */
router.get('/', function(req, res, next) {
  var baseString = 'SELECT * from jokes';
  var joinQuery = 'SELECT jokes.id, jokes.title, jokes.description, first_name, last_name, ratings.value  from jokes LEFT OUTER JOIN users on jokes.user_id = users.id LEFT OUTER JOIN ratings on jokes.rating_id = ratings.id;';
  var query = req.params.userId ? `${baseString} WHERE user_id = ${req.params.userId}` : joinQuery;
  connection.query(query, function (err, results, fields) {
    if (err) throw err;
    res.send(humps.camelizeKeys(results));
  });
});

router.patch('/:id', function(req, res) {
  var id = req.params.id;
  connection.query(`UPDATE users SET score = score + ${increment} WHERE id = ${id}`);
  res.send('Done')
});

router.post('/', function(req, res) {
  var title = req.body.title;
  var description = req.body.description;
  var ratingId = req.body.ratingId;
  var userId = req.body.userId;
  connection.query(`INSERT INTO jokes (title, description, rating_id, user_id) VALUES ('${title}', ${description ? `'${description}'` : null}, ${ratingId}, ${userId})`);
  res.send('Done')
});

router.delete('/:id', function(req, res) {
  var id = req.params.id;
  connection.query('SELECT * FROM jokes LEFT JOIN ratings ON jokes.rating_id = ratings.id LEFT JOIN users ON jokes.user_id = users.id', function (err, rows, fields) {
    connection.query(`UPDATE users SET score = score - ${rows[0].value} WHERE id = ${rows[0].user_id}`, function (err, rows) {
      connection.query(`DELETE FROM jokes WHERE id = ${id}`);
    });
  });
  res.send('Done')
});

module.exports = router;

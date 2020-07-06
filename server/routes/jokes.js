var express = require('express');
var humps = require('humps');
var router = express.Router();

var connection = require('../dbConnection.js');

/* GET jokes */
router.get('/', function(req, res, next) {
  var baseString = 'SELECT * from jokes';
  var joinQuery = 'SELECT jokes.id, title, description, first_name, last_name  from jokes LEFT OUTER JOIN users on jokes.user_id = users.id';
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

module.exports = router;

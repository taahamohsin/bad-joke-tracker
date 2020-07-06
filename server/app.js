var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ratingsRouter = require('./routes/ratings');
var jokesRouter = require('./routes/jokes');
var connection = require('./dbConnection');

var app = express();

if (process.env.NODE_ENV === 'development') {
  var cors = require('cors');
  app.use(cors());
  require('dotenv').config({ path: '.env.development' })
 }
 else {
  require('dotenv').config()
 }
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

connection.query('CREATE TABLE IF NOT EXISTS ratings (id int NOT NULL AUTO_INCREMENT, title varchar(45) NOT NULL, description varchar(255) DEFAULT NULL, value int NOT NULL, PRIMARY KEY (id))');
connection.query('CREATE TABLE IF NOT EXISTS users (id int NOT NULL AUTO_INCREMENT, first_name varchar(45) NOT NULL, last_name varchar(45) NOT NULL, score int NOT NULL DEFAULT 0, img_url varchar(45) DEFAULT NULL, PRIMARY KEY (id))');
connection.query('SELECT * FROM ratings', function(err, results) {
  if (!results.length) {
    connection.query(`INSERT INTO \`${process.env.DB_NAME}\`.ratings (title, description, value) VALUES ('Not bad', 'This was your average bad joke', 1), ('Make me suffer', 'This joke made you question your life choices up to this point', 2), ('Oh my ****ing god', 'This bad joke made you cringe on a spiritual level', 3)`);
  }
});
connection.query('CREATE TABLE IF NOT EXISTS jokes (id int NOT NULL AUTO_INCREMENT, title varchar(45) NOT NULL, description varchar(250) DEFAULT NULL, user_id int NOT NULL, rating_id int NOT NULL, PRIMARY KEY (id), KEY user_id_idx (user_id), KEY rating_id_idx (rating_id), CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE, CONSTRAINT rating_id FOREIGN KEY (rating_id) REFERENCES ratings (id) ON DELETE CASCADE ON UPDATE CASCADE)');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ratings', ratingsRouter);
app.use('/jokes', jokesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app;

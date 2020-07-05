var mysql = require('mysql')

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '../.env.development' });
}
else {
  require('dotenv').config({ path: '../.env' });
}

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if(!err)
      console.log('Connected to the database successfully!');
  else
      console.log('Something went wrong with the database connection: '+ JSON.stringify(err, undefined,2));
});

module.exports = connection;
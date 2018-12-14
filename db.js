'user strict';

const mysql = require('mysql');
const config = process.env;

//local mysql db connection
const connection = mysql.createConnection({
    host     : config.MYSQLDB_HOST,
    user     : config.MYSQL_ROOT_USERNAME,
    password : config.MYSQL_ROOT_PASSWORD,
    database : config.MYSQL_DATABASE
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
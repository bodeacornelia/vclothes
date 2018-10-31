'user strict';

const mysql = require('mysql');
const config = process.env;

//local mysql db connection
const connection = mysql.createConnection({
    host     : config.DB_HOST,
    user     : config.DB_USER,
    password : config.DB_PASSORD,
    database : config.DB_NAME
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
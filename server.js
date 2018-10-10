const express = require('express');
app = express();
bodyParser = require('body-parser');
port = process.env.PORT || 3000

const mysql = require('mysql');
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'v_clothes'
});

mc.connect();

app.listen(port);
console.log('VClothes RESTful API server started on: ' + port);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const userRoutes  = require('./modules/user');
const photoRoutes  = require('./modules/photo');
const appointmentRoutes  = require('./modules/appointment');
app.use('/', userRoutes, photoRoutes, appointmentRoutes);
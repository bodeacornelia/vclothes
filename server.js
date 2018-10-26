const express = require('express');
app = express();
bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
port = process.env.PORT 

app.listen(port);
console.log('VClothes RESTful API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const loginRoutes = require('./modules/login');
const userRoutes = require('./modules/user');
const photoRoutes = require('./modules/photo');
const appointmentRoutes = require('./modules/appointment');
app.use('/', loginRoutes, userRoutes, photoRoutes, appointmentRoutes);
const express = require('express');
app = express();
bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
port = process.env.PORT 
const modules = require('../modules')

app.listen(port);
console.log('VClothes RESTful API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

modules.init(app);



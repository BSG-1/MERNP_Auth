const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//connection via mongoose
mongoose.connect('mongodb://localhost/MERNP_Auth');

//New express instance
const app = express();

//set up Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json()); //allows express.js to parse the json

//Routes
app.use('/users', require('./routes/users'));

//Start the server
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server listening at port ${port}`);
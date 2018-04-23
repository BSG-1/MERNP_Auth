const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//New express instance
const app = express();

//set up Middlewares


//Load Routes

//Start the server
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server listening at port ${port}`);
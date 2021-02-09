// Dependencies
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

// Port + App
const PORT = process.env.PORT || 8888;
const app = express();

// Morgan
app.use(logger('dev'));

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use(require('./routes/html-routes.js'));
app.use(require('./routes/api-routes.js'));

// Dotenv
require('dotenv').config();

// Mongoose - MongoDB Atlas
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,   
  }
);

// Port listening :{D
app.listen(PORT, () => {
  console.log(
    `Everything looks fine and dandy! Server listening on PORT: ${PORT} :{D`
  );
});
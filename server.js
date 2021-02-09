const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8888;
const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(require('./routes/html-routes.js'));
app.use(require('./routes/api-routes.js'));

require('dotenv').config();

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,   
  }
);

app.listen(PORT, () => {
  console.log(
    `Everything looks fine and dandy! Server listening on PORT: ${PORT} :{D`
  );
});
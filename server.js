const express = require('express');

var PORT = process.env.PORT || 8888;
var app = express;

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/fitness-tracker',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
  

var db = require('./models')

app.request(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

app.listen(PORT, () =>{
    if (err) throw err;
    console.log('Everything looks fine and dandy! Server listening on PORT: ' + PORT + ' :{D');
})


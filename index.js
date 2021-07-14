const express = require('express')
const exphbs = require('express-handlebars');
const dotenv = require('dotenv').config();
const app = express()
const port = 3000

// MIDDLEWEAR

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))


// DATABASE
require('./data/chill-db');

// ROUTES
require('./routes/index.js')(app);
require('./routes/auth.js')(app);
//require('./routes/detail.js')(app);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  
  // EXPORTS APP FOR MOCHA TESTING
  module.exports = app;
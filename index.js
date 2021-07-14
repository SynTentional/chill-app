const express = require('express')
const exphbs = require('express-handlebars');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const app = express()
const port = 3000

// MIDDLEWEAR

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// // Custom helpers
// exphbs.registerHelper('joinQueue', function() {
//   // utilize store model to increment queue variable per store
//   instance = Store.findById('foo')
//   instance.queue = instance.queue + 1
// })

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))


// COOKIE PARSER
app.use(cookieParser());

// DATABASE
require('./data/chill-db');

const checkAuth = require('./middleware/checkAuth');
app.use(checkAuth);


// ROUTES
require('./routes/index.js')(app);
require('./routes/auth.js')(app);
//require('./routes/detail.js')(app);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  
  // EXPORTS APP FOR MOCHA TESTING
  module.exports = app;
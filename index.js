const express = require('express')
const exphbs = require('express-handlebars');
const app = express()
const port = 3000

// MIDDLEWEAR

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))

require('./routes/index.js')(app);
//require('./routes/detail.js')(app);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  
  // EXPORTS APP FOR MOCHA TESTING
  module.exports = app;
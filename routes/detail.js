const app = require("..");
const User = require('../models/user');
const Stores = require('../models/store');


module.exports = (app) => {

    app.get('/', (req, res) => {
        const { user } = req;
        // Run route
        console.log(req.cookies);
        res.render('detail')
    });



};
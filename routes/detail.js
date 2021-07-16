const app = require("..");
const User = require('../models/user');
const Stores = require('../models/store');


module.exports = (app) => {

    // INDEX 
    // pulls up store that you clicked on
    app.post('/store/:store._id', (req, res) => {
        const { user } = req;
        res.render('detail')
    })

    app.get('/:store', (req, res) => {
        const store = Store.findById(req.params.id)
        res.render('detail', {store})
        // Run route
        console.log(req.cookies);
        res.render('detail')
    });





};
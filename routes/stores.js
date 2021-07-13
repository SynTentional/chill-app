// INDEX

const app = require("..");
const User = require('../models/user');
const Stores = require('../models/store');



module.exports = (app) => {

    // INDEX
    app.get('/stores/new', (req, res) => {
        //const { user } = req;
        console.log(req.cookies);
        res.render('store-new')
    });

    // CREATE
    app.post('/stores/new', (req, res) => {
        console.log(req.cookies);
        const store = new Store(req.body);
        store.name = "";
        store.url = "";
        store.summary = "";
        store.queue = [];

        store
            .save()
        res.render('store-new')
    })

};
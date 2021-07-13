// INDEX

const app = require("..");
const User = require('../models/user');
const Stores = require('../models/store');



module.exports = (app) => {

    // INDEX HOMEPAGE
    app.get('/', (req, res) => {
        const { user } = req;
        console.log(req.cookies);
        // Run route
        // Populate page with store data
        // Stores.find({}).lean.populate('stores')
        //     .then((index) => res.render('index', { stores, user }))
        res.render('index')

    });

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

    // SHOW

    


    // TODO: Display list of stores

    // Populate Mongoose models with a list of sample stores

    // WHEN NOT SIGNED IN DISPLAYS SIGN UP BUTTON

    // LIST VIEW OF STORES THAT YOU ARE WAITING IN LINE FOR



};



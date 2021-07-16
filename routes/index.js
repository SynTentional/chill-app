// INDEX
const app = require("..");
const User = require('../models/user');
const Store = require('../models/store');
const store = require("../models/store");



module.exports = (app) => {

    // SHOW
    app.get('/', (req, res) => {
        const currentUser = req.user;
        Store.find({}).lean().populate()
        .then((stores) => res.render('index', { stores, currentUser }))
        .catch((err) => {
            console.log(err.message)
        })
    });

    app.get('/index', (req, res) => {
        const currentUser = req.user;
        Store.find({}).lean().populate()
            .then((stores) => res.render('index', { stores, currentUser }))
            .catch((err) => {
                console.log(err.message)
            })
    });

    // JOIN QUEUE
    app.post('/index', (req, res) => {
        store = Store.findById({_id:req.params.id});
        res.render('index');
    })

    // INDEX
    app.get('/stores/new', (req, res) => {
        //const { user } = req;
        console.log(req.cookies);
        res.render('stores-new')
    });



    // CREATE
    app.post('/stores/new', (req, res) => {
        const store = new Store(req.body);
        console.log(store._id);
        store
            .save()
            .catch((err) => {
                console.log(err.message);
            })
        // REDIRECT TO INDEX SHOWING STORE
        return res.redirect('/index');

    });

    // STORE DETAIL PAGE

    app.get('/store/:id', (req, res) => {
        storeId = Store.findById({_id:req.params.id})
        res.render('stores-detail', { storeId });
        // console.log(storeId);
        // store = Store.findById(storeId)
        // .then((store) =>  res.render('stores-detail', { store }))
        // .catch((err) => {
        //     console.log(err.message);
        // })
        // Run route
        console.log(req.cookies);
    });

    //STORE JOIN QUEUE POST ROUTE
    app.post('/store/:id/join_queue', (req, res) => {
        const currentUser = req.user;
        Store.findById(req.params.id)
            .then(store => {
                store.queue.push(currentUser);
                console.log(store.queue.length)
                store
                    .save()
                    .catch((err) => {
                        console.log(err.message);
                    })
                res.redirect('/');
            })
            .catch(err => {
                console.log(err)
            })

    });


    // app.post('store/:id', (req, res) => {
    //     const { user } = req;
    //     storeId = Store.find({_id:req.params.id}).populate()
    //     console.log(req.cookies);
    //     res.render('stores-detail');
    // })

    // SHOW

    


    // TODO: Display list of stores

    // Populate Mongoose models with a list of sample stores

    // WHEN NOT SIGNED IN DISPLAYS SIGN UP BUTTON

    // LIST VIEW OF STORES THAT YOU ARE WAITING IN LINE FOR



};



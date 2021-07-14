// INDEX
const app = require("..");
const User = require('../models/user');
const Store = require('../models/store');
const store = require("../models/store");



module.exports = (app) => {

    // SHOW
    app.get('/', (req, res) => {
        // console.log(req.cookies);
        console.log(req.user);
        const currentUser = req.user;
        Store.find({}).lean().populate()
            .then((stores) => res.render('index', { stores, currentUser }))
            .catch((err) => {
                console.log(err.message)
            })

    });

    // INDEX
    app.get('/stores/new', (req, res) => {
        //const { user } = req;
        console.log(req.cookies);
        res.render('stores-new')
    });



    // CREATE
    app.post('/stores/new', (req, res) => {
        console.log(req.cookies);
        const store = new Store(req.body);
        console.log(store._id);
        onclick = function joinQueue(){
            // user is assigned a place in the queue
        };
        store
            .save()
            .catch((err) => {
                console.log(err.message);
            })
        // REDIRECT TO INDEX SHOWING STORE
        return res.redirect('/');

    });

    // STORE DETAIL PAGE

    app.get('/store/:id', (req, res) => {
        storeId = Store.findById({_id:req.params.id})
        const { user } = req;
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

    // STORE JOIN QUEUE POST ROUTE
    app.post('/store/:id/join_queue', (req, res) => {
        store = Store.findById({_id:req.params.id})
        const { user } = req;
        store.queue.push(user)
        res.render('index');
    })

    app.get('/store/:id/join_queue', (req, res) => {
        storeId = Store.findById({_id:req.params.id});
        res.render('index');
    })

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



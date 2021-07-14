// INDEX
const app = require("..");
const User = require('../models/user');
const Store = require('../models/store');



module.exports = (app) => {

    // INDEX
    app.post('/', (req, res) => {
        const { user } = req;
        console.log(req.cookies);

        
        res.render('index')
    })

    // SHOW
    app.get('/', (req, res) => {
        const { user } = req;
        console.log(req.cookies);
        Store.find({}).lean().populate()
            .then((store) => res.render('index', { store }))
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
        store.queue = 0;
        console.log(store._id);
        onclick = function joinQueue(){
        store.queue = store.queue + 1
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



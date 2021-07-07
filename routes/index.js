// INDEX

const app = require("..");


module.exports = (app) => {

    app.get('/', (req, res) => {
        // Run route
        res.render('index')
        console.log(req.cookies);
    });



};



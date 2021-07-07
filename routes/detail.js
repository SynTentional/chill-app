const app = require("..");


module.exports = (app) => {

    app.get('/', (req, res) => {
        // Run route
        res.render('detail')
        console.log(req.cookies);
    });



};
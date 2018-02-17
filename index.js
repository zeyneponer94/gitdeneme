
/*


app.all('/userdata' , function(req,res) {
        //dbOperations.userdata(req,res);
        res.sendStatus(200);
});




*/

const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var dbOperations = require("./dbOperations.js");

express()
    .all('*', function(req, res, next) {
        var origin = req.get('origin');
        res.header('Access-Control-Allow-Origin', origin);
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .all('/userdata', (req, res) => res.send(req.body))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
//dbOperations.userdata(req,res)

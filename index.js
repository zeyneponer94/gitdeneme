
/*


app.all('/userdata' , function(req,res) {
        //dbOperations.userdata(req,res);
        res.sendStatus(200);
});




*/

const express = require('express')
var http = require('http'),
var request = require('request'),
var bodyParser = require('body-parser'),
var errorHandler = require('express-error-handler'),
const path = require('path')
const PORT = process.env.PORT || 5000
var dbOperations = require("./dbOperations.js");

express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(express.bodyParser())
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .all('/userdata', (req, res) => dbOperations.userdata(req,res))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))

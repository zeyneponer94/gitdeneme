
/*


app.all('/userdata' , function(req,res) {
        //dbOperations.userdata(req,res);
        res.sendStatus(200);
});




*/

const express = require('express')
const http = require('http')
const request = require('request')
const bodyParser = require('body-parser')
const path = require('path')
const PORT = process.env.PORT || 5000
var dbOperations = require("./dbOperations.js");

express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}))
    //.use(bodyParser.urlencoded({extended: true}))
    .use(bodyParser.json())
    .use(express.json({limit: "50mb"}))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .all('/userdata', (req, res) => dbOperations.userdata(req,res))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))

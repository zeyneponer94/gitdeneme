var express = require('express')
var path = require('path')
const PORT = process.env.PORT || 5000

var http = require('http'),
request = require('request'),
bodyParser = require('body-parser'),
errorHandler = require('express-error-handler');


var dbOperations = require("./dbOperations.js");
var logFmt = require("logfmt");



var app = express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .all('/userdata', (req, res) => res.sendStatus(200))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

/*


app.all('/userdata' , function(req,res) {
        //dbOperations.userdata(req,res);
        res.sendStatus(200);
});




*/

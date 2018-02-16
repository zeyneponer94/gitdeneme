var express = require('express'),
    http = require('http'),
    request = require('request'),
    bodyParser = require('body-parser'),
    errorHandler = require('express-error-handler'),
    app = express();

var dbOperations = require("./dbOperations.js");
var logFmt = require("logfmt");

app.set('views', path.join(__dirname, 'views'));

app.get('/' , function(req,res) {
    res.sendfile('pages/index.html');
});

app.post('/userdata' , function(req,res) {
    res.sendStatus(200);
});



app.set('port', process.env.PORT || 5000);
app.use(express.static(path.join(__dirname, 'public')));
app.use(errorHandler());
app.listen(app.get('port'), function () {
});


/*


app.all('/userdata' , function(req,res) {
        //dbOperations.userdata(req,res);
        res.sendStatus(200);
});




*/

var express = require('express'),
    app = express();
var request = require('request');

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
app.listen(app.get('port'), function () {
});


/*


app.all('/userdata' , function(req,res) {
        //dbOperations.userdata(req,res);
        res.sendStatus(200);
});




*/

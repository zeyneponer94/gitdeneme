
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
.use(express.static(path.join(__dirname, 'public')))
.set('views', path.join(__dirname, '/gitdeneme/views'))
.set('view engine', 'ejs')
.get('/', (req, res) => res.render('pages/index'))
.post('/userdata', (req, res) => res.sendStatus(200))
.listen(PORT, () => console.log(`Listening on ${ PORT }`))

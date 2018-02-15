const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


var dbOperations = require("./dbOperations.js");

app.post('/userdata',function(req,res){
         
         res.sendStatus(200);
         /*
         var email = req.body.email;
         var pass = req.body.password;
         var data = {
         "Data":""
         };
         connection.query("SELECT * from login WHERE email=? and password=? LIMIT 1",[email,pass],function(err, rows, fields){
                          if(rows.length != 0){
                          data["Data"] = "Successfully logged in..";
                          res.json(data);
                          }else{
                          data["Data"] = "Email or password is incorrect.";
                          res.json(data);
                          }
                          });*/
         });

module.exports = {
    
    
    
    userdata : function(req, res){
        


        var pg = require('pg');
        
        const conString = 'postgres://meivxnuxakxqvi:e501dbd3feafa616c3d31c68cc2c51474064ac1aefdcf395838fb79da3812cca@ec2-54-83-203-198.compute-1.amazonaws.com:5432/d9q6ascc3tnn62';
       // const conString = 'postgres://onerz15@itu.edu.tr:itu_cse_2018@localhost:5000/postgresql-defined-42923'
        
        var client = new pg.Client(conString);
        client.connect();
        // Grab data from http request
        const data = req.body;
        
        var query = client.query("insert into user_data_(user_id, username, acc_x, acc_y, acc_z, gyro_x, gyro_y, gyro_z, type, timestamp) " + "values ('" + data.user_id+"','"+data.username+"','"+data.acc_x+"','"+data.acc_y+"','"+data.acc_z+"','"+data.gyro_x+"','"+data.gyro_y+"','"+data.gyro_z+"','"+data.type+"','"+data.timestamp+"')");

  
        query.on("end", function (result) {
                 client.end();
                 res.send("Success");
                 res.end();
        });
        

    /*
        // SQL Query > Select Data
        
        
        var count = 0;
        
        query.on("row", function (row, result) {
                 result.addRow(row);
                 count++;
        });
        query.on("end", function (result) {
                 client.end();
                 res.writeHead(200, {'Content-Type': 'text/plain'});
                 if (count!=0)
                    res.write(JSON.stringify(result.rows, null, "    ") + "\n");
                 else
                    res.write('0');
                 res.send();
                 res.end();
       });
  */
       
    }

};




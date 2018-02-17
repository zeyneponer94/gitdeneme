module.exports = {
    
    
    
    userdata : function(req, res){
/*
        var pg = require('pg');
        
        var conString = "postgres://meivxnuxakxqvi:e501dbd3feafa616c3d31c68cc2c51474064ac1aefdcf395838fb79da3812cca@ec2-54-83-203-198.compute-1.amazonaws.com:5432/d9q6ascc3tnn62";
        var client = new pg.Client(conString);
        client.connect();
        // Grab data from http request
        const data = req.body;
        var obj = JSON.parse(req.body);*/
        
        res.send(req.body);
        /*
        var query = client.query("INSERT INTO user_data_(user_id, username, acc_x, acc_y, acc_z, gyro_x, gyro_y, gyro_z, type, timestamp) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)", [obj.user_id, obj.username, obj.acc_x, obj.acc_y, obj.acc_z, obj.gyro_x, obj.gyro_y, obj.gyro_z, obj.type, obj.timestamp]);
        
        // SQL Query > Select Data
        const query = client.query("SELECT * FROM user_data");
        // Stream results back one row at a time
        
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
            res.end();
        });*/
        /*
                   query.on('row', (row) => {
                            results.push(row);
                            });
                   // After all data is returned, close connection and return results
                   query.on('end', () => {
                            done();
                            return res.json(results);
                            });
                   });*/

};




module.exports = {
    
    
    
    userdata : function(req, res){
        


        var pg = require('pg');
        
        //const conString = 'postgres://meivxnuxakxqvi:e501dbd3feafa616c3d31c68cc2c51474064ac1aefdcf395838fb79da3812cca@ec2-54-83-203-198.compute-1.amazonaws.com:5432/d9q6ascc3tnn62';
        const conString = 'postgres://onerz15@itu.edu.tr:itu_cse_2018@localhost:5000/postgresql-defined-42923'
        
        var client = new pg.Client(conString);
        client.connect();
        // Grab data from http request
        const data = req.body;
        var results = [];
        
      //  client.query('INSERT INTO user_data_(user_id, username, acc_x, acc_y, acc_z, gyro_x, gyro_y, gyro_z, type, timestamp) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', [data.user_id, data.username, data.acc_x, data.acc_y, data.acc_z, data.gyro_x, data.gyro_y, data.gyro_z, data.type, data.timestamp]);
        
        // SQL Query > Select Data
        var query = client.query('SELECT COUNT(*) FROM user_data_');
        // Stream results back one row at a time
        //var count = 0;
      /*  query.rows.forEach(row=>{
             results.push(row);
             count++;
        });*/
        client.end();
        res.send(""+query);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        if (query!=0)
            res.write(JSON.stringify(results, null, "    ") + "\n");
        else
            res.write('0');
        res.send(""+query);
        res.end();
        /*
                   query.on('row', (row) => {
                            results.push(row);
                            });
                   // After all data is returned, close connection and return results
                   query.on('end', () => {
                            done();
                            return res.json(results);
                            });*/
    }

};




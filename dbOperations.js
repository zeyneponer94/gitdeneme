module.exports = {
    
    
    
    userdata : function(req, res){
        
        var pg = require('pg');
        
        var conString = "postgres://meivxnuxakxqvi:e501dbd3feafa616c3d31c68cc2c51474064ac1aefdcf395838fb79da3812cca@ec2-54-83-203-198.compute-1.amazonaws.com:5432/d9q6ascc3tnn62";
        
        const results = [];
        const data = {text: req.body.text, complete: false};
        pg.connect(conString, (err, client, done) => {
                   // Handle connection errors
                   if(err) {
                    done();
                    console.log(err);
                    return res.status(500).json({success: false, data: err});
                   }

                   client.query('INSERT INTO user_data(user_id, username, acc_x, acc_y, acc_z, gyro_x, gyro_y, gyro_z, type, timestamp) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
                                [data.text.user_id, data.text.username, data.text.acc_x, data.text.acc_y, data.text.acc_z, data.text.gyro_x, data.text.gyro_y, data.text.gyro_z, data.tex.type, data.text.timestamp]);
                   // SQL Query > Select Data
                   const query = client.query('SELECT * FROM user_data');
                   // Stream results back one row at a time
                   query.on('row', (row) => {
                            results.push(row);
                            });
                   // After all data is returned, close connection and return results
                   query.on('end', () => {
                            done();
                            return res.json(results);
                    });
        });
        

 
    
};




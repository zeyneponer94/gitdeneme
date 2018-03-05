module.exports = {
    
    
    
    userdata : function(req, res){
        


        var pg = require('pg');
        
        const conString = 'postgres://meivxnuxakxqvi:e501dbd3feafa616c3d31c68cc2c51474064ac1aefdcf395838fb79da3812cca@ec2-54-83-203-198.compute-1.amazonaws.com:5432/d9q6ascc3tnn62';
        
        var client = new pg.Client(conString);
        client.connect();
        const data = req.body;
        
        
        
        var i = 0;
        
        data.forEach( function(_data){
            console.log(_data);
            var query = client.query("insert into user_data_(user_id, username, acc_x, acc_y, acc_z, gyro_x, gyro_y, gyro_z, type, ntrial, timestamp) " + "values ('" + data[i].user_id+"','"+_data.username+"','"+_data.acc_x+"','"+_data.acc_y+"','"+_data.acc_z+"','"+_data.gyro_x+"','"+_data.gyro_y+"','"+_data.gyro_z+"','"+_data.type+"','"+_data.ntrial+"','"+_data.timestamp+"')");
        })
        res.sendStatus(200);
        /*while(data[i].user_id != null)
        {
      
            console.log(data[i].user_id);
            var query = client.query("insert into user_data_(user_id, username, acc_x, acc_y, acc_z, gyro_x, gyro_y, gyro_z, type, ntrial, timestamp) " + "values ('" + data[i].user_id+"','"+data[i].username+"','"+data[i].acc_x+"','"+data[i].acc_y+"','"+data[i].acc_z+"','"+data[i].gyro_x+"','"+data[i].gyro_y+"','"+data[i].gyro_z+"','"+data[i].type+"','"+data[i].ntrial+"','"+data[i].timestamp+"')");
            i++;
            res.sendStatus(200);
        }*/

    }

};




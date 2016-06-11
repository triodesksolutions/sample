var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// routes will go here
 app.get('/api/:version', function(req, res) {
        if(req.params.version==1){
                res.send('ON');
        }else if(req.params.version==0){
                res.send('OFF');
        }else{
                res.send('invalid');
        }
  });
// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
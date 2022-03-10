//Initial setup
const express = require('express');
const webapp = express();
const http = require('http').Server(webapp);
const port = process.env.PORT || 3008;

webapp.use(express.static('includes'));

webapp.set('views','./src/views');
webapp.set('view engine', 'ejs');

// Default page display
webapp.get('/',function(req, res){
    res.render('sscc', {});
});

//http version of the listen
http.listen(port, function(err){
    console.log('The server is running on port: ' + port);
});
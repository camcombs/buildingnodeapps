// example 2-1

var express = require('express');
var app = express();



app.get('/stooges/:name?', function(req, res, next) {
        var name = req.params.name;
        
        switch( name ? name.toLowerCase() : '' ) {
            case 'larry':
            case 'curly':
            case 'moe':
                res.send(name + ' is my favorite stooge');
                break;
            
            default:
                next();
        }
    
    });
    
    app.get('/stooges/*?',function(req, res) {
       console.log('path: ' + req.path)
       res.send('no stooges listed') ;
           
    });
    
    app.get('/?', function(req, res){
        res.send('hello world');
        
    });
    
    var port = process.env.PORT;
    app.listen(port);
    console.log('listening on port' + port);
    
    
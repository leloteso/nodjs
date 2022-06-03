var http = require("http");
var fs = require('fs');
http.createServer(function(req,res){
    fs.readFile('test.txt', function(err, data){
        res.writeHead(200,{'content-type':'text/html'});
    res.write("This is text data from server: " + data);
  
    return res.end();
});
}).listen(8080);
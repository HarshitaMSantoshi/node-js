const http = require('http');
/*
//let server = http.createServer(function(req, res){
http.createServer(function(req, res){
    //console.log(req);
    res.end('Hello world');
    //takes the request gives a response and end closes it
}).listen(3000, ()=>console.log('Server Up and Running'));

//server.listen(3000, ()=>console.log('Server Up and Running'))
*/

http.createServer(function(req, res){

    console.log(req.url);
    if(req.url == '/about'){
        res.writeHead(200, {'content-type':'text/plain'})
        //res.statusCode=200;
        res.end('About me');
    }else if(req.url == '/blog'){
        //res.statusCode=200;
        res.end('Blog page');
    }else{
        res.statusCode=404;
        res.end('Page not found');
    }
    
}).listen(3000, ()=>console.log('Server Up and Running'));
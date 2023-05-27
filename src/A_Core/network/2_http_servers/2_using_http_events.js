let http=require('http');

let server=http.createServer();
server.on('request',function (req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("Hello world");
});
server.listen(3000);

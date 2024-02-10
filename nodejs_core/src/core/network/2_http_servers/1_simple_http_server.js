let http=require('http');

http.createServer(function (req,res){
    console.log(req)
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("Hello world")
}).listen(3000,'127.0.0.1');
//We will pass "port" and "IP" to listen function.It is optional
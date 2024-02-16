let http=require('http');
let util =require('util');

let server=http.createServer();
server.on('request',function (req,res){
    console.log("Request headers:")
    console.log(util.inspect(req.headers));
    
    res.writeHead(200,{'Content-Type':'text/plain'});
    console.log("Response headers:")
    console.log(util.inspect(res.headers));

   
    res.end("Hello")
});
server.listen(3000);
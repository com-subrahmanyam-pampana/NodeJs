let http=require('http');
let fs=require('fs');
let server=http.createServer();
server.on('request',function (req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var html=fs.readFileSync(__dirname+'/home.html')
    res.end(html)
});
server.listen(3000);
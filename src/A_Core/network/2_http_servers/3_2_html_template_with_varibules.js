let http=require('http');
let fs=require('fs');
let server=http.createServer();
server.on('request',function (req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    let html=fs.readFileSync(__dirname+'/hometemplate.html','utf8')
    html=html.replace('{userName}','subbu')
    res.end(html)
});
server.listen(3000);
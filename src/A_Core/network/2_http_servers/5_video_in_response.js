let http=require('http');
let fs=require('fs');

let server=http.createServer();
server.on('request',function (req,res){ 
    res.writeHead(200,{'Content-Type':'video/mp4'});
    let videostream=fs.createReadStream('assets/demo.mp4')
    videostream.pipe(res)
});
server.listen(3000);
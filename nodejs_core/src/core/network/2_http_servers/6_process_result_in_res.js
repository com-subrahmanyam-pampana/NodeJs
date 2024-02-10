let http=require('http');
let child_process=require('child_process');
let spawn=child_process.spawn;

let server=http.createServer();
server.on('request',function (req,response){ 
    let child=spawn('node',['test.js']);
    child.stdout.pipe(response);
    response.on('end',()=>{
       child.kill();
    })
});
server.listen(3000);
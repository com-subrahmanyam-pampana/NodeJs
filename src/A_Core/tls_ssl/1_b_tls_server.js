

const tls=require('tls');
const fs=require('fs');
const path = require('node:path');
let p1=path.normalize('C:\\subbu\\my_key_1.pem');
let p2=path.normalize('C:\\subbu\\my_cert_1.pem');
let options={
    key:fs.readFileSync(p1),
    cert:fs.readFileSync(p2)
}
let server=tls.createServer(options);
server.listen(3000);

server.on('secureConnection',(stream)=>{
    console.log("Connected....")
})

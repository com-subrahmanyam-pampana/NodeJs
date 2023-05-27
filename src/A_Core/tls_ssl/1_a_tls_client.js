

const tls=require('tls');
const fs=require('fs');
const path = require('node:path');


let p1=path.normalize('C:\\subbu\\my_key_1.pem');
let p2=path.normalize('C:\\subbu\\my_cert_1.pem');
let options={
    key:fs.readFileSync(p1),
    cert:fs.readFileSync(p2)
}
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
let client=tls.connect(3000,'localhost',options,function(){
  console.log("Connected to server")
});

//Warning: Setting the NODE_TLS_REJECT_UNAUTHORIZED environment 
//variable to '0' makes TLS connections and HTTPS requests insecure 
//by disabling certificate verification.
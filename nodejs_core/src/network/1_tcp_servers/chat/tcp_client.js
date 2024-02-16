let net=require('net');
let client=net.createConnection(3000);
//use same port of server 
client.on('data',function(data){
    console.log(data.toString());
    client.write("I received your message")
})
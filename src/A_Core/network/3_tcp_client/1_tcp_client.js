let net=require('net');
let connection=net.createConnection(3000);
connection.on('data',function(data){
    console.log(data.toString());
    connection.write("I received your message")
})
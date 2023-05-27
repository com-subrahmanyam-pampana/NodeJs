
const http=require('http')
console.log("Hi");
console.log(http)

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plane')
    res.end('Hello World')
});

const port=3000;
const ip='127.0.0.1';
server.listen(port,ip,()=>{
console.log(`Server running on ${port}`);
});
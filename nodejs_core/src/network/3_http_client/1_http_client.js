

const http_client=require('http');

let request1={
   host:'www.google.com',
   port:80,
   path:'/index.html'
}

http_client.get(request1,function(response){
  console.log(response.statusCode);
});


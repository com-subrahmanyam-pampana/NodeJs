

const http_client=require('http');

let request_options={
   host:'www.google.com',
   port:80,
   path:'/upload',
   method:"POST"
}

let post_request=http_client.request(request_options,function(response){
   response.on('data',function(tempData){
    console.log(tempData)
   })
});

post_request.write("POST Request");
post_request.end();


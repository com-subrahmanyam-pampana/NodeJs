

const http_client=require('http');

const request1 = {
  hostname: 'api.coindesk.com',
  path: '/v1/bpi/currentprice.json',
  method: 'GET'
};

http_client.get(request1,function(response){
  let tempData = ""
  response.on('data', (chunk) => {
    tempData += chunk;
  });
  response.on('end', () => {
      console.log(JSON.parse(tempData))
  });
});


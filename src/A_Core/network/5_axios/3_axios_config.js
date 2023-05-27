
const axios = require("axios");

async function  getData(){
  const config = {
    method: 'get',
    url: 'https://api.publicapis.org/entries',
    headers: { 'User-Agent': 'Node JS' }
}
  let response=await axios(config);
  if(response!=null&&response.data!=null){
    console.log(response.data);
  }
}

getData();


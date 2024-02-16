
//HEAD request = GET request without a  body.
const axios = require("axios");

async function  getData(){
 
  let response=await axios.head('https://reqbin.com/echo/get/json');
  if(response!=null&&response.data!=null){
    console.log(response.data);
  }
}

getData();


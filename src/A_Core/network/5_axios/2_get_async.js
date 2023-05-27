
const axios = require("axios");

async function  getData(){
  let response=await axios.get('https://api.publicapis.org/entries');
  if(response!=null&&response.data!=null){
    console.log(response.data);
  }
}

getData();


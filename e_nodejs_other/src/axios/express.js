const express = require("express");
const axios = require('axios');
const app = express();

const port = 3000;

async function addUser() {
    let user = {
        "name": "morpheus",
        "job": "leader"
    };
    let response = await axios.post('https://reqres.in/api/users', user);
    if(response!=null&&response.data!=null){
        let data = response.data;
        console.log(data);
        return data;
    }else{
        return null
    }  
}

app.get("/wish", async (req, res) => {
  const userData=await addUser();
  if(userData){
    res.send(userData);
  }else{
    res.send("");
  }
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);


let axios = require('axios');

async function addUser() {
    let user = {
        "name": "morpheus",
        "job": "leader"
    };
    let response = await axios.post('https://reqres.in/api/users', user);
    if(response!=null&&response.data!=null){
        let data = response.data;
        console.log(data);
    }  
}

addUser();
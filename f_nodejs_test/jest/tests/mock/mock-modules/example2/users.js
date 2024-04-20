const  axios =require('axios');

/*Suppose we have a class that fetches users 
from our API. The class uses axios to call the API 
then returns the data 
attribute which contains all the users: */
class Users {
  static all() {
    return axios.get('/users.json').then(resp => resp.data);
  }
}

module.exports=Users;

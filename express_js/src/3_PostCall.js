
/*
express.bodyParser() is no longer bundled as part of express. 
You need to install it separately before loading.
Install body-parser 
*/

const express = require('express');
const basicAuth = require('express-basic-auth')
const app = express();
const bodyParser = require('body-parser')
const port = 3000;

// create a application/json parser
const jsonParser = bodyParser.json()
 
// create a application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(basicAuth({
    users: { 'admin': 'super_25634_secret' }
}))



app.post("/login",jsonParser,(req, res) => {
    let username = req.body.user;
    let password = req.body.password;
    res.end("yes");
});


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

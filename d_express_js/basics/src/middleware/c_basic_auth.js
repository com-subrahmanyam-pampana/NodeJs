const express = require('express');
const basicAuth = require('express-basic-auth')
const app = express();

const port = 3000;


app.use(basicAuth({
    users: { 'admin': 'super_secret' }
}))

/*The middleware will now check incoming requests 
to match the credentials admin:super_secret */
app.get('/', (req, res) => {
    res.send('Hello World, from express');
});


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

/*To add auth in POSTMAN,
Authorization=>Basic Auth=> give 
Username:'admin' and 
password:'super_secret'
 */
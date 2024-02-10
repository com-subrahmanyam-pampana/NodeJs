const express = require('express');
const basicAuth = require('express-basic-auth')
const app = express();

const port = 3000;


app.use(basicAuth({
    users: { 'admin': 'super_25634_secret' }
}))

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

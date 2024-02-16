
const express=require('express')
const path = require('path')

const app=express()

const mypath=path.join(__dirname, '/images');

app.use('/static', express.static(mypath))

app.listen(3000,()=>{
    console.log("App is listening....")
});
// to access the image
//http://localhost:3000/static/myimage.png
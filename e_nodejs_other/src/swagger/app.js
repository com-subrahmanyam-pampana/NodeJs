const express=require('express');
const app=express();
const swaggerUI=require('swagger-ui-express');
const swaggerDocument=require('./swagger.json');

app.use('./api-doc',swaggerUI.serve,swaggerUI.setup(swaggerDocument))
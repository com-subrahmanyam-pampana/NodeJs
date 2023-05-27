const knexConfig=require("./knexfile");

const knex=require('knex')(knexConfig["staging"]);

knex.raw("SELECT 1").then(()=>{
    console.log("Database is connected")
}).catch((e)=>{
    console.log("Data base is not connected")
});
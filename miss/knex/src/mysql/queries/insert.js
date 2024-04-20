

const knexConfig=require("../knexfile");
const knex=require('knex')(knexConfig["staging"]);



knex('users')
    .insert({name, email})
    .then((id) => {
    //get user by id
    knex('users')
        .select({
        id: 'id',
        name: 'name'
    })
        .where({id})
        .then((user) => {
        return res.json(user[0]);
    })
})
    .catch((err) => {
    console.error(err);
    return res.json({success: false, message: 'An error occurred, please try again later.'});
});

const knexConfig = require("../knexfile");
const knex = require('knex')(knexConfig["staging"]);
const { Model } = require('objection');

// Give the knex instance to objection.
Model.knex(knex);

class UsersModel extends Model {
    static get tableName() {
        return 'users';
    }
}

async function getUser() {
    const user = await UsersModel.query()
        .where('name', 'Subbu');
    return user;
}

getUser().then((data) => {
    console.log(data)
}).catch((e) => {
    console.log(e)
})

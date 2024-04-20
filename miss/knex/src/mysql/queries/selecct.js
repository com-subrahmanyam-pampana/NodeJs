
/*To retrieve data from the database using Knex.js, 
you first use knex(<TABLE_NAME>) to access the table, 
then use the method select to specify which columns 
you want to retrieve */

/*Finally, to use the retrieved data you can either use
 a Promise or a callback. */

const knexConfig=require("../knexfile");
const knex=require('knex')(knexConfig["staging"]);

 knex('movies')
  .select({
    title: 'title',
    release_year: 'release_year'
  })
  .then((movies) => {
    console.log(movies);
  })
  .catch((err) => {
    console.error(err);
  })